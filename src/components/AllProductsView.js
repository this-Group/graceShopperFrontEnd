import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ProductCard from './ProductCard';
// import SingleProductView from './SingleProductView';


function AllProductView(props) {
    console.log('AllRecordView props', props);


    const { products, onAdd } = props;

    console.log('These are the passed down products', products)
    
 
    // const fetchProducts = async () => {
    //     try {

    //         const response = await fetch('http://localhost:4000/api/products', {
    //             mode: "cors"
    //         })
    //         const data = await response.json();
    //         console.log('I am the data', data)
    //         setProducts(data);


    //         return data
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

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


    // const [products, setProducts] = useState([]);


    // useEffect(() => {
    //     fetchProducts()
    // }, []);


    return (
        <div className="albums-collection">
            {
                products && products.length && products.map((product) =>{

                    return <ProductCard key={product.id} product={product} onAdd={onAdd} />

                })
            }

            {/* <div>
                {products.map((product) => {

                    return <div className="product-card" key={product.id}
                        onClick={(event) => {
                            event.preventDefault();
                            console.log('div clicked : id = ', product.id)

                        }}>
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
                             <Link to={`/AllProductsView/${product.id }`} >
                                <button>View Record</button>
                            </Link>
                            <button onClick={addToCart(product.id)}>Add to Cart</button>

                        </div>
                    

                })}
            </div> */}
        </div>
    );

};

export default AllProductView;