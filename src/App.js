import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LogOut from "./pages/LogOut";

function App(props){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/log-out" element={<LogOut/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default App