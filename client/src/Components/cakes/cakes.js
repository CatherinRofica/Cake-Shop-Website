import React from 'react';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';
import image1 from './cake1.webp';import image2 from './cake2.webp';import image3 from './cake3.webp';
import image4 from './cake4.webp';import image5 from './cake5.webp';import image6 from './cake6.webp';
import image7 from './cake7.webp';import image8 from './cake8.webp';import image9 from './cake9.webp';
import image10 from './cake10.webp';import image11 from './image11.webp';import image12 from './image12.webp';
import image13 from './cake13.webp';import image14 from './cake14.webp';import image15 from './cake15.webp';
import image16 from './cake16.webp';import image17 from './image17.webp';import image18 from './cake18.webp';
import image19 from './cake19.webp';import image20 from './cake20.webp';import image21 from './cake21.webp';
import image22 from './cake22.webp';import image23 from './cake23.webp';import image24 from './cake24.webp';
import image25 from './cake25.webp';import image26 from './cake26.webp';import image27 from './cake27.webp';
import image28 from './cake28.webp';import image29 from './cake29.webp';import image30 from './cake30.webp';
import image31 from './cake31.webp';import image32 from './cake32.webp';

export function Cakes(){
    return(
        <>
        <div className='menu container-fluid'>
            <Menu/>
        </div>
        <div className='products container-fluid'>
            <div className="product container-fluid">
            <h1 className="product-title text-center">Discover Deliciousness</h1>
            <p className="product-p text-center mt-3">See What's Trending Right Now</p>
            <div className="row text-center mt-3">
                <div className="col-lg-3">
                    <div className="pc-card">
                        <img src={image1} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Dual Chocolate Cake</p>
                        <p className="card-text">₹625</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="pc-card">
                        <img src={image2} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Blueberry Cake</p>
                        <p className="card-text">₹525</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="pc-card">
                        <img src={image3} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Oreo Cake</p>
                        <p className="card-text">₹425</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="pc-card">
                        <img src={image4} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Fruit Overload Cake</p>
                        <p className="card-text">₹749</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image5} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Fudge Brownie Cake</p>
                        <p className="card-text">₹699</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image6} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Buttersctch Bento cake</p>
                        <p className="card-text">₹449</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image8} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Bakingo Mango Cake</p>
                        <p className="card-text">₹549</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image7} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Vibrant Rainbow Cake</p>
                        <p className="card-text">₹2,995</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image9} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Caramel Delight Cake</p>
                        <p className="card-text">₹800</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image10} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Pineapple Cake</p>
                        <p className="card-text">₹545</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image11} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Strawberry Cake</p>
                        <p className="card-text">₹750</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image12} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Red Velvet Cake₹1,375</p>
                        <p className="card-text">₹1,375</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image13} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Blackforest Cake</p>
                        <p className="card-text">₹599</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image14} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Vancho Vanilla Chocolate Cake</p>
                        <p className="card-text">₹550</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image15} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Bankingo Tall Milk Choco Cake</p>
                        <p className="card-text">₹649</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image16} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Velvety Chocolate Truffle Cake</p>
                        <p className="card-text">₹699</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image17} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Triple Layer Delight Cake</p>
                        <p className="card-text">₹700</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image18} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">White Forest Cake</p>
                        <p className="card-text">₹649</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image19} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Rocher Cake</p>
                        <p className="card-text">₹1,600</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image20} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Chocolate Dream Cake</p>
                        <p className="card-text">₹699</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image21} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Bakingo Snicker Fuse Choco Cake</p>
                        <p className="card-text">₹699</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image22} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Bottle Green Floral Cake</p>
                        <p className="card-text">₹1,799</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image23} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Love Spell Choco Cake</p>
                        <p className="card-text">₹475</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image24} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Creamy Mango Delight Cake</p>
                        <p className="card-text">₹749</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image25} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Pineapple Cake Eggless</p>
                        <p className="card-text">₹549</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image26} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Macaron Cake</p>
                        <p className="card-text">₹2,995</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image27} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Kit Kat Cake</p>
                        <p className="card-text">₹3,025</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image28} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Pastel Roses Cake</p>
                        <p className="card-text">₹5,250</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image29} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Paris Bonjour Cake</p>
                        <p className="card-text">₹3,675</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image30} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Candyland Cake</p>
                        <p className="card-text">₹7,9500</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image31} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Golden Star Cake</p>
                        <p className="card-text">₹5,150</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div className="pc-card">
                        <img src={image32} alt="Image" className="card-image"></img>
                    <div className="card-body align-item-center">
                        <p className="card-text">Rasamalai  Creamy Cake</p>
                        <p className="card-text">₹1,725</p>
                        <button className="card-btn" type="submit">Order Now</button>
                    </div>
                    </div>
                    </div>
                </div>
        </div>
        </div>
        <div className='container-fluid footer'>
            <Footer/>
        </div>
        </>
    );
}