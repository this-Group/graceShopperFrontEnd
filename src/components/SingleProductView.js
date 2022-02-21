import React from 'react';
import { useParams } from 'react-router-dom';
import Basket from  './Basket'

function SingleProductView(props) {
 
  const { products, onAdd, onRemove, cartItems } = props;

  const { id } = useParams();
  console.log('This is id from useParams', id);

  let singleProduct = products.find(product => {
    return product.id === parseInt(id)
  });
  console.log('This is the singleProduct for', id, singleProduct)

  return (
    <div className="product-card">
      <div>
      <img className="album-cover" src={
        singleProduct && singleProduct.picture ?
          singleProduct.picture : ''
      } alt={
        singleProduct && singleProduct.title ?
          singleProduct.title : ''
      }></img>

      <p>Price: {
        singleProduct && singleProduct.price ?
          singleProduct.price : ''
      }
      </p>
      </div>
      <div>
      <p>Title: {
        singleProduct && singleProduct.title ?
          singleProduct.title : ''
      }
      </p>

      <p>Artist: {
        singleProduct && singleProduct.artist ?
          singleProduct.artist : ''
      }
      </p>

      <p>Genre: {
        singleProduct && singleProduct.genre ?
          singleProduct.genre : ''
      }
      </p>

      <button onClick={(event) => {onAdd(singleProduct);event.preventDefault()}}>Add To Cart</button>

      </div>

      

      <div>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
      </div>

    </div>
  )

}

export default SingleProductView;