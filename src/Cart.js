import React from "react";
import CartItem from "./cartItem";

class Cart extends React.Component{

    constructor(){
        super();
        this.state={
            products:[
                {
                    price:99,
                    title:'watch',
                    Qty:1,
                    img:'',
                    id:1
                },
                {
                    price:999,
                    title:'phone',
                    Qty:10,
                    img:'',
                    id:2
                },
                {
                    price:9999,
                    title:'laptop',
                    Qty:4,
                    img:'',
                    id:3
                }
            ]
        }
    }

    handleIncrease=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].Qty+=1;
        this.setState({
            products
        })
    }

    handleDecrease=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].Qty===0){
            return;
        }
        products[index].Qty-=1;
        this.setState({
            products
        })
    }

    handleDelete=(id)=>{
        const {products}=this.state;
        const items=products.filter((item)=>item.id!==id);

        this.setState({
            products:items
        })
    }

    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                
                {products.map((product)=>{
                    return (
                        <CartItem 
                        product={product} 
                        key={product.id}
                        increase={this.handleIncrease}
                        Decrease={this.handleDecrease}
                        Delete={this.handleDelete} />)
                })}
            </div>
            
        );
        
    };
}

export default Cart;