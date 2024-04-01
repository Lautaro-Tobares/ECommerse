import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';


export const Item = ({product}) => {

    return(
        <Card className='d-flex'>
        <Card.Img variant="top" src={product.pictureUrl} />
        <Card.Body className="d-flex flex-column justify-content-end">
          <Card.Title className='text-center'>{product.title}</Card.Title>
          <Card.Text className='mt-auto text-center'>
            {product.description}
          </Card.Text>
          <Card.Text className='mt-auto text-center'>
            {product.price}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    )
}