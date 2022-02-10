import { useEffect, useState } from 'react';

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

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, []);

    return (
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
                        {/* <Link to single product view /> */}
                        <button /*onClick={addToCart(product.id)}*/>Add to Cart</button>
                    </div>

                </div>

            })}
        </div>
    );

};

export default AllRecordsView;