// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
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
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProductUnits, setUserProductUnits] = useState([])
  const [user, setUser] = useState({})
  console.log("user state", user)

  const userId = localStorage.getItem("userId")
  console.log("userIdfrom local storage", userId)
  const orderId = localStorage.getItem("orderId")
  console.log("userIdfrom local storage", orderId)

  useEffect(() => {
    console.log("this is the user state at top of App", user);
  }, [user])

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
      const response = await fetch('http://localhost:4000/api/users/login', {
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
        const user = await response.json();
        console.log("this is the user info from login", user)
        localStorage.setItem("token", user.token)
        localStorage.setItem("userId", user.user.userId)
        localStorage.setItem("orderId", user.user.orderId)

        setIsLoggedIn(true)
        setUser(user);


      }
    } catch (error) {
      console.error(error);
    }

  }

  const createUser = async (username, password) => {
    console.log('This is the createUser func');

    console.log("new username and password", username, password)

    const response = await fetch('http://localhost:4000/api/users/signup', {

      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        username: username,
        password: password
      }),
      mode: "cors",
    })/*.then (res => res.json()).then( data => {localStorage.setItem('token', data.token);
            console.log(data)
        setUser(data.user);
        
    })*/
    console.log("this is the response from createUser func", response)
    if (response) {
      const user = await response.json();
      console.log("this is the user info from createUser", user)
      localStorage.setItem("token", user.token)
      localStorage.setItem("userId", user.user.userId)
      localStorage.setItem("orderId", user.user.orderId)
      setIsLoggedIn(true);
      setUser(user.user);

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
          productId: productId,
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

  const deleteProductUnits = async (id) => {
    try {
      const response = await fetch('http://localhost:4000/api/productUnits/', {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          id: id

        })
      })
      console.log("this is the response deleteProductUnits from ", response)
      if (response) {
        const deletedProduct = await response.json();
        console.log("this is the user info from deleteProductUnits", deletedProduct)


      }
    } catch (error) {
      console.error(error);
    }

  }

  const fetchUserProductUnits = async (userId) => {
    try {

      const response = await fetch(`http://localhost:4000/api/myorders/${userId}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors"
      });
      console.log("fetchUserProductUnits response", response)
      const userProductUnits = await response.json();
      console.log('I am the userProductUnits', userProductUnits)
      setUserProductUnits(userProductUnits);

      return userProductUnits
    } catch (error) {
      console.error(error)
    }
  }

const checkout = async () =>{
  try {
    //if card info is valid
      //update current order
      //create new order
      //return order processing 

    const response = await fetch(`http://localhost:4000/api/myorders`, {
      method: "PATCH",
      body: {
        orderId : orderId,
        status: "PROCESSING"

      },
      headers: {
        'Content-Type': 'application/json'
      },
      mode: "cors"
    });
    console.log("checkout func response", response)
    const checkedOutOrder = await response.json();
    console.log("I am the checkedOutOrder", checkedOutOrder)
  } catch (error) {
    console.error(error)
  }  

}

  useEffect(() => {
    fetchProducts()
    // fetchUserProductUnits(user.user.userID)

    // setCartItems(JSON.parse(localStorage.cartItems))
    // console.log(JSON.parse(localStorage.getItem("cartItems")))
  }, []);






  const onAdd = (product) => {

    console.log("This is the product info in onAdd func", product)
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

    //fetch method to add to productUnits table, adding orderId, productId, and price
    
    addProductToProductUnits( orderId, product.id, product.price)



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


  return (


    <div className="App">
      <div>
        <header className="App-header">
          <div>
            <a className="App-link" href="http://localhost:3000/" rel="noopener noreferrer">
              <img className="logo" src="https://i.imgur.com/5YzkXBU.png" alt="this.Group Records"></img>
            </a>




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
          {/* <Login loginUser={loginUser} isLoggedIn={isLoggedIn} user={user} setUser={setUser} /> */}
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
              <Register createUser={createUser} user={user} setUser={setUser} />
            </Route>
            <Route exact path="/users/login">
              <Login loginUser={loginUser} isLoggedIn={isLoggedIn} user={user} setUser={setUser} />
            </Route>
            <Route path="/orders/cart">
              <Cart fetchUserProductUnits={fetchUserProductUnits} deleteProductUnits={deleteProductUnits} user={user} userProductUnits={userProductUnits} checkout={checkout} />
            </Route>
            <Route  >
            </Route>

          </Switch>

        </div>

      </div>
    </div>


  );
}

export default App;