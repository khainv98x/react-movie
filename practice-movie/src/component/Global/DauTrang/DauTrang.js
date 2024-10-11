import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hinh from "../../../assets/logo.svg";
import "./DauTrang.css"
const DauTrang = () => {
    return (
        <Navbar expand="lg" className="dautrang">
          <Container>
            <Navbar.Brand href="#">
              <img src={hinh} alt="" />
            </Navbar.Brand>
            <div className='menu d-flex text-white'>
              <Nav.Link href="/" className=' me-5'>Home</Nav.Link>
              <Nav.Link href="/movie">Movie</Nav.Link>
            </div>
            
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            
          </Container>
        </Navbar>
      );
};

export default DauTrang;