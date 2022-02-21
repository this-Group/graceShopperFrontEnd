// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AllProductsView from './AllProductsView';
import SingleProductView from './SingleProductView';
import Register from './Register';
import Login from './Login'
import Cart from './Cart'
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
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProductUnits, setUserProductUnits] = useState([])

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

  const loginUser = async (username, password) => {
    try {
        const response = await fetch('http:localhost:4000/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                username: username,
                password: password

            })
        })
        console.log("this is the response from loginuser", response)
        if (response) {
            const { data: { token } } = await response.json();
            localStorage.setItem("token", token)
            setIsLoggedIn(true)

        }
    } catch (error) {
        console.error(error);
    }
}

  const addProductToProductUnits = async (orderId, productId, price) => {
    try {

      const response = await fetch('http://localhost:4000/api/productUnits', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          orderId: orderId,
          password: productId,
          price: price

        })
      })
      const data = await response.json();
      console.log('I am the data from addProductToProductUnits func', data)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const fetchUserProductUnits = async (userId) => {
    try {

      const response = await fetch('http://localhost:4000/api/products', {
        mode: "cors"
      })
      const userProductUnits = await response.json();
      console.log('I am the userProductUnits', userProductUnits)
      setUserProductUnits(userProductUnits);

      return userProductUnits
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    fetchProducts()
    // setCartItems(JSON.parse(localStorage.cartItems))
    // console.log(JSON.parse(localStorage.getItem("cartItems")))
  }, []);


  // useEffect(()=>{
  //   const _cartItems = JSON.stringify(cartItems)
  //   localStorage.setItem("cartItems", _cartItems);
  // },[cartItems]
  // )
  const onAdd = (product) => {

    console.log("This is the produnt info in onAdd func", product)
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
    //fetch method to add to productUnits table, adding orderId, productId, and price
    addProductToProductUnits(/*user's state.orderId,*/ product.id, product.price)

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
    ////fetch method to remove to productUnits table, adding orderId, productId, and price
        //or have user remove from the cart view
  };

  




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
              <SingleProductView onAdd={onAdd} products={products} onRemove={onRemove} cartItems={cartItems} />
            </Route>
            <Route exact path="/users/signup">
              <Register />
            </Route>
            <Route exact path="/users/login">
              <Login loginUser={loginUser} isLoggedIn={isLoggedIn}/>
            </Route>
            <Route exact path="/orders/cart">
              <Cart userProductUnits={userProductUnits} />
            </Route>
            <Route  >
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