import React from 'react'
import Product from './Product'
interface ProductL{
    name:string,
    img:string,
    quantity:number,
    price:number,
    description:string,
    id:number,
  }
interface Products{
    productList:ProductL[];
    addProduct:any;
}
export default function ListProduct(props:Products) {
  return (
    <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className='panel panel-primary'>
                <div className="panel-heading">
                    <h1 className="panel-title">List Products</h1>
                </div>
                <div className="panel-body" id="list-product">
                    {props.productList.map(function(e){
                        return <Product product={e} addProduct={()=>{props.addProduct(e.id)}} ></Product>
                    })}  
                </div>
            </div>
        </div>
    </div>
  )
}
