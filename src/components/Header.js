import React from 'react';

export default function Header(props) {
    return (
    <header >
        <div>
        <a href="#/">
        <h1>Welcome Listener</h1>
    </a>
    </div>
    <div>
        <a href="#/cart">Cart</a>
        <a href="#/signin">SignIn</a>

    </div>
    </header>
    )
}