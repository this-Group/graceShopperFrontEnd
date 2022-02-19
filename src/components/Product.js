import React from 'react'

export default function Product(props) {
  const { product, onAdd } = props;

    return (
    <div>
      <img className="small" src={product.picture} alt={product.title}></img>
      <h3>{product.artist}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  )
}

