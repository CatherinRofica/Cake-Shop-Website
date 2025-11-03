import React from 'react';
import { Menu } from '../menu/menu';
import { Footer} from '../footer/footer';
import image1 from './cake1.png';
import image2 from './cake2.jpg';
import image3 from './ing1.jpg';
import image4 from './ing2.png';
import image5 from './ing3.jpg';
export function About(){
    return(
        <>
        <div className='menu container-fluid'>
            <Menu/>
        </div>
        <div className='about container-fluid d-flex'>
            <div className='sec-a text-center'>
            <h1 className='sec-head'>About us</h1>
            <p className='sweet mt-4 '>At Sweet Delights, we believe cakes aren't just desserts they're memories, celebrations, and joy wrapped in layers of sweetness.</p>
            </div>
            <div className='abimg ms-auto'>
            <img src={image1} alt='Image' className='imageab'></img>
            </div>
        </div>
        <div className='story cotainer-fluid d-flex'>
            <div className='stoimg ms-auto'>
             <img src={image2} alt='Image' className='imgsto'></img>
            </div>
            <div className='sec-b text-center'>
            <h1 className='stroy-head'>Welcome to Sweet Delights</h1>
            <p className='story-a mt-4'>At Sweet Delights, we believe that cakes aren't just desserts they're memories, celebrations, and joy wrapped in layers of sweetness. Founded with a passion for baking and a love for creating smiles, our mission is to bring you cakes that not only taste heavenly but also look like a piece of art.</p>
            <p className='story-p mt-4'>It all started in a small kitchen with a big dream. What began as weekend baking experiments soon turned into a full-fledged bakery known for its mouth-watering cakes, cupcakes, and confections. With years of experience and a heart full of passion, our bakers handcraft each cake with love, quality ingredients, and unmatched creativity.</p>
            </div>
        </div>
        <div className="special container">
            <h2 className="section-title">What Makes Us Special</h2>
            <div className="special-features row">
            <div className="col-md-4 feature">
                <img src={image3} alt='Image' className='icon'></img>
                <h5>Fresh Ingredients</h5>
                <p>We use farm-fresh eggs, organic flour, and real cream for every cake.</p>
            </div>
            <div className="col-md-4 feature">
               <img src={image4} alt='Image' className='icon'></img>
                <h5>Handmade with Love</h5>
                <p>Each cake is crafted by hand with care and creativity.</p>
                </div>
                <div className="col-md-4 feature">
                    <img src={image5} alt='Image' className='icon'></img>
                    <h5>Fast Delivery</h5>
                    <p>Enjoy fresh cakes delivered to your doorstep on time.</p>
                </div>
            </div>
        </div>
        <div className='container-fluid footer'>
            <Footer/>
        </div>
        </>
    );
}