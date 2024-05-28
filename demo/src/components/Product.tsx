import React, { useState } from 'react'
interface ProductL{
    name:string,
    img:string,
    quantity:number,
    price:number,
    description:string,
    id:number,
}
interface Product{
    product:ProductL;
    addProduct:()=>void;
}
export default function Product(Props:Product) {
    const [check,setCheck]=useState<boolean>(function(){
        if(Props.product.quantity==0){
            return false;
        }
        return true;
    }); 
  return (
    <div>
        <div className="media product">
            <div className="media-left">
                <a href="#">
                    <img className="media-object"src={Props.product.img}alt="pizza"/>
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{Props.product.name}</h4>
                <p>{Props.product.description}</p>
                {check?<> 
                    <input name="quantity-product-1"type="number"value={Props.product.quantity}/>
                    <a data-product="1" className="price" style={{cursor:'pointer'}} onClick={Props.addProduct}>{Props.product.price} USD </a>
                    </>
                :
                <span className="price">{Props.product.price} USD</span>
                }
            </div>
        </div> 
    </div>
  )
}
