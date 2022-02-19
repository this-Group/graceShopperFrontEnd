import React from 'react';
import { useParams } from 'react-router-dom';

function SingleProductView(props) {
  console.log('These are the props passed to SingleProductView', props)
  const { products, onAdd } = props;

  console.log('These are the products from the SingleProductView props', products)

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

      </div>

      

      <div>
        
      <button onClick={(event) => {onAdd(singleProduct);event.preventDefault()}}>Add To Cart</button>
      </div>
    </div>
  )

}

export default SingleProductView;