import axios from "axios";
import React from "react";
import { Menu } from '../menu/menu';
import { Footer} from '../footer/footer';

export function Signup() {

    function signup(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!name) {
            alert("Enter the Name");
            return;
        }
        if (!email) {
            alert("Enter the Email");
            return;
        }
        if (!password) {
            alert("Enter the Password");
            return;
        }

        const user = { name, email, password };

        axios.post("http://localhost:5140/signup", user)
            .then((response) => {
                if (response.data.status === "error") {
                    alert("Registration not successful");
                    console.log("Error while adding user");
                } else if (response.data.status === "success") {
                    alert("Registration successful!");
                    console.log("User added successfully");

                    // Clear input fields
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                }
            })
            .catch((error) => {
                console.error("Network or server error:", error);
                alert("Server not reachable or network issue!");
            });
    }

    return (
        <>
            <div className='menu container-fluid'>
                    <Menu/>
            </div>
            <div className="signup container-fluid text-center ">
                <form onSubmit={signup} className="signupform  ">
                    <h1 className="sign-head">Signup</h1>
                    <label className="sign-label">Name</label>
                    <input type="text"  id="name" className="form-in" /><br />

                    <label className="sign-label">Email</label>
                    <input type="email"  id="email" className="form-in"/><br />

                    <label className="sign-label">Password</label>
                    <input type="password"  id="password" className="form-in" /><br />

                    <button type="submit" className="sign-btn">Register</button>
                </form>
            </div>
             <div className='container-fluid footer'>
                        <Footer/>
                    </div>
        </>    
    );
}
