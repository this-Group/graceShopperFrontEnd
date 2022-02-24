import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ProductCard from './ProductCard';
// import SingleProductView from './SingleProductView';


function AllProductView(props) {
    console.log('AllRecordView props', props);


    const { products, onAdd } = props;

    console.log('These are the passed down products', products)


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