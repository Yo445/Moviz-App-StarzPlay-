import React from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/ProductInfo.css'
import Card from 'react-bootstrap/Card';
import ProductReview from './ProductReview';

export default function ProductInfo() {
    let {id} =useParams();
    console.log(id)
  return (
    // Movie Details
    <div className='movies-details-container p-5'>
      <div className='row'>
      <div className='col-3'>
      <img className='movie-img' variant="top"  src="http://picsum.photos/200" />
      </div>
      <div className='col-9'>
        <h1>movie title</h1>
        <p>
            dasdmfnfgmdfngdfgndlgkv.vdflfgkjfdnbdmgdmvf
            fdfjvbndkfjgbdnkfmbvndkltjgnclkvbndrlfka;dowefjpegd
        </p>
      </div>
      </div>
      <hr />
      {/* Movies Reviews */}
      <h5 className='text-center bg-dark text-white p-2'>Movies Reviews</h5>
      <ProductReview />
      <ProductReview />
      <ProductReview />
    </div>
  )
}
