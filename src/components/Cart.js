import { useEffect } from 'react';


import Checkout from './Checkout'


function Cart(props) {
    const { userProductUnits, fetchUserProductUnits, user, deleteProductUnits, checkout } = props
    console.log("this is the userProduct", userProductUnits)

    const userId = localStorage.getItem("userId")
    console.log("userIdfrom local storage", userId)

    console.log("this is the user from props in Cart", user)


    useEffect(() => {
        fetchUserProductUnits(userId)

      }, []);

    return (
        <div>
            <div>
            <h1>Cart</h1>
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
            </div>
            <br></br>
            <div>
            <Checkout checkout={checkout}/>
            </div>

        </div>
    )
}

export default Cart;