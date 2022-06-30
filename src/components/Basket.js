import React from 'react';
import basket from '../shopping_cart_FILL0_wght400_GRAD0_opsz48.png'
import {Button} from "react-bootstrap";
function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemPrice = cartItems.reduce((a, b)=> a + b.qty * b.price, 0);
    const taxPrice = itemPrice *  0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 20;
    const totalPrice = itemPrice + taxPrice + shippingPrice;
    console.log(totalPrice)
    return (
        <aside className={'baskett'}>
            <img src={basket} style={{margin:"10px 0"}} />
            <h3 style={{fontFamily:"auto"}}>Cart items</h3>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map(item=>(
                    <div key={item.id} className={'row'}>
                        <div>{item.name}</div>
                        <div>
                            <Button variant={"primary"} onClick={()=>onAdd(item)}>+</Button>
                            <Button variant={"danger"} onClick={()=>onRemove(item)}>-</Button>
                        </div>
                        <div>{item.qty} x ${item.price.toFixed(2)}</div>
                    </div>
                ))}
                {cartItems.length !== 0 && (<>
                <hr/>
                    <div className={'row totals'}>
                        <div> Items Price - ${itemPrice.toFixed(2)}</div>
                    </div>
                    <div className={'row totals'}>
                        <div> Items Tax - ${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className={'row totals'}>
                        <div> Shipping Price - ${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className={'row totals'}>
                        <div>Total Price - ${totalPrice.toFixed(2)}</div>
                    </div>
                    <div className={'row'}>

                       <Button variant={"success"} onClick={()=>alert('Thanks for buying')}>Checkout {props.cartCountItems}</Button>
                    </div>

                </>)}
            </div>
        </aside>
    );
}

export default Basket;