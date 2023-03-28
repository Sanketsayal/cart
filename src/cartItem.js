import React from "react";

class CartItem extends React.Component {

    increaseQty=()=>{
        console.log(this.state);
        // this.setState({
        //     Qty:this.state.Qty+1
        // })
        this.setState((prev)=>{
            return {
                Qty:prev.Qty+1
            }
        })
    }

    decreaseQty=()=>{
        const {Qty}=this.state;
        // this.setState({
        //     Qty:this.state.Qty+1
        // })
        if(Qty===0){
            return;
        }
        this.setState((prev)=>{
            return {
                Qty:prev.Qty-1
            }
        })
    }

    render(){
        const {price,title,Qty}=this.props.product;
        const {product,increase,Decrease,Delete}=this.props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.images} alt="" />
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
                        onClick={()=>{increase(product)}} />
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
    }
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