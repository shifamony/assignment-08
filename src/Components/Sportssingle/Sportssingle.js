import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import './Sportssingle.css'
const Sportssingle = (props) => {
  const {handleAddToList,sport} = props;
  //console.log(props)
    const { img,name,description,time} = sport;

    return (
        <div className='single-card'>
            <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description.slice(0,60) + " ..."}
              </Card.Text>
              <Card.Text>
                Time required: {time + "s"}
              </Card.Text>
              <Button variant="primary" className='w-100'  size="lg" onClick={() => handleAddToList(sport)}>Add to list</Button>
            </Card.Body>
          </Card>
        </Col>
        
        </div>
    );
};

export default Sportssingle;