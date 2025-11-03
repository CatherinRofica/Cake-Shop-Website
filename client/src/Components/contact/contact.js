import React from 'react';
import { Menu } from '../menu/menu';
import { Footer} from '../footer/footer';
import image from './cake2.jpg';

export  function Contact() {
    return(
        <>
        <div className='menu container-fluid'>
             <Menu/>
        </div>
        <div className='contact container-fluid d-flex'>
            <div className='con-img'>
                <img src={image} alt='Image' className='con-pic'></img>
            </div>
            <div className='details'>
                <form className='contact-form'>
                <label className='form-label d-flex flex-column'>Name</label>
                <input type='text' className='form-det'></input>    
                <label className='form-label'>Email</label>
                <input type='email' className='form-det'></input>
                <label className='form-label'>Contact No</label>
                <input type='text' className='form-det'></input>    
                <label className='form-label'>City</label>
                <input type='text' className='form-det'></input>
                <label className='form-label'>Message</label>
                <textarea className='form-det' rows='4'></textarea>
                <button type='submit' className='form-btn'>Submit</button>
                </form>
            </div>
        </div>
        <div className='container-fluid footer'>
            <Footer/>
        </div>
        </>
    );
}