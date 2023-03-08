import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "../img/b1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

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
            margin: "8px",
            height: "280px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.3)", // Agregar sombra
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
                className="btn btn-dark btn-auto"
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Visitar sitio
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      );
    });

    setData(array);
  };

  const handleConoceMasClick = () => {
    const searchElement = document.getElementById("search");
    searchElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  {
    /* Sección de imagen con animación */
  }
  return (
    <section>
      <div
        className="d-flex justify-content-between align-items-center text-alig"
        style={{ marginTop: "6rem" }}
      >
        <div style={{ textAlign: "left" }}>
          <h1
            style={{
              paddingLeft: "30px",
              marginTop: "-80px",
              fontFamily: "Tilt neon",
              color: "black",
              fontWeight: "bold",
            }}
          >
            ¡Bienvenido a nuestro sitio de concursos y hackathones!
          </h1>
          <h4
            className="text-center py-4"
            style={{ fontFamily: "Tilt neon", color: "black" }}
          >
            Pon a prueba tus conocimientos y participa en los mejores concursos
            y hackathones de programación...
          </h4>
          <Button
            variant="light"
            size="lg"
            style={{
              fontFamily: "Philosopher",
              fontWeight: "bold",
              marginLeft: "3rem",
              marginTop: "2rem",
            }}
            onClick={handleConoceMasClick}
          >
            Conoce más
          </Button>
        </div>
        <img
          src={Image}
          alt="programming"
          className="animated-image"
          style={{ width: "35%", height: "auto" }}
        />
      </div>

      {/* Sección de buscador */}
      <div id="search"></div>
      <hr className="light" />
      <div className="d-flex justify-content-center mb-4">
        <Form style={{ display: "flex", alignItems: "center" }}>
          <Form.Control
            type="text"
            placeholder="Buscar por nombre"
            onChange={handleSearch}
            value={searchTerm}
            style={{
              width: "400px",
              marginRight: "10px",
              marginTop: "30%",
              fontFamily: "Tilt neon",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />

          <FontAwesomeIcon
            icon={faSearch}
            style={{
              height: "25px",
              marginRight: "10px",
              marginTop: "30%",
              color: "gray",
            }}
          />
        </Form>
      </div>

      {/* Sección de contenedor de cartas */}
      <Container className="pb-2">
        <Row>
          {data &&
            data.map((card, index) => (
              <Col key={index} xs={12} md={6} sm={6} lg={4} className>
                {card}
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};
