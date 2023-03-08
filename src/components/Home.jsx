import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { show_alerta } from "./ShowAlert";
import Image from "../img/b1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import axios from 'axios';


export const Home = () => {
  const [contests, setContests] = useState(null);
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

const [show, setShow] = useState(false);
const [name,setName]= useState('');
const [title,setTitle]= useState('');
const [duration,setDuration]= useState('');
const [date,setDate]= useState('');
const [site,setSite]= useState('');
const [operation,setOperation]= useState(1);




/* Function de abrir modal para determinar operación a realizar. */

const openModal=(op, name, date, duration, site)=>{
  setName(' ');
  setDate(' ');
  setDuration(' ');
  setSite(' ');
  setOperation(1);
  if(op === 1){
    setTitle('Registrar concurso');
}
else if(op === 2){
    setTitle('Editar Producto');
    setName(name);
    setDate(date);
    setDuration(duration);
    setSite(site);
}
window.setTimeout(function(){
    document.getElementById('nombre').focus();
},500);
}

const validar = () => {
  var parametros;
  var metodo;
  if(name.trim() === ''){
      show_alerta('Escribe el nombre del concurso','warning');
  }
  else if(date .trim() === ''){
      show_alerta('Selcciona la fecha del curso','warning');
  }
  else if(duration === ''){
      show_alerta('Escribe el precio del producto','warning');
  }
  else if(site === ''){
    show_alerta('Escribe el precio del producto','warning');
}
  else{
      if(operation === 1){
          parametros= {name:name.trim(),date: date.trim(),duration:duration,site:site};
          metodo= 'POST';
      }
      else{
          parametros={name:name.trim(),date: date.trim(),duration:duration, site:site};
          metodo= 'PUT';
      }
      envarSolicitud(metodo,parametros);
  }
}
const envarSolicitud = async(metodo,parametros) => {
  await axios({ method:metodo, url: setContests, data:parametros}).then(function(respuesta){
      var tipo = respuesta.data[0];
      var msj = respuesta.data[1];
      show_alerta(msj,tipo);
      if(tipo === 'success'){
          document.getElementById('btnCerrar').click();
          getContests();
      }
  })
  .catch(function(error){
      show_alerta('Error en la solicitud','error');
      console.log(error);
  });
}




const handleSubmit = async (e) => {
  e.preventDefault();
}
  
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
            margin: "8px"
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
  

  
  
/* Sección de imagen con animación */
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
              fontWeight: "bold"
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
            style={{ fontFamily: "Philosopher", fontWeight: "bold" ,
            
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
      <hr className="light"/>
      <div className="d-flex justify-content-center mb-4">
        <Form style={{ display: "flex", alignItems: "center" }}>
          
          <Form.Control
            type="text"
            placeholder="Buscar por nombre"
            onChange={handleSearch}
            value={searchTerm}
            style={{ width: "400px", marginRight: "10px", marginTop: "50px" , fontFamily: "Tilt neon"}}
          />
          
          <FontAwesomeIcon
            icon={faSearch}
            style={{ height: "25px", marginRight:  "10px", marginTop: "50px", color: "gray" }}
          />
        </Form>
</div>


{/* Sección de contenedor de cartas */}
      <Container className="pb-2" >
        <Row  >
          {data &&
            data.map((card, index) => (
              <Col key={index} xs={12} md={6} sm={6} lg={4} 
              className>
                {card}
              </Col>
            ))}
        </Row>
        
      </Container>
    </section>
  );
};
