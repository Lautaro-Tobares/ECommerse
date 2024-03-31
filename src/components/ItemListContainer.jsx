import Container from 'react-bootstrap/Container';

import data from '../data/products.json';

console.log(data);

export const ItemListContainer = (props) => {

    return <Container className='mt-4'> <div>{props.greetings} </div> </Container>;
};