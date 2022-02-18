// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AllProductsView from './AllProductsView';
import SingleProductView from './SingleProductView';
import '../App.css';

// import GuestCart from './GuestCart';
import Header from './Header';
import Main from './Main';
import Basket from './Basket';

import Register from './register';


function App() {
  // const [guestCart, setGuestCart] = useState([]);
  // const [totalItemNumber, setTotalItemNumber] = useState(0);
  // const [user,setUser]= useState(null)
  const [cartItems, setCartItems] = useState([])
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
    setCartItems(JSON.parse(localStorage.cartItems))
    console.log(JSON.parse(localStorage.getItem("cartItems")))
  }, []);


  useEffect(()=>{
    const _cartItems = JSON.stringify(cartItems)
    localStorage.setItem("cartItems", _cartItems);
  },[cartItems]
  )
  const onAdd = (product) => {


    // if(user){

    
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  // }
  };

  // select product that needs to be removed
  // in the cartItems search for a product with the product.id  
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    // i need to remove this product
    if (exist.qty === 1) {
      // if product does not exist cartItems then return
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const [products, setProducts] = useState([]);

  


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a className="App-link" href="http://localhost:3000/" rel="noopener noreferrer">
            this.Group Records
          </a>
          <Header></Header>
        </div>
        <div>
          <Register />
          {/* <Link to Sign Up />
          <Link to Login />
          <Link to Cart /> */}
        </div>
      </header>

      <div>
        <div>
          
          <h2> Genre Links</h2>
          {/* <Link to Genre />
          <Link to Genre />
          <Link to Genre /> */}
        </div>
        <div>
          
          <Switch>
            <Route exact path="/">
              <AllProductsView products={products} />
            </Route>
            <Route path="/:id">
              <SingleProductView onAdd={onAdd} products={products} />
            </Route>
          </Switch>
          

        {/* <Main onAdd={onAdd} products={products}></Main> */}
        <Basket 
          onAdd={onAdd} 
          onRemove={onRemove} 
          cartItems={cartItems}>

        </Basket>




          
        </div>
      </div>
    </div>
  );
}

export default App;