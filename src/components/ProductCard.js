import React from 'react';

const ProductCard = (props) => {

    const { product, onAdd } = props;

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
                <img className="album-cover" src={product.picture} alt={product.title}></img>
                <br></br>
                
                
            </div>
            <div>
                <p>Title: {product.title}</p>
                <p>Artist: {product.artist}</p>
                <p>Genre: {product.genre}</p>
                <p>Price: {product.price}</p>
                <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
            
        </div>
        
    )
}

export default ProductCard;