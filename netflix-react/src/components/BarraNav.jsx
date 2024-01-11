import React from 'react';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { CiTextAlignLeft } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
const TVShows = () => {
  return (
    <Container fluid className="px-4" >
      <Row  className="d-flex justify-content-between">
        <Col className="d-flex">
          <h2 className="mb-4 mr-2">TV Shows</h2>
          <Dropdown className="ms-4 mt-1">
            <Button
              variant="secondary"
              size="sm"
              className="rounded-0"
              style={{ backgroundColor: '#221f1f' }}
            >
              Genres &nbsp;
            </Button>
            <Dropdown.Toggle
              variant="secondary"
              size="sm"
              split
              id="dropdown-basic"
              style={{ backgroundColor: '#221f1f' }}
            />
            <Dropdown.Menu className="bg-dark">
              <Dropdown.Item className="text-white bg-dark" href="#">
                Comedy
              </Dropdown.Item>
              <Dropdown.Item className="text-white bg-dark" href="#">
                Drama
              </Dropdown.Item>
              <Dropdown.Item className="text-white bg-dark" href="#">
                Thriller
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="d-flex justify-content-end">
        <CiTextAlignLeft className='m-2' />
        <IoGridOutline className='m-2'/>
        </Col>
      </Row>
    </Container>
  );
};

export default TVShows;
