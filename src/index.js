import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss";
import CartState from "./context/cart/CartState";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <CartState>
        <App/>
    </CartState>
)



