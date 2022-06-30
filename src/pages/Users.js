import Header from "../components/Header";
import Main from "../components/Main";
import Basket from "../components/Basket";
import PRODUCTS from '../data';
import {useState} from "react";


function Users(props) {
    const {products} = PRODUCTS;
    const [cartItems, setCartItems] = useState([])
    console.log(products)

    const onAdd = (products) => {
        const exist = cartItems.find((x) => x.id === products.id);
        if (exist) {
            setCartItems(cartItems.map(x => (
                x.id === products.id ? {...exist, qty: exist.qty + 1} : x
            )))
        } else {
            setCartItems([...cartItems, {...products, qty: 1}])
        }
    }
    const onRemove = (products) => {
        const exist = cartItems.find((x) => x.id === products.id)
        console.log(exist)
        if(exist.qty === 1){
            setCartItems(cartItems.filter(x=>x.id !== products.id))
        }else{
            setCartItems(cartItems.map(x=>(
                x.id ===products.id ? {...exist,  qty: exist.qty - 1}: x
            )))
        }
    }
    return (
        <div className="App">
            <Header cartCountItems={cartItems.length}/>
            <div className={'row'}>
                <Main
                    products={products}
                    onAdd={onAdd}/>
                <Basket onAdd={onAdd}
                        cartItems={cartItems}
                        onRemove={onRemove}/>
            </div>
        </div>
    );
}

export default Users;
