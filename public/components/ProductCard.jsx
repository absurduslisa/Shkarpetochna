import React from 'react'
import Button from './Button'

const ProductCard = ({product}) => {
  return (
    <article key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <div>
            <Button children='Add me'/>
        </div>
    </article>
    )
}

export default ProductCard