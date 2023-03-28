import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {

  constructor(){
    super();
    this.state={
        products:[
            {
                price:99,
                title:'watch',
                Qty:1,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lEdc8LA3wpVKbj-9-wp4dvuN16Thl4sQnw&usqp=CAU",
                id:1
            },
            {
                price:999,
                title:'phone',
                Qty:10,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjkL2yLqdFNpg1hAtZaT8VAlINPtOPDyMKQ&usqp=CAU",
                id:2
            },
            {
                price:9999,
                title:'laptop',
                Qty:4,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlIBw2M2ZSV25npoB3919Ar7TDESh52Ta3A&usqp=CAU",
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

  getCount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.Qty;
    })
    return count;
  }

  getTotal=()=>{
    const {products}=this.state;
    let total=0;
    products.forEach((product)=>{
      total+=(product.Qty*product.price);
    })
    return total
  }


  render(){
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCount()}/>
        <Cart
          products={products} 
          Increase={this.handleIncrease}
          Decrease={this.handleDecrease}
          Delete={this.handleDelete}
        />
        <div>Total:{this.getTotal()}</div>
      </div>
    );
  }
}

export default App;
