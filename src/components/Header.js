import React from 'react';
import apple from "../apple-seeklogo.com.svg"
import basket from '../shopping_cart_FILL0_wght400_GRAD0_opsz48.png'
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <div className={'row shop_header'}>
            <img src={apple} style={{width: "160px",margin: "0 auto",backgroundColor: "white",marginTop: "19px",borderRadius: "97px"}}/>
            <h1 style={{color: "white",fontFamily: "auto",padding: "10px 0 6px 0"}}>Shopping Cart</h1>
            <div >
                <a style={{marginRight:"10px"}} href={'#/cart'}><img src={basket}/>
                    {props.cartCountItems?
                        (<button style={{borderRadius: "79px",height: "28px"}} className={'button'}>{props.cartCountItems}</button>
                        ): ("")}</a>
                <Link to={'/log-out'}>Sign Out</Link>
            </div>
        </div>
    );
}

export default Header;