import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import useLocalStorage from "../helpers/useLocalStorage";

function LogOut(props) {
    const navigate = useNavigate()
    const [, setToken] = useLocalStorage('token');
    useEffect(()=>{
        setToken('')
       // navigate('/login')
        window.location.href = '/login'
    }, [])
    return null
}

export default LogOut;