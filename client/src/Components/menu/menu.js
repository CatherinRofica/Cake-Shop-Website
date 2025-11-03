import React from 'react';
import { Link } from 'react-router-dom';

export function Menu(){
    return(
        <>
        <nav className="menu navbar navbar-expand-lg ">
             <div className="container-fluid">
                <a className="navbar-brand" href="#">RJ Cakes</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="nav2 navbar-nav justify-content-between ms-auto">
            <a className="navt nav-link" aria-current="page" href="/">Home</a>
            <a className="navt nav-link" href="/cakes">Cakes</a>
            <a className="navt nav-link" href="/about">About</a>
            <a className="navt nav-link" href="/contact">Contact</a>
            <a className="navt nav-link" href="/signup">Signup</a>
            <a className="navt nav-link" href="/login">Login</a>
            </div>
            </div>
        </div>
    </nav>
    </>
    );
}