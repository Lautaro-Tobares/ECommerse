import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Item = ({item}) => {

    return(
        <Card className='d-flex'>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body className="d-flex flex-column justify-content-end">
          <Card.Title className='text-center'>{item.title}</Card.Title>
          <Card.Text className='mt-auto text-center'>
            {item.description}
          </Card.Text>
          <Card.Text className='mt-auto text-center'>
            {item.category}
          </Card.Text>
          <Card.Text className='mt-auto text-center'>
            {item.price}
          </Card.Text>
          <Link to={`/item/${item.id}`}><Button variant="primary" className="mx-auto d-block">Comprar</Button></Link>
        </Card.Body>
      </Card>
    )
}