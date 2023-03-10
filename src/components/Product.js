import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
const Product = ({ product }) => {
  const { _id, name, rating, price, image, numReviews } = product
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant='top' className='img-fluid card_image' />
      </Link>

      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>

        <Card.Text as='h3'>${price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
