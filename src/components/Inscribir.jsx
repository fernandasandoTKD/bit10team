import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter } from 'react-bootstrap';
import './css/inscribir.css';

export default function Inscribir() {
  
  const dataArt = [
    { id: 1, name: "Pepe ramirez", nacio: "Peruano",  test:"Presento", contact: 25},
    
   
  ];
  const [data, setData] = useState(dataArt);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [artSeleccionado, setArtSeleccionado] = useState({
    id: '',
    name: '',
    test: '',
    nacio: '',
    contact: ''
  });
  const seleccionarPais=(listado, caso)=>{
    setArtSeleccionado(listado);
(caso ==='Editar')?setModalEditar(true):setModalEliminar(true)
  }
  const handleChange=e=>{
    const {name, value}=e.target;
    setArtSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }
  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(nuevo=>{
      if(nuevo.id===artSeleccionado.id){
        nuevo.name=artSeleccionado.name;
        nuevo.nacio=artSeleccionado.nacio;
        nuevo.test=artSeleccionado.test;
        nuevo.contact=artSeleccionado.contact;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }
  const eliminar =()=>{
    setData(data.filter(pais=>pais.id!==artSeleccionado.id));
    setModalEliminar(false);
  }
  const abrirModalInsertar=()=>{
    setArtSeleccionado(null);
    setModalInsertar(true);
  }
  const insertar =()=>{
    var valorInsertar=artSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }
  return (
    
    <div className="concurso">
    <div class= "tabla">
      <h2>Inscripción previa</h2>
      <br />
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id inscrito</th>
            <th>Nombre de concursante</th>
            <th>Nacionalidad</th>
            <th>Test</th>
            <th>Contacto</th>
            <th>Sección</th>
          </tr>
        </thead>
        <tbody>
          {data.map(listado=>(
            <tr>
              <td>{listado.id}</td>
              <td>{listado.name}</td>
              <td>{listado.nacio}</td>
              <td>{listado.test}</td>
              <td>{listado.contact}</td>
              <td>
              <button type="button" class="btn btn-outline-danger" onClick={()=>seleccionarPais(elemento, 'Eliminar')}>Eliminar</button>
                <button type="button" class="btn btn-outline-primary" onClick={()=>seleccionarPais(elemento, 'Editar')}>Editar</button> {"   "} 
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <button type="button" class="btn btn-outline-warning ">Guardar inscripción</button>
      <button type="button" class="btn btn-outline-success" onClick={()=>abrirModalInsertar()}>Ingresar nueva inscripción</button>
      </div>
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar inscripción</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Id de inscrito.</label>
            <input
              className="form-control"
              readOnly
              type="number"
              name="id"
              value={artSeleccionado && artSeleccionado.id}
            />
            <br />
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={artSeleccionado && artSeleccionado.name}
              onChange={handleChange}
            />
            <br />
            <label>Estado de test</label>
            <input
              className="form-control"
              type="text"
              name="nacionalidad"
              value={artSeleccionado && artSeleccionado.nacio}
              onChange={handleChange}
            />
            <br />

            <input
              className="form-control"
              type="select"
              name="test"
              value={artSeleccionado && artSeleccionado.test}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button type="button" class="btn btn-outline-success" onClick={()=>editar()}>Actualizar</button>
          <button type="button" class="btn btn-outline-danger" onClick={()=>setModalEditar(false)}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
        ¿Seguro que deseas eliminar el concursante? {artSeleccionado && artSeleccionado.name}
        </ModalBody>
        <ModalFooter>
          <button type="button" class="btn btn-outline-secondary" onClick={()=>eliminar()}>
            Aceptar
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

        <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Ingresar nuevo concursante</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Id del concursante</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length-1].id+1}
            />
            <br />
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={artSeleccionado ? artSeleccionado.name: ''}
              onChange={handleChange}
            />
            <br />
            <label>Nacionalidad</label>
            <input
              className="form-control"
              type="text"
              name="nacionalidad "
              value={artSeleccionado ? artSeleccionado.nacio: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button type="button" class="btn btn-outline-primary" onClick={()=>insertar()}>Insertar</button>
          <button type="button" class="btn btn-outline-danger" onClick={()=>setModalInsertar(false)}>Cancelar</button>
        </ModalFooter>
      </Modal>
    </div>
    
  );
  
}

