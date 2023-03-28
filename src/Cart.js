import React from "react";
import CartItem from "./cartItem";

const Cart =(props)=>{

    const {products}=props;
    return(
        <div className="cart">
        <h1>Cart</h1>
        {products.map((product)=>{
            return(
                <CartItem 
                product={product} 
                key={product.id}
                Increase={props.Increase}
                Decrease={props.Decrease}
                Delete={props.Delete} />
            );
        })}
        </div>
            
    );
}

export default Cart;