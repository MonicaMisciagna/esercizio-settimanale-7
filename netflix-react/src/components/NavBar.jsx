import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSearch, FaBell, FaUser } from "react-icons/fa";


const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#">
        <img
          src= "./netflix_logo.png"
          width="100"
          height="55"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-auto">
          <Nav.Link href="#" className="font-weight-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="font-weight-bold">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#" className="font-weight-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#" className="font-weight-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#" className="font-weight-bold">
            My List
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        <div className=' d-flex justify-content-end'> 
        <Nav.Link><FaSearch  className='m-2'/></Nav.Link>
    
       <Nav.Link ><div  className='m-2' id="kids">KIDS</div></Nav.Link>
  
        <Nav.Link><FaBell className='m-2' /></Nav.Link>
     
        <Nav.Link> <FaUser className='m-2'/></Nav.Link>
       
        </div>  
      
    </Navbar>
  );
};

export default NavBar;
