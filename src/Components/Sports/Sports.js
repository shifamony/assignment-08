import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Asides from '../Asides/Asides';
import Accordion from 'react-bootstrap/Accordion';
import Sportssingle from '../Sportssingle/Sportssingle';

const Sports = () => {
    const [sports, setSports] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect(() => {
        fetch('sports.json')
        .then(res => res.json())
        .then(data => setSports(data))
    }, []);

    //ADD TO LIST BUTTON
    const handleAddToList = (sport) => {
        const newCart = [...cart, sport]
      setCart(newCart);
    }

    return (
        <div>
            <section className='bg-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h1 className='fw-bold my-5 text-primary'>Select today's sports</h1>
                        <Row xs={1} md={2} lg={3} className="g-4">
                        
                        {

                           sports.map(sport => <Sportssingle
                           
                            sport = {sport}
                            key = {sport.id}
                            handleAddToList = {handleAddToList}
                           ></Sportssingle>) 
                        }
      
                      </Row>
                      {/* ================== */}
                      <div className='my-5'>
                        <Accordion defaultActiveKey="0">
                         <Accordion.Item eventKey="0">
                         <Accordion.Header>How does react work? #1</Accordion.Header>
                        <Accordion.Body>
                        React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What are the differences between props and state ? #2</Accordion.Header>
                        <Accordion.Body>
                        <strong> Props:</strong> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
                        <br /><br />
                        <strong>State:</strong> State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What does useEffect do other than loading data?? #3</Accordion.Header>
                        <Accordion.Body>
                        1. Side Effect Runs After Every Render.
                        <br />
                        2. Side Effect Runs Only Once After Initial Render.
                        <br />
                        3. Side Effect Runs After State Value Changes.
                        <br />
                        4. Side Effect Runs After Props Value Change.
                        <br />
                        5. Side Effect Runs After Props and State Value Change.
                        <br />
                        6. Side EffectCleanup
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
        </div>

                      {/* =========================== */}
                        </div>
                        <div className="col-md-4 col-sm-12 border bg-white">
                           <Asides cart = {cart}></Asides>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sports;