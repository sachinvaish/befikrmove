import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog3() {
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
                                    <li>The Benefits Of Hiring Professional Packers And Movers In India</li>
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
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/blog3.png`} alt="" />
                                                </div>
                                                <div className="wt-post-title ">
                                                    <h3 className="post-title">The Benefits Of Hiring Professional Packers And Movers In India</h3>
                                                </div>
                                                <div className="wt-post-discription">
                                                    <p>
                                                    Hiring professional packers & movers can be a great way to ensure your move runs as smoothly and stress-free as possible. “Befikr Move” Professional packers & movers in India have the experience, skills and resources to make sure that your move is carried out quickly, safely and efficiently. With years of experience in providing relocation services, they are well-equipped to handle the stress involved in relocating. They also provide valuable advice on how to plan and execute a successful move. By hiring professional packers & movers in India, you can save yourself time and money while ensuring a safe transition from one location to another.
                                                    </p>
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
