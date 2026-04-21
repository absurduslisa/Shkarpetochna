import React from 'react'
import {products} from '../data/products.js'
import ProductCard from './ProductCard.jsx'

const ProductList = () => {
  return (
    <section>
        <h2>Product List</h2>
        {products.map(product => (
            <ProductCard key={product.id} product={product}/>
        ))}
    </section>
  )
}

export default ProductList
