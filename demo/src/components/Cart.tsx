import React from 'react'
import CartItem from './CartItem'
interface Cart{
    name:string,
    img:string,
    quantity:number,
    price:number,
    description:string,
    id:number,
    number:number
}
interface CartList{
    carts:Cart[],
    onClickRemove:any,
    onClickUpdate:any,
}
export default function Cart(Props:CartList) {
  return (
    <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel-heading">
                <h1 className="panel-title">Your Cart</h1>
            </div>
            <div className="panel-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th style={{width:'4%'}}>STT</th>
                      <th>Name</th>
                      <th style={{width:'15%'}}>Price</th>
                      <th style={{width:'4%'}}>Quantity</th>
                      <th style={{width:'4%'}}> Action</th>
                    </tr>
                  </thead>
                  <tbody id="my-cart-body">
                    {Props.carts.map((e)=>{
                        return  <CartItem cartItem={e} onClickRemove={Props.onClickRemove} onClickUpdate={Props.onClickUpdate}></CartItem>
                    })}
                  </tbody>
                  <tfoot id="my-cart-footer">
                    <tr>
                      <td colSpan={4}>
                        There are <b>2</b> items in your shopping cart.
                      </td>
                      <td colSpan={2}className="total-price text-left">630 USD</td>
                    </tr>
                  </tfoot>
                </table>
            </div>
            <div className="alert alert-success" role="alert" id="mnotification">
              Add to cart successfully
            </div>
        </div>
    </div>
  )
}
