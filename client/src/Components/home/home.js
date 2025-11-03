import React from 'react';
import { Menu } from '../menu/menu';
import { Footer} from '../footer/footer';
import image from './cakehome.png';

export function Home(){
    return(
        <>
        <div className='menu container-fluid'>
            <Menu/>
        </div>
        <div className='home container-fluid'>
            <img src={image} alt="Home" className="homepic"></img>
            <div className='content'>
                <h1 className='cake-head'>RJ Cakes</h1>
                <p className='cake=p'>We make the Delicious cake</p>
                <btn className='cake-btn'>Order Now</btn>
            </div>
        </div>
        <div className='container-fluid footer'>
            <Footer/>
        </div>
        </>
    );
}