import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import { Card } from 'react-bootstrap';

import data from '../data/products.json';

console.log(data);

export const ItemDetailContainer = () => {

    const [item, setItem]= useState ([null]);

    const {id} = useParams();

    useEffect (()=>{
        const get = new Promise((resolve, reject) => {
          setTimeout(() => resolve (data), 2000)  
        });

        get.then ((data)=> {

            const filteredData = data.find((d) => d.id === Number(id) );
            setItem(filteredData);

         });
    },[id]);

    if (!item) return null;

    return (
    
    <Container className='mt-4'> 
    
    <Card className='d-flex'style={{ maxWidth: 250, maxHeight: 500 }}>
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
      
        </Card.Body>
      </Card>

    </Container>
    );
    
    
};