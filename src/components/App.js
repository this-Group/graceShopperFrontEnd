// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AllProductsView from './AllProductsView';
import SingleProductView from './SingleProductView';
import Register from './register';
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

  
  useEffect(() => {
    fetchProducts()
  }, []);

  const [products, setProducts] = useState([]);
  


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a className="App-link" href="http://localhost:3000/" rel="noopener noreferrer">
            this.Group Records
          </a>
          {/* <img className="album-cover" src="this.group_records@300x.png" alt="this.Group Records"></img> */}
        </div>
        <div className="header-right">
        <Link to="/signup">Sign Up</Link>
        <br></br>
        <Link to="/login">Login</Link>
        </div>
      </header>

      <div className="main">
        <div className="side-bar"> 
          <Link className="side-bar-content" to="/">All Records</Link>
          <br></br>
          <Link className="side-bar-content">Cart</Link>
        </div>
        <div>
          {/* <h2> Genre Links</h2> */}
          {/* <Link to Genre />
          <Link to Genre />
          <Link to Genre /> */}
        </div>
        <div >
          {/* <h1>Welcome Listener</h1> */}
          <Switch >
            <Route exact path="/">
              <AllProductsView products={products} />
            </Route>
            <Route path="/:id">
              <SingleProductView products={products} />
            </Route>
            <Route path="/signup">
            <Register />
            </Route>
            {/* <Route path="/login">
              <Login  />
            </Route> */}
          </Switch>
        </div>
      </div>
      
    </div>
  );
}

export default App;
