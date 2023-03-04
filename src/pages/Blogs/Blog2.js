import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog2() {
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
                                    <li>How To Find The Right Packers And Movers For Your Needs</li>
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
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/blog2.png`} alt="" />
                                                </div>
                                                <div className="wt-post-title ">
                                                    <h3 className="post-title">How To Find The Right Packers And Movers For Your Needs</h3>
                                                </div>
                                                <div className="wt-post-discription">
                                                    <p>
                                                        Moving can be a stressful time, and finding the right packers and movers to help you with your move is essential. Fortunately, there are some key steps you can take to ensure that you find the right mover for your needs.
                                                        First, it's important to do your research. Look online for reviews of packers and movers companies in your area. Check out customer feedback on their websites or social media pages, as well as any ratings they may have received from other customers. This will give you an idea of how reliable the company is and what kind of service they provide. Additionally, make sure that the company is insured and licensed if required in your area.
                                                        By researching thoroughly beforehand, you'll be able to find the right packers and movers for your needs with ease.
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
