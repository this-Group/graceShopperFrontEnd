import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Cart(props) {
    const { userProductUnits, fetchUserProductUnits, user } = props
    // fetchUserProductUnits(userId)

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
            <h1>User's Cart</h1>
            {/* If there are no userProductUnits return no albums in cart */}
            {
                userProductUnits && userProductUnits.length && userProductUnits.map((productUnit) => {

                    return (
                        <div key={productUnit.productId}>
                            <div>
                                <img className="album-cover" src={productUnit.picture} alt={productUnit.title}></img>
                                <br></br>


                            </div>
                            <div>
                                <p>Title: {productUnit.title}</p>
                                <p>Price: {productUnit.price}</p>

                            </div>
                        </div>

                    )

                })
            }

        </div>
    )
}

export default Cart;