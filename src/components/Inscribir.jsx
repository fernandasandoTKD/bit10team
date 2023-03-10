import React, { useState } from "react";
import './css/table.css';
import edit from '../img/lapiz.png';
import del from '../img/delete.png';
import plus from '../img/add.png';
import up from '../img/loop.png';
import swal from "SweetAlert"

export default function Inscribir() {
  /*INICIANDO Y DECLARANDO EL USESTATE */
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  /* DECLARACION DE MANEJADORES */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  /* MANEJADOR ADD */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.age || !formData.email) {
      swal("Por favor, completa todos los campos.");
      return;
    }
    if (editIndex !== null) {
      const newData = [...data];
      newData[editIndex] = formData;
      setData(newData);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }
    setFormData({ name: "", age: "", email: "" });
  };
  /* MANEJADOR PARA BORRAR */
  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  /* MANEJADOR PARA EDITAR */
  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };
  return (
    <>
      <div className="data">
      <h2 >Inscribirse</h2>
      <h2 className="text-center">
        Parcipantes registrados para proximo Hackathon!
      </h2>
      <h6 className="text-center  fst-italic">
        (No pierdas esta oportunidad e inscribete al proximo evento!)
      </h6>{" "}
      <br />
      <div className="text-center">
        {/* INICIAMOS EL FORMULARIO DE REGISTRO*/}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre y apellido"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className="ms-1"
            type="text"
            placeholder="Nacionalidad"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <input
            className="ms-1"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <button className="ms-4 btn btn-outline-success" type="submit">
            {editIndex !== null ? <img src={up}/> : <img src={plus}/>} 
          </button>
        </form>
        <br />
        {/* MONTAMOS LA TABLA */}
        <div className="container">
          <table className="table table-striped display responsive noWrap " responsive bordered >
            <thead>
              
              <tr >
                <th className="fs-4">ID</th>
                <th className="fs-4">Nombre y Apellido</th>
                <th className="fs-4">Nacionalidad</th>
                <th className="fs-4">Email</th>
              </tr>
            </thead>
            {/* PROGRAMAMOS LA LOGICA DE LA TABLA */}
            <tbody className="bg-warning-subtle">
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className="ms-4 btn btn-outline-secondary"
                      onClick={() => handleDelete(index)}
                    >
                      <img src={del} alt="" />
                    </button>
                    <button
                      className="ms-4 btn btn-outline-secondary"
                      onClick={() => handleEdit(index)}
                    >
                     <img src={edit} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      
    </>
  );
}
