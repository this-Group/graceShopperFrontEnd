import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


function AllProductView(props) {
    console.log('AllRecordView props', props);


    const { products, onAdd, fetchProducts } = props;

    console.log('These are the passed down products', products)

    useEffect(() => {
        fetchProducts()
      }, []);


    return (
        <div className="albums-collection">
            {
                products && products.length && products.map((product) =>{

                    return <ProductCard key={product.id} product={product} onAdd={onAdd} />

                })
            }
        </div>
    );

};

export default AllProductView;