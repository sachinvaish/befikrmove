import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog1() {
    return (
        <div>
            {/* <!-- CONTENT START --> */}
            <div className="page-content">

                {/* <!-- INNER PAGE BANNER --> */}
                <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg')` }}>
                    <div className="overlay-main site-bg-sky opacity-08"></div>
                    <div className="container">
                        <div className="wt-bnr-inr-entry">
                            <div className="banner-title-outer">
                                <div className="banner-title-name">
                                    <h2 className="wt-title">Blog</h2>
                                </div>
                            </div>
                            {/* <!-- BREADCRUMB ROW -->                             */}

                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li>5 Important Factors To Consider When Choosing The Best Packers And Movers In India.</li>
                                </ul>
                            </div>

                            {/* <!-- BREADCRUMB ROW END -->                         */}
                        </div>
                    </div>
                </div>
                {/* <!-- INNER PAGE BANNER END --> */}



                {/* <!-- OUR BLOG START --> */}
                <div className="section-full  p-t120 p-b90 bg-white">
                    <div className="container">

                        {/* <!-- BLOG SECTION START --> */}
                        <div className="section-content">
                            <div className="row d-flex justify-content-center">

                                <div className="col-lg-8 col-md-12">
                                    {/* <!-- BLOG START --> */}
                                    <div className="blog-post-single-outer">
                                        <div className="blog-post-single bg-white">

                                            <div className="wt-post-info">

                                                <div className="wt-post-media m-b30">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/blog1.png`} alt="" />
                                                </div>
                                                <div className="wt-post-title ">
                                                    <h3 className="post-title">5 Important Factors To Consider When Choosing The Best Packers And Movers In India.</h3>
                                                </div>
                                                <div className="wt-post-discription">
                                                    <p>
                                                        Moving to a new home or office can be a daunting task. To make it easier, you need to choose “Befikr Move” the best packers and movers in India. It is important to select the right company that offers reliable, cost-effective moving services. Here are five factors to consider when choosing the best packers and movers in India:
                                                    </p>
                                                </div>
                                                <div className="post-single-list">
                                                    <ul className="description-list">
                                                        <li>
                                                            <i className="fa fa-angle-right"></i>
                                                            Reputation: You should check for reviews and ratings of the company before hiring them. This will help you get an idea of their service quality and reliability.
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i>
                                                            Cost: Compare different companies’ rates before making your decision. Choose one that offers cost-effective services without compromising on quality.
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i>
                                                            Insurance: Make sure that your goods are insured during transit so you can be compensated for any damage or loss during the move.
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-angle-right"></i>
                                                            Services Offered: Check what kind of services they offer such as packing, unpacking, loading, unloading etc., so you can decide if they are suitable for
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-12 rightSidebar side-bar">

                                    <div className="widget tw-contact-bg-section">
                                        <h4 className="section-head-small mb-4">Any Emergency?</h4>
                                        <div className="tw-contact-bg-inner" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/background/bg-4.jpg')` }}>
                                            <div className="section-top">
                                                <span>Call Our 24/7 Customer Support</span>
                                                <h3 className="tw-con-number"><a href="tel:77640-76100"> 77640-76100</a></h3>
                                            </div>
                                            <div className="section-bot">
                                                <ul>
                                                    <li>
                                                        <span><img src={process.env.PUBLIC_URL + `/assets/images/icons/map-marker.png`} alt="" /></span>
                                                        <p>India </p>
                                                    </li>
                                                    <li>
                                                        <span><img src={process.env.PUBLIC_URL + `/assets/images/icons/map-marker.png`} alt="" /></span>
                                                        <p>info@befikr.com</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                {/* <!-- OUR BLOG END -->           */}


            </div>
            {/* <!-- CONTENT END --> */}
        </div>
    );
}
