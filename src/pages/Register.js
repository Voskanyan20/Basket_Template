import React, {useState} from 'react';
import WrapperLogout from "../components/WrapperLogout";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Register(props) {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: ""
    })
    const [error, setError] = useState({})

    const handleSubmit= async (e)=>{
        e.preventDefault()
        const {data} = await axios.post('https://cors-anywhere.herokuapp.com/http://restapi.adequateshop.com/api/authaccount/registration/', formData)
            .catch(e=>e.response);
        setData(data);
        console.log(data)
        if (data.message !== "success"){
            setError({
                password: data.ModelState && data.ModelState['User.password'] ? data.ModelState['User.password'][0] : null,
                name: data.ModelState && data.ModelState['User.name'] ? data.ModelState['User.name'][0] : null,
                email: data.ModelState && data.ModelState['User.email'] ? data.ModelState['User.email'][0] : null,
                message: data.message
            })
        }else{
            navigate('/login')
        }
    }
    const handleChange=(e, key)=>{
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }
    return (
        <WrapperLogout>
            <div style={{display:"flex",flexDirection:"column"}}>
                <form className={"login__form"} onSubmit={handleSubmit}>
                    {error.message ? <h2>{error.message}</h2> : null}
                    <div>
                        {error.name ? <h2>{error.name}</h2> : null}
                        <label htmlFor={"name"}>Name</label><br/>
                        <input type={'text'}
                               id={'name'}
                               onChange={(e)=>handleChange(e, 'name')}
                               value={formData.name}
                        /><br/>
                    </div>
                   <div>
                       {error.password ? <h2>{error.password}</h2> : null}
                       <label htmlFor={"password"}>Password</label><br/>
                       <input type={'password'}
                              id={'password'}
                              onChange={(e)=>handleChange(e, 'password')}
                              value={formData.password}
                       /><br/>
                   </div>
                    <div>
                        {error.email ? <h2>{error.email}</h2> : null}
                       <label htmlFor={"email"}>Email</label><br/>
                       <input type={'email'}
                              id={'email'}
                              onChange={(e)=>handleChange(e, 'email')}
                              value={formData.email}
                       /><br/>
                   </div>
                      <button>Register</button>     <br/>
                    <Link to={'/login'}>Login</Link>

                </form>
            </div>
        </WrapperLogout>
    );
}

export default Register;