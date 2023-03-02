import React, {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export const Home = () => {
    const [contests, setContests] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        getContests()
    }, [])
    
    useEffect(() => {
        if (contests) {
            getData()
        }
    }, [contests])

    const getContests = async () => {
    try {
        const res = await fetch('https://kontests.net/api/v1/all')
        setContests(await res.json())
    } catch (error) {
console.log('Upss.. hay un error')
    }
}
//componente interno o se puede crear en un componente aparte
const getData = () => {
    const array = contests.slice(0, 6).map((contest, index) => 
    <Card key={index}  style={{ width: '18rem' }}>
    <Card.Title className='h2'>{contest.name}</Card.Title>
    <ListGroup className="list-group-flush">
    <ListGroup.Item><li className='h6'>Link de de accseso</li><Card.Link href="#">{contest.url}</Card.Link></ListGroup.Item>
    <ListGroup.Item><li className='h6'>Fecha de inicio:</li>{contest.start_time}</ListGroup.Item>
    <ListGroup.Item><li className='h6'>Fecha fin del curso</li>{contest.end_time}</ListGroup.Item>
    </ListGroup>
    <Button className='m-2' variant="primary">editar</Button>
    <Button className='m-2' variant="primary">eliminar</Button>
    
    </Card>
        
    
    
    
    )
    setData(array)
}
  return (
    <section>

        <h2 className='text-center py-4'>Pon a prueba tus conocimientos y participa en los mejores concusos y hackathones de programacion...</h2>
        <div className="d-flex">
        {data}
        </div>
            
   

    </section>
  )
}
