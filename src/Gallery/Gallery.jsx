// import React from 'react';
import 'bs5-lightbox';
import './Gallery.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Gallery = () => {
    AOS.init();
    return (
        <div data-aos="zoom-in">
            <h2 className="text-center mt-5 mb-4" style={{color:'purple', fontWeight:'600'}}>The Gallery Section</h2>
            <div className="row m-auto">
                <a href="https://i.ibb.co/wz2KcFX/super-snapper-sd-TL4q-Tynf-M-unsplash.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-lg-3 col-6  mb-3">
                    <img src="https://i.ibb.co/wz2KcFX/super-snapper-sd-TL4q-Tynf-M-unsplash.jpg" className="imgFluid"/>
                </a>
                <a href="https://i.ibb.co/QjK022x/liam-charmer-1om-CIULTno-Y-unsplash.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-lg-3 col-6 mb-3">
                    <img src="https://i.ibb.co/QjK022x/liam-charmer-1om-CIULTno-Y-unsplash.jpg" className="imgFluid"/>
                </a>
                <a href="https://i.ibb.co/DRfMyrm/philip-myrtorp-Q305c-WY2-X3-E-unsplash.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-lg-3 col-6 mb-3">
                    <img src="https://i.ibb.co/DRfMyrm/philip-myrtorp-Q305c-WY2-X3-E-unsplash.jpg" className="imgFluid"/>
                </a>
            
                <a href="https://i.ibb.co/C59nzRw/gabriel-vasiliu-Niu-BAomdr-T4-unsplash.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-lg-3 col-6 mb-3">
                    <img src="https://i.ibb.co/C59nzRw/gabriel-vasiliu-Niu-BAomdr-T4-unsplash.jpg" className="imgFluid"/>
                </a>
                <a href="https://i.ibb.co/L6dZHmr/dejected-bandha-6-KKib-YS334-unsplash.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-lg-3 col-6  mb-3">
                    <img src="https://i.ibb.co/L6dZHmr/dejected-bandha-6-KKib-YS334-unsplash.jpg" className="imgFluid" />
                </a>
                <a href="https://i.ibb.co/CvQSpfh/louis-magnotti-r-Ecn8-OB83-EI-unsplash.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-lg-3 col-6  mb-3">
                    <img src="https://i.ibb.co/CvQSpfh/louis-magnotti-r-Ecn8-OB83-EI-unsplash.jpg" className="imgFluid" />
                </a>
                <a href="https://i.ibb.co/YNsFbfY/chris-king-Vq-Lyo-Rjhiss-unsplash.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-lg-3 col-6  mb-3">
                    <img src="https://i.ibb.co/YNsFbfY/chris-king-Vq-Lyo-Rjhiss-unsplash.jpg" className="imgFluid" />
                </a>
                <a href="https://i.ibb.co/pQ0wv6z/jeong-pei-Dzq-C1-R1-GX1-E-unsplash.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-lg-3 col-6  mb-3">
                    <img src="https://i.ibb.co/pQ0wv6z/jeong-pei-Dzq-C1-R1-GX1-E-unsplash.jpg" className="imgFluid" />
                </a>
            </div>
        </div>
    );
};

export default Gallery;