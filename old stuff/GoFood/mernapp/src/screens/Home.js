import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';


export default function () {
    return (
        <div>
            <div><Navbar></Navbar></div>
            <div><Carousel></Carousel></div>
            <div className="flex-container mb-5 ">
             <div className="m-3"><Card></Card></div>
             <div className="m-3"><Card></Card></div>
             <div className="m-3"><Card></Card></div>
             <div className="m-3"><Card></Card></div>
             <div className="m-3"><Card></Card></div>
             <div className="m-3"><Card></Card></div>
             </div>
            <div><Footer>

            </Footer></div>
        </div>
    );
}
