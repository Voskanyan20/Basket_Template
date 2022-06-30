import React, {useState} from 'react';
import {Navigate} from 'react-router-dom'
import useLocalStorage from "../helpers/useLocalStorage";

function WrapperLogout(props) {
    const [token] = useLocalStorage("token")
    if(token){
        return <Navigate to="/"/>
    }
    return (
        <div style={{display: "flex",flexDirection:"column"}}>
            {props.children}
        </div>
    );
}

export default WrapperLogout;