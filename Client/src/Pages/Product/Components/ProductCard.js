import React from 'react';
// import '../Styles/ProductCard.css'; // Import CSS file for ProductCard
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ProductCard({ movie }) {
  console.log(movie)
  const cardStyle = {
    backgroundImage: `url(${movie.poster})`, // Set background image dynamically
  };

  return (

      <Card style={{ width: '17rem', justifyContent:"center",alignItems:"center",textAlign:"center" }}>
      <Card.Img variant="top"  src="http://picsum.photos/200" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        <p>Director: {movie.director}</p>
        <p>Year: {movie.year}</p>
        </Card.Text>
        <Button style={{backgroundColor:"brown"}}> <Link className='nav-link'  to={'/product-info/${movie.id}'}> Watch Now</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
