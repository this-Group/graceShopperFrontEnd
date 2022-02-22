import { useEffect, useState } from 'react';


function Cart(props) {
    const { userProductUnits, fetchUserProductUnits, user } = props
    console.log("this is the user from props in Cart", user)
    
    // useEffect(() => {
    //     fetchUserProductUnits(user.userID)
        
    //     // setCartItems(JSON.parse(localStorage.cartItems))
    //     // console.log(JSON.parse(localStorage.getItem("cartItems")))
    //   }, []);

    // useEffect(() => {
    //     fetchUserProductUnits(user.user.userId)
    
        
    //   }, []);

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