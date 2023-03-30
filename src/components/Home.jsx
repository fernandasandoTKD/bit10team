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
import bus from '../img/buscar.png';

export const Home = () => {
  // Definimos tres estados iniciales utilizando el hook useState
  const [contests, setContests] = useState(null); // Estado para almacenar los datos de los concursos obtenidos de la API
  const [data, setData] = useState(null); // Estado para almacenar los datos procesados de los concursos
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda ingresado por el usuario

  // Definimos un efecto secundario que se ejecuta solo una vez, al montarse el componente
  useEffect(() => {
    getContests(); // Llamamos a la función getContests() que obtiene los datos de la API
  }, []);

  // Definimos un efecto secundario que se ejecuta cuando cambia el estado de "contests" o "searchTerm"
  useEffect(() => {
    if (contests) {
      getData(); // Si "contests" es diferente de nulo, llamamos a la función getData() que procesa los datos
    }
  }, [contests, searchTerm]);

  // Definimos una función asíncrona llamada "getContests" que obtiene los datos de los concursos desde la API
  const getContests = async () => {
    try {
      const res = await fetch("https://kontests.net/api/v1/all"); // Hacemos una petición a la API utilizando fetch
      setContests(await res.json()); // Si la petición es exitosa, actualizamos el estado "contests" con los datos obtenidos de la API
    } catch (error) {
      console.log("Upss.. hay un error"); // Si ocurre un error, lo mostramos en la consola
    }
  };

  // Definimos una función llamada "getData" que procesa los datos de los concursos obtenidos de la API
  const getData = () => {
    // Filtramos los datos de los concursos según el término de búsqueda ingresado por el usuario
    const filteredContests = contests.filter((contest) => {
      return contest.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    // Tomamos los primeros 6 concursos filtrados y los procesamos para obtener la duración en horas de cada uno
    const array = filteredContests.slice(0, 6).map((contest, index) => {
      // Calculamos la duración en horas de cada concurso
      const duration = Math.floor(
        (new Date(contest.end_time) - new Date(contest.start_time)) /
          (1000 * 60 * 60)
      )
        .toString()
        .slice(0, 2); // Tomamos solo los primeros dos caracteres para mostrar la duración en formato "xx horas"

      return (
         // Renderizamos una "Card" para cada objeto "contest" en el array "data"
        // Utilizamos el método "map" para iterar sobre el array y crear una "Card" para cada objeto
        <Card
          key={index}
          style={{
            width: "18rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            fontFamily: "philosopher",
            margin: "8px",
            height: "280px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            alignItems: "center",
            justifyContent: "center",
            fontSize:"16px"
            
          }}
        >
          <Card.Title className="h1 text-center " style={{fontSize:"16px" }}  id="tittle">{contest.name}</Card.Title>
          <ListGroup className="list-group-flush ">
            <ListGroup.Item
              style={{ backgroundColor: "transparent", color: "white", fontFamily:"tilt neon"}}
            >
              <li className="h6" style={{fontSize:"16px" }} >Fecha de inicio:</li>
              {contest.start_time.substring(0, 10)}.
            </ListGroup.Item>
            <ListGroup.Item
              style={{ backgroundColor: "transparent", color: "white", fontFamily:"tilt neon" }}
            >
              <li className="h6" style={{fontSize:"16px" }}>Duración:</li>
              {duration} horas.
            </ListGroup.Item>
            <ListGroup.Item
              style={{ backgroundColor: "transparent", color: "white"}}
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

  // Definimos una función llamada "handleConoceMasClick" que se ejecuta cuando el usuario hace click en el botón "Conoce más".
 // Esta función utiliza la función "scrollIntoView" para hacer scroll hasta el elemento con id "search" de forma suave.
  const handleConoceMasClick = () => {
    const searchElement = document.getElementById("search");
    searchElement.scrollIntoView({ behavior: "smooth" });
  };

  // Definimos una función llamada "handleSearch" que se ejecuta cuando el usuario ingresa un término de búsqueda en la barra de búsqueda.
  // Esta función utiliza la función "setSearchTerm" para actualizar el estado "searchTerm" con el valor ingresado por el usuario.
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  
  return (
    <section>
      <div
        className="d-flex justify-content-between align-items-center text-align-center"
        style={{ marginTop: "6rem" }}
      >
        <div >
        {/* Encabezado principal */}
          <h1 id="h1" style={{
              fontSize:"30px",}} >
            ¡Bienvenido a nuestro sitio de concursos y hackathones!
          </h1>
          {/* Descripción del sitio */}
          <h4
            className="text-center py-4 pt-5"
            style={{ fontFamily: "Tilt neon", color: "black", fontSize:"20px" }}
          >
            Pon a prueba tus conocimientos, enterate, retate y participa en los mejores eventos de programación, para 
            fortalecer tus habilidades propicias para este siglo. 
          </h4>
          

          {/* Botón "Conoce más" */}
          <Button id="button"
            variant="light"
            size="lg"
            style={{
              fontFamily: "Philosopher",
              fontWeight: "bold",
              fontSize:"20px",
              marginLeft: "30rem",
              marginTop: "2rem",
            }}
            onClick={handleConoceMasClick}
          >
            Ver concursos
          </Button>

          
        </div>
        {/* Imagen animada del home*/}
        <img
          src={Image}
          alt="programming"
          className="animated-image"
          style={{ width: "35%", height: "auto" }}
        />
      </div>

      {/* Sección de buscador */}
      <div className="con align-items-center">
      <div id="search"></div>
      <hr className="light" />
     {/* Crea un formulario para buscar por nombre*/}
      <div className="d-flex justify-content-center mb-4" id="form">
        <Form style={{ display: "flex", alignItems: "center" }}> 
          <Form.Control
            type="text"
            id="input"
            placeholder="Buscar por nombre"
            onChange={handleSearch}
            value={searchTerm}
            
          />

          <img src={bus} alt="" 
          style={{height: "25px",
          marginRight: "10px",
          marginTop: "30%",
          color: "gray",}}/>
        </Form>
      </div>

      {/* Sección de contenedor de cartas */}
      <Container className="pb-2 flexDirection-center  " >
        <Row >
          {data &&
            data.map((card, index) => (
              <Col key={index} xs={12} md={6} sm={6} lg={4} className="flexDirection-center text-center d-flex" >
                {card}
              </Col>
            ))}
        </Row>
      </Container>

      </div>
    </section>
  );
};
