import React from 'react';
import movies from '../../../core/Data/Movies';
import ProductCard from './ProductCard';
import '../Styles/ProductList.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ProductList() {
  return (
    <div expand="lg" className="home">
      {/* Filter */}
      <Form className="d-flex" id="search"  expand="lg">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 w-50 p-2 "
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      {/* Movies List */}
      <div className="product-list">
        {
          movies.map(movie => (
            <ProductCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>

  );
}

export default ProductList;
