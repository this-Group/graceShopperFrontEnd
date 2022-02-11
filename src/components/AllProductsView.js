import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import SingleProductView from './SingleProductView';


function AllRecordsView() {
    const fetchProducts = async () => {
        try {

            const response = await fetch('http://localhost:4000/api/products', {
                mode: "cors"
            })
            const data = await response.json();
            console.log('I am the data', data)
            setProducts(data);
            

            return data
        } catch (error) {
            console.error(error)
        }
    }

    // const fetchSingleProduct = async (id) => {
        
        
    //     try {
      
    //     const response = await fetch(`http://localhost:4000/api/products/${id}`, {
    //       mode: "cors"
    //     }) 
    //     const data = await response.json(); 
    //     console.log('I am the single product data', data)
        
    
    //     return data
    //     } catch (error) {
    //       console.error(error)
    //     }
    //   };

      
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        fetchProducts()
    }, []);

    console.log('This is the products state', products)

    return (
        <div>
        
        <div>
            {products.map((product) => {
                
                return <div className="product-card" key={product.id}>
                    <div>
                        <img src={product.picture} alt={product.title}></img>
                        <p>Price: {product.price}</p>
                    </div>
                    <div>
                        <p>Title: {product.title}</p>
                        <p>Artist: {product.artist}</p>
                        <p>Genre: {product.genre}</p>
                    </div>
                    <div>
                        <Link to="/SingleProductView">View Record</Link>
                        <button /*onClick={addToCart(product.id)}*/>Add to Cart</button>
                    </div>

                </div>

            })}
        </div>
        </div>
    );

};

export default AllRecordsView;