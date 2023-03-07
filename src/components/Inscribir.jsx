import React, { useState } from "react";
import "./css/inscribir.css";

export default function Inscribir() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  return (
    <>
      <h2>Inscribir</h2>
      <h2>Inscribir</h2>
      <h2>Inscribir</h2>
      <h2 className="text-center text-black">Parcipantes registrados para proximo Hackathon!</h2>
      <h6 className="text-center text-black fst-italic">(No pierdas esta oportunidad e inscribete al proximo evento!)</h6> <br />
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre y apellido"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input className="ms-1"
            type="text"
            placeholder="Nacionalidad"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <input className="ms-1"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}/>
          <button className="ms-4 btn btn-outline-success" type="submit">{editIndex !== null ? "Edit" : "Añadir"}</button>
        </form>
        <br />
        <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="fs-4">ID</th>
              <th className="fs-4">Nombre y Apellido</th>
              <th className="fs-4">Nacionalidad</th>
              <th className="fs-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                  <button className="ms-4 btn btn-outline-secondary" onClick={() => handleDelete(index)}>Borrar</button>
                  <button className="ms-4 btn btn-outline-secondary" onClick={() => handleEdit(index)}>Corregir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}
