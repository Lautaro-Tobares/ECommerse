import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';

import data from '../data/products.json';

console.log(data);

export const ItemListContainer = (props) => {

    const [Items, setItems]= useState ([]);

    useEffect (()=>{
        const get = new Promise((resolve, reject) => {
            resolve (data)
        });

    },[]);

    return 
    <Container className='mt-4'> 
    
    <div>{props.greetings} </div> 

    </Container>;
    
};