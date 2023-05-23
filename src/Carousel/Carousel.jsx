// import React from 'react';

import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './Carousel.css'
const Carousel = () => {
    return (

        <MDBCarousel showControls showIndicators data-mdb-ride="carousel" >
            <MDBCarouselItem
                className='w-100 d-block slider' 
                itemId={1}
                src="https://i.ibb.co/2vk9Vd2/mert-aydemir-A-Tzr67e-Ci0-unsplash.jpg"
                alt='...'
            active>
                <div className='sliderColor'>
                <h5>Quality of Toys</h5>
                <p>We have the best quality car toys</p>
                </div>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block slider' 
                itemId={2}
                src='https://i.ibb.co/10n5y5n/yurii-khomitskyi-xc-TXjh-ZBAMI-unsplash.jpg'
                alt='...'
            >
                <div className='sliderColor'>
                <h5>Childrens choice</h5>
                <p>We prioritize the choices of the children</p>
                </div>
                </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block slider' 
                itemId={3}
                src='https://i.ibb.co/cvqkJcf/alonso-moreno-RHGM6u-AYhm-U-unsplash.jpg'
                alt='...'
            >
                <div className='sliderColor'>
                <h5>Reasonable cost</h5>
                <p>We have the reasonable prices of car toys</p>
                </div>
                </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block slider' 
                itemId={4}
                src='https://i.ibb.co/CPdp8qL/markus-spiske-KL1-LOYSJI-8-unsplash.jpg'
                alt='...'
            >
                <div className='sliderColor'>
                <h5>Branches</h5>
                <p>Multiple branches are available in Bangladesh</p>
                </div></MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block slider' 
                itemId={5}
                src='https://i.ibb.co/QJL9WJ9/sreekumar-p-L2p3p-K7p5-BY-unsplash.jpg'
                alt='...'
            >
                <div className='sliderColor'>
                <h5>Discounts</h5>
                <p>We offer discounts in different occasions</p></div></MDBCarouselItem>
        </MDBCarousel>

    );
};

export default Carousel;