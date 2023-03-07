import React, {useState} from 'react'
import CardAbout from './CardAbout'
import './css/card.css';
import mari from '../img/1.png';
import eus from '../img/2.png';
import lu from '../img/3.png';

const Cards = () => {
    const [persons, setPersons] = useState([
      {
        id: 1,
        role: "Lic. en Administración y aprendiz de desarrollo web Frontend con enfasis en React JS. Continuamente aprendiendo y adquiriendo nuevas habilidades en función a las actuales y futuras demandas y tendencias tecnológicas en el campo del diseño y desarrollo web en general.",
        img: mari,
        url: "https://maribsu1.github.io/bit07me/"
      },
      {
        id: 2,
        role: "Profesional desempeñada en el área educativa con experiencia en la enseñanza de lenguajes de programación en las ramas de Frontend y Backend, procesos de ejecución de ciclos y reportes de incidencia, desde la planificación y diseño de interfaz de usuario.",
        img: lu ,
        url: "https://fernandasandotkd.github.io/bit07me/"
      },
      {
        id: 3,
        role: "Aprendiz desarrollo web Front-End Junior con conocimientos en lenguajes de maquetado y de marcado y programación en JavaScript con uso de framework React JS, en continuo aprendizaje de forma didáctica, dispuesta siempre a enfrentar nuevos retos.",
        img: eus,
        url: "https://eusbeidy.github.io/bit07me/",
      },
      {
        id: 4,
        role: "aqui va la descripcionmmmmmmbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbggggggggggggggggggggggggggggggggggggggggggggggg",
        img: eus,
        url: "https://kiketach.github.io/bit07me/",
      },
    ]);
  
    return (
    <div className="container">

    
      <div className="row">
        {persons.map((person) => {
          return (
            <CardAbout
              key={person.id}
              img={person.img}
              role={person.role}
              url={person.url}
            />
          );
        })}
      </div>
      </div>
    );
  };
  
export default Cards