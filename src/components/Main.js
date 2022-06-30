import React from 'react';
import Products from "./Products";

function Main(props) {
    const {products, onAdd}= props;
    return (
        <main className={"shop__main"}>
            <h2 style={{padding: "20px 0 40px 0",fontFamily: "auto"}}>Products</h2><hr/>
            <div className={'row'}>
                {products.map(product=>(
                    <Products
                        key={product.id}
                        product={product}
                        onAdd={onAdd}
                        />
                    )
                )}
            </div>
        </main>
    );
}

export default Main;