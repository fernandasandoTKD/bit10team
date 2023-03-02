import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from '../img/b1.jpg';

export const Home = () => {
  const [contests, setContests] = useState(null);
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getContests();
  }, []);

  useEffect(() => {
    if (contests) {
      getData();
    }
  }, [contests, searchTerm]);

  const getContests = async () => {
    try {
      const res = await fetch("https://kontests.net/api/v1/all");
      setContests(await res.json());
    } catch (error) {
      console.log("Upss.. hay un error");
    }
  };

  const getData = () => {
    const filteredContests = contests.filter((contest) => {
      return contest.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const array = filteredContests.slice(0, 6).map((contest, index) => {
      const duration = Math.floor(
        (new Date(contest.end_time) - new Date(contest.start_time)) /
          (1000 * 60 * 60)
      )
        .toString()
        .slice(0, 2);

      return (
        <Card
          key={index}
          style={{
            width: "18rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            fontFamily: "philosopher",
          }}
        >
          <Card.Title className="h2 text-center">{contest.name}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item
              style={{ backgroundColor: "transparent", color: "white" }}
            >
              <li className="h6">Fecha de inicio:</li>
              {contest.start_time.substring(0, 10)}.
            </ListGroup.Item>
            <ListGroup.Item
              style={{ backgroundColor: "transparent", color: "white" }}
            >
              <li className="h6">Duración:</li>
              {duration} horas.
            </ListGroup.Item>
            <ListGroup.Item
              style={{ backgroundColor: "transparent", color: "white" }}
            >
              <a
                href={contest.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "block",
                  textAlign: "center",
                  color: "blue",
                }}
              >
                Visitar sitio
              </a>
            </ListGroup.Item>
          </ListGroup>
          <Button className="m-2" variant="primary">
            Editar
          </Button>
          <Button className="m-2" variant="primary">
            Eliminar
          </Button>
        </Card>
      );
    });

    setData(array);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ marginTop: "6rem" }}
      >
        <div style={{ textAlign: "left" }}>
          <h1 style={{ fontFamily: "Tilt neon", color: "white" }}>
            ¡Bienvenido a nuestro sitio de concursos y hackathones!
          </h1>
          <h2
            className="text-center py-4"
            style={{ fontFamily: "Tilt neon", color: "white" }}
          >
            Pon a prueba tus conocimientos y participa en los mejores concursos
            y hackathones de programación...
          </h2>
          <Button
            className="mx-4 my-2"
            variant="light"
            size="lg"
            style={{ fontFamily: "Philosopher" }}
          >
            Conoce más
          </Button>
        </div>
        <img
          src={Image}
          alt="programming"
          style={{ width: "40%", height: "auto" }}
        />
      </div>
      <div className="d-flex justify-content-center mb-4">
        <Form.Control
          type="text"
          placeholder="Buscar por nombre"
          onChange={handleSearch}
          value={searchTerm}
          style={{ width: "400px", marginRight: "10px" }}
        />
      </div>
      <Container>
        <Row>
          {data &&
            data.map((card, index) => (
              <Col key={index} xs={12} md={4}>
                {card}
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};
