import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function List() {
  return (
    <Container>
        <Row>
        <Col sm={2}><h3>Menu</h3></Col>
        <Col sm={8}>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
        </Col>
      </Row>
    </Container>
  )
}

export default List