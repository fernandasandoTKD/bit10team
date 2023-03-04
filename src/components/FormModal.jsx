import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";



export const FormModal = () => {
     // UseState del modal
 const [show, setShow] = useState(false);

const handleShow = () => setShow(true);
const handleClose = () => setShow(false);

  return (
    <div>
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Ingresa todos los datos</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Ingresa Nombre del Concurso"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Duracion"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Link de acceso"
            autoFocus
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        cerrar
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Guardar
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
  )
}
