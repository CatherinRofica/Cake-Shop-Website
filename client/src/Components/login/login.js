import axios from "axios";
import React from "react";  
import { Menu } from '../menu/menu';
import { Footer} from '../footer/footer';


export function Login() {

    function login(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const key = { email, password };

        if (email === "") { 
            alert("Enter the Email");
        } else if (password === "") {  
            alert("Enter the Password");
        } else {
            axios.post("http://localhost:5140/login/", key)
                .then((res) => {
                    if (res.data.status === "error") { 
                        alert("Login failed due to server error");
                        console.log("error");
                    } else if (res.data.status === "failed") { 
                        alert("Invalid email or password");
                        console.log("invalid");
                    } else if (res.data.status === "success") { 
                        alert("Login successful!");
                        console.log("login success");

                        // clear input fields
                        document.getElementById("email").value = "";
                        document.getElementById("password").value = "";
                    }
                })
                .catch((err) => {
                    console.log("Login error:", err);
                    alert("Something went wrong");
                });
        }
    }

    return (
        <>
            <div className='menu container-fluid'>
                                <Menu/>
                        </div>
                <div className="login container-fluid text-center ">
                    <form onSubmit={login}  className="login-form">
                        <h1 className="sign-head">Login</h1>
                        <label className="sign-label">Email</label>
                        <input type="email" className="form-in" id="email" /><br />

                        <label className="sign-label">Password</label>
                        <input type="password" className="form-in" id="password" /><br />

                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </div>
            <div className='container-fluid footer'>
                                    <Footer/>
             </div>
        </>
    );
}