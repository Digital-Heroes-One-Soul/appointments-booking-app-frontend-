import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { deleteEmporiums } from '../../store/emporiumsSlice';


export default function CardEmporiums({data, dispatch}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={data.name}>
      
      <Card.Img variant="top" src={data.image} />

      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
         {data.description} 
        </Card.Text>
      </Card.Body>
      </Link>
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item><Button>Call</Button></ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      <Card.Body className="d-flex justify-content-between">
        <Button variant='danger' onClick={()=>dispatch(deleteEmporiums(data.id))}>Delete</Button>
        <Button variant='secondary'>Update</Button>
      </Card.Body>
    </Card>
  )
}
