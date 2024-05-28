import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './bootstrap.min.css'
import ListProduct from './components/ListProduct'
import Cart from './components/Cart'
import CartItem from './components/CartItem'
const products=[
  {
    id:1,
    name:'Pizza',
    img:'',
    price:30,
    quantity:0,
    description:' Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitisquisquam magnam magni ut deleniti!'
  },
  {
    id:2,
    name:'Hamburger',
    img:'',
    price:25,
    quantity:10,
    description:' Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitisquisquam magnam magni ut deleniti!'
  },
  {
    id:3,
    name:'Bread',
    img:'',
    price:19,
    quantity:10,
    description:' Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitisquisquam magnam magni ut deleniti!'
  },
  {
    id:4,
    name:'Cake',
    img:'',
    price:37,
    quantity:10,
    description:' Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitisquisquam magnam magni ut deleniti!'
  },

]
localStorage.setItem('products', JSON.stringify(products));
interface Product{
  name:string,
  img:string,
  quantity:number,
  price:number,
  description:string,
  id:number,
}
interface CartI{
  name:string,
  img:string,
  quantity:number,
  price:number,
  description:string,
  id:number,
  number:number
}
interface CartList{
  carts:CartList[],
}
function App() {
  let[productList,setProductList]=useState<Product[]>(function(){
    let productList: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
    if(productList.length===0){
        return [];
    }
    return productList;
  });
  let [cartList,setCart]=useState<CartI[]>(function(){
    let cartList: CartI[] = JSON.parse(localStorage.getItem('carts') || '[]');
    if(cartList.length===0){
        return [];
    }
    return cartList;
  });
  const handleClickIncrease=(cartItem:CartI)=>{
    const index :number|undefined=cartList.findIndex(e=>{
        return e.id==cartItem.id;
    })
    const newCart=[...cartList];
    if(newCart[index].quantity<newCart[index].number+1){
        alert('Số lương hàng trong kho đã hết');
        return;
    }
    newCart[index].number++;
    setCart(newCart);
    localStorage.setItem('carts',JSON.stringify(newCart));
  }
  const handleClickRemove=(cartItem:CartI)=>{
    const newCart=cartList.filter((e)=>{
        return cartItem.id!=e.id;
    })
    setCart(newCart);
    console.log();
    localStorage.setItem('carts',JSON.stringify(newCart));
}
  const addProduct=(id:number)=>{
    let findItem:Product|undefined=productList.find(e=>{
        return e.id===id;
    })
    if(findItem){
        let find:CartI|undefined=cartList.find((e)=>{
            return e.id===findItem.id;
        })
        if(!find){
            setCart(prevState=>{
                const list:CartI[]=[...prevState,{
                    name:findItem.name,
                    id:findItem.id,
                    img:findItem.img,
                    price:findItem.price,
                    number:1,
                    description:findItem.description,
                    quantity:findItem.quantity,
                }];
                localStorage.setItem('carts',JSON.stringify(list));
                return list;
            });
        }else{
          handleClickIncrease(find);
        }
    }
} 
const handleUpdateCart=(cartItem:CartI,input:any)=>{
  const index :number|undefined=cartList.findIndex(e=>{
      return e.id==cartItem.id;
  })
  const newCart=[...cartList];
  
  if(input>newCart[index].quantity){
      alert('Số lương hàng trong kho đã hết');
      return;
  }
  newCart[index].number=input;
  setCart(newCart);
  localStorage.setItem('carts',JSON.stringify(newCart));
}
  return (
    <div>
      <ListProduct productList={productList} addProduct={addProduct}></ListProduct>
      <Cart carts={cartList} onClickRemove={handleClickRemove} onClickUpdate={handleUpdateCart}></Cart>
    </div>
  )
}
export default App
