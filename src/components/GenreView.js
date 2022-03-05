import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';


function GenreView(props) {
    const { onAdd, fetchGenreProducts, genreProducts } = props;
    // const [genreProducts, setGenreProducts] = useState([]);

    console.log('These are the passed down genre products', genreProducts)

    const { genre } = useParams();
  console.log('This is grenre from useParams', genre);

//   const fetchGenreProducts = async (genre) => {
//     try {

//       const response = await fetch(`http://localhost:4000/api/products/genre/${genre}`, {
//         mode: "cors"
//       })
//       const data = await response.json();
//       console.log('I am the data from genre fetch', data)
//       setGenreProducts(data);

//       return data
//     } catch (error) {
//       console.error(error)
//     }
//   }


useEffect(() => {
    fetchGenreProducts(genre)
  }, []);


  console.log("These are the genreProducts", genreProducts);
    return (
        <div className="albums-collection">
            
            {
                
                genreProducts && genreProducts.length && genreProducts.map((genreProduct) =>{
                    

                    return <ProductCard key={genreProduct.id} product={genreProduct} onAdd={onAdd} />

                })
            }
        </div>
    );

};

export default GenreView;