import React, {useState} from 'react';
import WrapperLogout from "../components/WrapperLogout";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import useLocalStorage from "../helpers/useLocalStorage";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate()
    console.log(navigate)
    const [, setToken] = useLocalStorage("token")

    const handleSubmit =async (ev) => {
        ev.preventDefault()
        const {data} =await axios.post('https://cors-anywhere.herokuapp.com/http://restapi.adequateshop.com/api/authaccount/login/', {
            "email": email,
            'password': password
        }).catch(e=>e.response)
        if(data.message !== "success"){
           setError({message: data.message})
        }else {
            setToken(data.data.Token)
            navigate('/')
        }
    }
    return (
        <WrapperLogout>
            <form className={"login__form"} onSubmit={handleSubmit}>
                {error.message ? <h2>{error.message}</h2> : null}
                <label htmlFor={"email"}>Email</label><br/>
                <input type={'email'} id={'email'} onChange={(ev)=>setEmail(ev.target.value)}/><br/>
                <label htmlFor={"password"}>Password</label><br/>
                <input type={'password'} id={'password'} onChange={(ev)=>setPassword(ev.target.value)}/><br/>
                <button>Login</button>
                <br/>
                <Link to={'/register'}>Register</Link>
            </form>
        </WrapperLogout>
    );
}

export default Login;