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
import { findRenderedComponentWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';
// import Basket from './Basket';


function App() {
  // const [guestCart, setGuestCart] = useState([]);
  // const [totalItemNumber, setTotalItemNumber] = useState(0);
  // const [user,setUser]= useState(null)
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProductUnits, setUserProductUnits] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    console.log(user);
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


  //   const loginUser = async (username, password) => {
  //     try {
  //         const response = await fetch('http:localhost:4000/api/login', {
  //             method: "POST",
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({

  //                 username: username,
  //                 password: password

  //             })
  //         })
  //         console.log("this is the response from loginuser", response)
  //         if (response) {
  //             const { data: { token } } = await response.json();
  //             localStorage.setItem("token", token)
  //             setIsLoggedIn(true)
  //             setUser(/* data returned from login with userI and orderId*/)

  //         }
  //     } catch (error) {
  //         console.error(error);
  //     }
  // }

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
        setIsLoggedIn(true)
        setUser(user);

      }
    } catch (error) {
      console.error(error);
    }
  }

  // const createUser = async (username, password) => {
  //   console.log('This is the createUser func');

  //   console.log("new username and password", username, password)

  //   const response = await fetch('http://localhost:4000/api/users/signup', {

  //       method: "POST",
  //       headers: {
  //           'Content-Type' : 'application/json',
  //       },

  //       body: JSON.stringify({
  //           username: username,
  //           password: password
  //       }),
  //       mode: "cors",
  //   });
  //   console.log("this is the response", response)
  //   return response;
  // }

  const createUser = async (username, password) => {
    console.log('This is the createUser func');

    console.log("new username and password", username, password)

    const response = await fetch('http://localhost:4000/api/users/signup', {


      //     const response = await fetch('https:localhost:4000/api/signup', {

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
      const{user,token} = await response.json();
      console.log("this is the user info from createUser", user)
      localStorage.setItem("token", token)
      setIsLoggedIn(true);
      setUser(user);

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

      const response = await fetch(`http://localhost:4000/api/myorders/${user.user.userID}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors"
      })
      console.log("fetchUserProductUnits response" , response)
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
    // fetchUserProductUnits(user.user.userID)

    // setCartItems(JSON.parse(localStorage.cartItems))
    // console.log(JSON.parse(localStorage.getItem("cartItems")))
  }, []);



  async function sendCart() {

  }

  useEffect(() => { }

    //   useEffect(() => {
    //     const _cartItems = JSON.stringify(cartItems)
    //     localStorage.setItem("cartItems", _cartItems);
    //   }, [cartItems]
  )

  const onAdd = async(product) => {

   let res = await fetch("http://localhost:4000/api/productunits/",{
      method:"POST",
      body:{

        orderId:user.userId,
        productId:product.id,
        price:product.price,
      }
    })
    console.log(res);

    console.log("This is the produnt info in onAdd func", product)
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

  const logoutUser = () => {
    // event.preventDefault();
    console.log(user);
    localStorage.clear();
    setUser(null);
    setIsLoggedIn(false);
    
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
            <Link to="/users/logout" onClick={() => logoutUser()}>Logout</Link>
                  

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
              <Register createUser={createUser} user={user} setUser={setUser} />
            </Route>
            <Route exact path="/users/login">
              <Login loginUser={loginUser} isLoggedIn={isLoggedIn} user={user} setUser={setUser} />
            </Route>
            <Route exact path="/orders/cart">
              <Cart fetchUserProductUnits={fetchUserProductUnits} user={user} userProductUnits={userProductUnits} />
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