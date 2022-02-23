import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Checkout from './Checkout'


function Cart(props) {
    const { userProductUnits, fetchUserProductUnits, user, deleteProductUnits, checkout } = props
    // fetchUserProductUnits(userId)
    console.log("this is the userProduct", userProductUnits)

    const userId = localStorage.getItem("userId")
    console.log("userIdfrom local storage", userId)

    console.log("this is the user from props in Cart", user)

    // const { userId } = useParams();
    // console.log('This is userId from useParams', userId);

    // useEffect(() => {
    //     fetchUserProductUnits(user.userID)

    //     // setCartItems(JSON.parse(localStorage.cartItems))
    //     // console.log(JSON.parse(localStorage.getItem("cartItems")))
    //   }, []);

    useEffect(() => {
        fetchUserProductUnits(userId)


      }, []);

    return (
        <div>
            <h1>Cart</h1>
            {/* If there are no userProductUnits return no albums in cart */}
            {
                userProductUnits && userProductUnits.length && userProductUnits.map((productUnit) => {

                    return (
                        <div key={productUnit.id}>
                            <div>
                                <img className="album-cover" src={productUnit.picture} alt={productUnit.title}></img>
                                <br></br>


                            </div>
                            <div>
                                <p>Title: {productUnit.title}</p>
                                <p>Price: {productUnit.price}</p>

                            </div>
                            <button onClick={(event) => {deleteProductUnits(productUnit.id);event.preventDefault()}}>Remove from cart</button>

                        </div>
                        

                    )

                })
            }
            <br></br>
            <Checkout checkout={checkout}/>

        </div>
    )
}

export default Cart;