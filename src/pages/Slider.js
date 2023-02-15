import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Slider() {
    const navigate = useNavigate();
  return (
    <div className="twm-slider1-wrap"   >

                        {/* <!-- Swiper --> */}
                        <div className="swiper twm-slider">
                            <div className="swiper-wrapper" >
                                {/* <!--Slide One --> */}
                                <div className="swiper-slide" >
                                    <div className="h-banner-wrap">
                                        <div className="h-banner-left">
                                            <div className="h-bnr-top">
                                                <h2>
                                                    <span className="title-outline">Around</span>
                                                    The World
                                                </h2>
                                                <p>There are many variations of passages of worem Ipsum available, but the majority</p>
                                                <button onClick={() => navigate('/services')} className="h-bnr-btn">View Services</button>
                                            </div>

                                        </div>
                                        <div className="h-banner-right"  >
                                            <div className="h-bnr-r-inner">
                                                <div className="h-bnr-media">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/plane.png`} alt="#" className="slide-top" />
                                                </div>
                                                <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/main-slider/slider1/bg1.jpg')` }} >

                                                </div>
                                            </div>
                                        </div>
                                        <div className="cross-line-box left up-down"><img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/cross-line-box.png`} alt="#" /></div>
                                        <div className="cross-line-box right up-down"><img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/cross-line-box.png`} alt="#" /></div>
                                        <div className="circle-left-top zoon-in-out"></div>
                                    </div>
                                </div>

                                {/* <!--Slide Two --> */}
                                <div className="swiper-slide">
                                    <div className="h-banner-wrap">
                                        <div className="h-banner-left">
                                            <div className="h-bnr-top">
                                                <h2>
                                                    <span className="title-outline">To Every</span>
                                                    Direction
                                                </h2>
                                                <p>There are many variations of passages of worem Ipsum available, but the majority</p>
                                                <button onClick={() => navigate('/services')} className="h-bnr-btn">View Services</button>
                                            </div>

                                        </div>
                                        <div className="h-banner-right" >
                                            <div className="h-bnr-r-inner">
                                                <div className="h-bnr-media">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/truck.png`} alt="#" className="slide-top" />
                                                </div>
                                                <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/main-slider/slider1/bg2.jpg')` }}>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="cross-line-box left up-down"><img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/cross-line-box.png`} alt="#" /></div>
                                        <div className="cross-line-box right up-down"><img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/cross-line-box.png`} alt="#" /></div>
                                        <div className="circle-left-top zoon-in-out"></div>
                                    </div>
                                </div>

                                {/* <!--Slide Three --> */}
                                <div className="swiper-slide">
                                    <div className="h-banner-wrap">
                                        <div className="h-banner-left">
                                            <div className="h-bnr-top">
                                                <h2>
                                                    <span className="title-outline">Ready</span>
                                                    To Move
                                                </h2>
                                                <p>There are many variations of passages of worem Ipsum available, but the majority</p>
                                                <button onClick={() => navigate('/services')} className="h-bnr-btn">View Services</button>
                                            </div>

                                        </div>
                                        <div className="h-banner-right">
                                            <div className="h-bnr-r-inner">
                                                <div className="h-bnr-media">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/ship.png`} alt="#" className="slide-top" />
                                                </div>
                                                <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/main-slider/slider1/bg3.jpg')` }} >

                                                </div>
                                            </div>
                                        </div>
                                        <div className="cross-line-box left up-down"><img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/cross-line-box.png`} alt="#" /></div>
                                        <div className="cross-line-box right up-down"><img src={process.env.PUBLIC_URL + `/assets/images/main-slider/slider1/cross-line-box.png`} alt="#" /></div>
                                        <div className="circle-left-top zoon-in-out"></div>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-pagination"> </div>
                        </div>

                    </div>
  );
}
