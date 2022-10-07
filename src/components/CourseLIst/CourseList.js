import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const CourseList = (props) => {
    const {name,img,instructor,enrolled,price,category}=props.element;
    
    return (

        <div>
             <Row xs={1} md={2} lg={3} className="g-4 m-2">
        <Col>
          <Card  style={{ width: 'auto'}} >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Category: {category}</p>
          <p>Instructor: {instructor}</p>
          <p><small>Enrolled: {enrolled}</small></p>
          <h4>Price: ${price}</h4>
        </Card.Text>
        <Button onClick={()=>props.addClick(props.element)} variant="primary">Enroll Now</Button>
      </Card.Body>
    </Card>
        </Col>
    </Row>     
       </div>


    );
};

export default CourseList;