// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AllProductsView from './AllProductsView';
import SingleProductView from './SingleProductView';
import Register from './Register';
import Login from './Login'
import Basket from './Basket';
import '../App.css';

// import GuestCart from './GuestCart';
import Header from './Header';
import Main from './Main';
// import Basket from './Basket';




function App() {
  // const [guestCart, setGuestCart] = useState([]);
  // const [totalItemNumber, setTotalItemNumber] = useState(0);
  // const [user,setUser]= useState(null)
  const [cartItems, setCartItems] = useState([])
  const [user , setUser]= useState(null);


  useEffect(()=>{
    console.log(user);
  },[user])
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
    // setCartItems(JSON.parse(localStorage.cartItems))
    // console.log(JSON.parse(localStorage.getItem("cartItems")))
  }, []);


  async function sendCart(){

  }

  useEffect(()=>{}
 
  )
  const onAdd = (product) => {


    // if(user){


    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {


      //post request
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      //post request
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
      <div>
        <header className="App-header">
          <div>
            <a className="App-link" href="http://localhost:3000/" rel="noopener noreferrer">
              this.Group Records
            </a>

            {/* <img className="album-cover" src="this.group_records@300x.png" alt="this.Group Records"></img> */}
          </div>
          <div className="header-right">
            <Link to="/users/signup">Sign Up</Link>
            <br></br>
            <Link to="/users/login">Login</Link>

            {/* <Header></Header> */}
          </div>
        </header>
      </div>


      <div className="main">
        <div className="side-bar">
          <Link className="side-bar-content" to="/">All Records</Link>
          <br></br>
          <Link className="side-bar-content" to="/orders/cart">Cart</Link>
        </div>



        <div>
          <Switch>

            <Route exact path="/">
              <AllProductsView products={products} />
            </Route>
            <Route exact path="/:id">
              <SingleProductView onAdd={onAdd} products={products} />
            </Route>
            <Route exact path="/users/signup">
              <Register user={user} setUser = {setUser}/>
            </Route>
            <Route exact path="/users/login">
              <Login user={user} setUser={setUser}/>
            </Route>
            <Route exact path="/orders/cart">
              <Basket
                onAdd={onAdd}
                onRemove={onRemove}
                cartItems={cartItems}>
              </Basket>
            </Route>
          </Switch>


          {/* <Main onAdd={onAdd} products={products}></Main> */}
          {/* <Basket
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}>
          </Basket> */}

        </div>
      </div>

    </div>

  );
}

export default App;