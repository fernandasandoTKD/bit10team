import React, {useState} from 'react'
import CardAbout from './CardAbout'
import './css/card.css';
import mari from '../img/1.png';
import eus from '../img/2.png';
import lu from '../img/3.png';
import en from '../img/4.png';
const Cards = () => {
    const [persons] = useState([
      {
        id: 1,
        name: "Mariangel Socorro",
        taks: "Documentación",
        role:" Lic. en Administración y aprendiz de desarrollo web Frontend con enfasis en React JS. Continuamente aprendiendo y adquiriendo nuevas habilidades en función a las actuales y futuras demandas y tendencias tecnológicas en el campo del diseño y desarrollo web en general.",
        img: mari,
        portafolio: "https://maribsu1.github.io/bit07me/",
        linkedin: "https://www.linkedin.com/in/mariangelsocorro/",
        git: "https://github.com/maribsu1"
      },
      {
        id: 2,
        name: "Luisa Díaz Sandoval",
        taks:"Despliegue y repositorio",
        role: "Profesional desempeñada en el área educativa con experiencia en la enseñanza de lenguajes de programación en las ramas de Frontend y Backend, procesos de ejecución de ciclos y reportes de incidencia, desde la planificación y diseño de interfaz de usuario.",
        img: lu ,
        portafolio: "https://fernandasandotkd.github.io/bit07me/",
        linkedin:"https://www.linkedin.com/in/lufe-diaz-s/",
        git:"https://github.com/fernandasandoTKD"
      },
      {
        id: 3,
        name: "Eusbeidy Pérez",
        taks:"Wireframe de alta",
        role: "Aprendiz desarrollo web Front-End Junior con conocimientos en lenguajes de maquetado y de marcado y programación en JavaScript con uso de framework React JS, en continuo aprendizaje de forma didáctica, dispuesta siempre a enfrentar nuevos retos.",
        img: eus,
        portafolio: "https://eusbeidy.github.io/bit07me/",
        linkedin:"https://www.linkedin.com/in/eusbeidy-perez/",
        git: "https://github.com/eusbeidy"
      },
      {
        id: 4,
        name: "Enrique Abril",
        taks: "Desarrollo CRUD",
        role: "Ecommercer / Software Developer Me dedico al diseño publicitario, estrategias de marketing digital y atención al cliente especialmente en ventas.",
        img: en,
        portafolio: "https://kiketach.github.io/bit07me/",
        linkedin:"https://www.linkedin.com/in/enrique-abril-contreras/",
        git:"https://github.com/kiketach"
      },
    ]);
  
    return (
    <div className="container ">
      <div className="row ">
        
        {persons.map((person) => {
          return (
            <CardAbout 
              key={person.id}
              name={person.name}
              taks={person.taks}
              img={person.img}
              role={person.role}
              portafolio={person.portafolio}
              linkedin={person.linkedin}
              git={person.git}
            />
          );
        })}
      </div>
      </div>
      
    );
  };
  
export default Cards;