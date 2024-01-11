import React, { Component } from 'react';
import { Container, Row, Col, Carousel, Spinner } from 'react-bootstrap';

class Trending extends Component {
  state = {
    movies: [],
    isLoading: true, 
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=90110d0c&s=harry%20potter')
      .then(response => response.json())
      .then(json => this.setState({ movies: json.Search, isLoading: false }))
      .catch(err => {
        console.error(err);
        this.setState({ isLoading: false }); 
      });
  }

  render() {
    const { movies, isLoading } = this.state;

    if (isLoading) {
      return (
        <Container fluid className="text-center mt-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      );
    }

    return (
      <Container fluid>
        <h4 className='m-3'>Trending now</h4>
        <Carousel interval={null} controls={movies.length > 4}>
          <Carousel.Item>
            <Row className="justify-content-center">
              {movies.slice(0, 4).map((movie, index) => (
                <Col key={index} className="mb-2 px-1">
                  <img className="img-fluid" src={movie.Poster} alt='movie' />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center">
              {movies.slice(4, 8).map((movie, index) => (
                <Col key={index} className="mb-2 px-1">
                  <img className="img-fluid" src={movie.Poster} alt='movie' />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default Trending;