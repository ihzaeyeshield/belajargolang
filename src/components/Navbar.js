import React from 'react'
import { Nav } from 'react-bootstrap'

function Navbar() {
  return (
    <Nav defaultActiveKey="/home" as="ul" className=''>
      <Nav.Item as="li">
        <Nav.Link href="/home"><h1>WEB LIST MOVIE</h1></Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navbar