// import logo from './logo.svg';
import { useEffect, useState } from 'react';
// import { Route, Link, Switch } from 'react-router-dom';
// import AllProductsView from './AllProductsView';
// import SingleRecordView from './SingleRecordView';
import '../App.css';

function App() {
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
    <div className="App">
      <header className="App-header">
        <div>
          <a className="App-link" href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">
            this.Group Records
          </a>
        </div>
        <div>
          {/* <Link to Sign Up />
          <Link to Login />
          <Link to Cart /> */}
        </div>
      </header>

      <body>
        <div>
          <div className="header-links">
            {/* <Link to="/AllProductsView">All Records</Link> */}
          </div>
          <h2> Genre Links</h2>
          {/* <Link to Genre />
          <Link to Genre />
          <Link to Genre /> */}
        </div>
        <div>
          <h1>Welcome Listener</h1>
          {/* <Switch>
            <Route path="/AllProductsView" component={AllProductsView} />
            <Route path="/SingleProductView" component={SingleProductView} />
          </Switch> */}




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
      </body>
    </div>
  );
}

export default App;
