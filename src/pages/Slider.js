import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Slider() {
    const navigate = useNavigate();
    return (
        <div className="twm-slider1-wrap"   >
            <div className="twm-slider1-wrap">

                {/* <!-- Swiper --> */}
                <div className="swiper twm-slider">
                    <div className="swiper-wrapper">
                        {/* <!--Slide Two --> */}
                        <div className="swiper-slide">
                            <div className="h-banner-wrap">
                                <div className="h-banner-left">
                                    <div className="h-bnr-top">
                                        <h2>
                                            <span className="title-outline">Bringing</span>
                                            you home
                                        </h2>
                                        <p>Big or small… We can handle it all.</p>
                                        <NavLink to="services" className="h-bnr-btn">View Services</NavLink>
                                    </div>

                                </div>
                                <div className="h-banner-right">
                                    <div className="h-bnr-r-inner">
                                        <div className="h-bnr-media">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/truck-1.png`} alt="#" className="slide-top"/>
                                        </div>
                                        <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/main-slider/slider1/bg2.jpg')`}}>

                                        </div>
                                    </div>
                                </div>
                                <div className="cross-line-box left up-down"><img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/cross-line-box.png`} alt="#"/></div>
                                <div className="cross-line-box right up-down"><img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/cross-line-box.png`} alt="#"/></div>
                                <div className="circle-left-top zoon-in-out"></div>
                            </div>
                        </div>
                        {/* <!--Slide One --> */}
                        <div className="swiper-slide">
                            <div className="h-banner-wrap">
                                <div className="h-banner-left">
                                    <div className="h-bnr-top">
                                        <h2>
                                            <span className="title-outline">Now let's</span>
                                            befikr
                                        </h2>
                                        <p>Let us take you forward with honesty and greatness</p>
                                        <NavLink to="/services" className="h-bnr-btn">View Services</NavLink>
                                    </div>

                                </div>
                                <div className="h-banner-right">
                                    <div className="h-bnr-r-inner">
                                        <div className="h-bnr-media">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/truck-2r.png`} alt="#" className="slide-top"/>
                                        </div>
                                        <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/main-slider/slider1/bg2.jpg')`}}>

                                        </div>
                                    </div>
                                </div>
                                <div className="cross-line-box left up-down"><img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/cross-line-box.png`} alt="#"/></div>
                                <div className="cross-line-box right up-down"><img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/cross-line-box.png`} alt="#"/></div>
                                <div className="circle-left-top zoon-in-out"></div>
                            </div>
                        </div>

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </div>
    );
}
