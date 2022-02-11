import { useEffect, useState } from 'react';

function SingleProductView(props) {
  console.log('These are the single product props', props)
  const fetchSingleProduct = async () => {

    const { product } = props
    try {

      const response = await fetch(`http://localhost:4000/api/products/${product.id}`, {
        mode: "cors"
      })
      const data = await response.json();
      console.log('I am the single product data', data)
      setSingleProduct(data);

      return data
    } catch (error) {
      console.error(error)
    }
  };

  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    fetchSingleProduct()
  }, []);

  return (


    <div className="product-card" key={singleProduct.id}>
      <div>
        <img src={singleProduct.picture} alt={singleProduct.title}></img>
        <p>Price: {singleProduct.price}</p>
      </div>
      <div>
        <p>Title: {singleProduct.title}</p>
        <p>Artist: {singleProduct.artist}</p>
        <p>Genre: {singleProduct.genre}</p>
      </div>
      <div>
        <button /*onClick={addToCart(singleProduct.id)}*/>Add to Cart</button>
      </div>

    </div>



  )

}

export default SingleProductView