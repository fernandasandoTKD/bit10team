import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';



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
    const array = contests.map((contest, index) => 
        <tr key={index}>
        <td>{contest.name}</td>
        <td>{contest.url}</td>
        <td>{contest.start_time}</td>
        <td>{contest.end_time}</td>
      </tr>
    )
    setData(array)
}
  return (
    <section>
        <h2 className='text-center py-4'>Pon a prueba tus conocimientos y participa en los mejores concusos y hackathones de programacion...</h2>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre del concurso</th>
          <th>LINK de accseso</th>
          <th>Fecha de inicio</th>
          <th>Fecha de finalizacion</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </Table>

    </section>
  )
}
