
function Cart(props) {
    const { userProductUnits } = props

    return (
        <div>
            <h1>User's Cart</h1>
            {/* If there are no userProductUnits return no albums in cart */}
            {
                userProductUnits && userProductUnits.length && userProductUnits.map((productUnit) => {

                    return (
                        <div>
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