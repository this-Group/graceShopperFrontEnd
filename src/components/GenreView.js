import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';


function GenreView(props) {
    console.log('AllRecordView props', props);


    const { genreProducts, onAdd, fetchGenreProducts } = props;

    console.log('These are the passed down genre products', genreProducts)

    const { genre } = useParams();
  console.log('This is grenre from useParams', genre);

  useEffect(() => {
    fetchGenreProducts(genre)
  }, []);


    return (
        <div className="albums-collection">
            {
                genreProducts && genreProducts.length && genreProducts.map((genreProduct) =>{

                    return <ProductCard key={genreProduct.id} genreProduct={genreProduct} onAdd={onAdd} />

                })
            }
        </div>
    );

};

export default GenreView;