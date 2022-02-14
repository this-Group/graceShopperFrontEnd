import React from 'react';

const ProductCard = (props) => {
    const { product } = props;
    console.log("this is the product from ProductCard props", product)

    const singleProductViewUrl = `http://localhost:3000/` + `${product.id}`

    return (
        <div className="product-card" key={product.id}
            onClick={(event) => {
                event.preventDefault();
                console.log('div clicked : id = ', product.id);
                window.location = singleProductViewUrl;
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
                <button /*onClick={addToCart(product.id)}*/>Add to Cart</button>

            </div>
        </div>
    )
}

export default ProductCard