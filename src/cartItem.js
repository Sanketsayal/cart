import React from "react";

const CartItem=(props)=> {

    const {price,title,Qty,img}=props.product;
    const {product,Increase,Decrease,Delete}=props;
    return(
        <div className="cart-item">
                <div className="left-block">
                    <img src={img} style={styles.images} alt="" />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {Qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={()=>{Increase(product)}} />
                        <img alt="decrese" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={()=>{Decrease(product)}}></img>
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
                        onClick={()=>{Delete(product.id)}}></img>                        
                    </div>
                </div>
        </div>
    );        
};

const styles={
    images:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;