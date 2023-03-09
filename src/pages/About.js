import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {

    useEffect(() => {
        document.title = `Befikrmove - ${props.title}`;
    }, [])

    return (
        <div className="page-content">

            <div className="page-content">

                {/* <!-- INNER PAGE BANNER --> */}
                <div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg')`}}>
                    <div className="overlay-main site-bg-sky opacity-08"></div>
                    <div className="container">
                        <div className="wt-bnr-inr-entry">
                            <div className="banner-title-outer">
                                <div className="banner-title-name">
                                    <h2 className="wt-title">About Us</h2>
                                </div>
                            </div>
                            {/* <!-- BREADCRUMB ROW --> */}

                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li><Link to="/">Home</Link></li>
                                    <li>About Us</li>
                                </ul>
                            </div>

                            {/* <!-- BREADCRUMB ROW END --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- INNER PAGE BANNER END --> */}

                {/* <!-- WHAT WE DO SECTION START --> */}
                <div className="section-full p-t120 p-b90 site-bg-gray tw-what-wedo-area">

                    <div className="container">

                        {/* <!-- TITLE START--> */}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div>About Us!</div>
                            </div>

                        </div>
                        {/* <!-- TITLE END--> */}

                        <div className="tw-what-wedo-section">

                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12">
                                    <div className="tw-what-wedo-media">
                                        <img src={process.env.PUBLIC_URL+`/assets/images/image-what-do.png`} alt=""/>
                                    </div>
                                </div>

                                <div className="col-xl-7 col-lg-7 col-md-12">
                                    <div className="tw-service-icon-box-wrap">
                                        <h3>Get to Know Us - Befikrmove Packers and Movers</h3>
                                        <p>Are you in need of reliable Packers & Movers services? Get to know us - Befikrmove Packers and Movers. We provide safe, secure and trustworthy services for a stress-free relocation experience.</p>
                                        <p>
                                            At Befikrmove Packers and Movers, we provide safe and reliable solutions for your packing and moving needs. With our experienced team, top-notch safety standards, and commitment to customer satisfaction, you can trust us with your belongings so that you can have a stress-free relocation experience.
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* <!-- WHAT WE DO SECTION END --> */}

                {/* <!-- WE ACHIVED SECTION START --> */}
                <div className="section-full site-bg-dark tw-we-achived p-t90 p-b90">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div style={{color:'#fff'}} className="wt-small-separator site-text-primary">
                                    <div>Overview of Befikrmove <br/>Packers & Movers</div></div>
                                <br/>
                                    <p style={{color:'#fff'}}>Befikrmove Packers and Movers is one of the leading services providers in India, providing complete one-stop solutions for all your packing and moving needs. Our team comprises of experienced professionals with years of expertise in packing and loading goods securely, transporting them safely, and setting up your home or office during relocation. We strive to provide excellent service that exceeds expectations, with utmost care and attention given to our customers' belongings.</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- WE ACHIVED SECTION END --> */}

                {/* <!-- TESTIMONIALS SECTION START --> */}
                <div className="section-full bg-cover p-t120 p-b90 bg-cover tw-testimonial-1-area" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/background/bg-6.jpg')`}}>
                    <div className="tw-testimonial-inner-wrap">
                        <div className="container">
                            <div className="row">

                                <div className="col-xl-6 col-lg-12 col-md-12">
                                    <div className="tw-client-logo-wrap">
                                        {/* <!-- TITLE START--> */}
                                        <div className="section-head left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div>Our Services and Benefits</div>
                                            </div>
                                            <p>
                                                At Befikrmove Packers and Movers, our aim is to provide the best experience for our customers. We offer a wide range of services such as full service packing & moving, loading & unloading of goods safely, removals and storage services. We also provide a huge range of added benefits such as insurance coverage, GPS tracking and online support in order to ensure that the relocation process goes smoothly. Our experienced team works hard to make sure that all your needs are met with precision and care.
                                            </p>
                                        </div>

                                    </div>
                                    <div className="tw-client-logo-bg"></div>
                                </div>

                                <div className="col-xl-6 col-lg-12 col-md-12 text-center">
                                    <img src={process.env.PUBLIC_URL+`/assets/images/services-emotion.png`} style={{height:'600px'}} alt=""/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- TESTIMONIALS  SECTION End --> */}



                {/* <!-- COMPANY APPROCH SECTION START --> */}
                <div className="section-full p-t120 p-b90 site-bg-white tw-company-approch-area">

                    <div className="container">

                        <div className="wt-separator-two-part">
                            <div className="row wt-separator-two-part-row">
                                <div className="col-xl-12 col-lg-12 col-md-12 wt-separator-two-part-left">
                                    {/* <!-- TITLE START--> */}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div>Why Choose Befikrmove for Your Relocation Needs?</div>
                                        </div>

                                    </div>
                                    {/* <!-- TITLE END--> */}
                                    <p>
                                        We understand that a relocation can be a stressful time. That’s why at Befikrmove we go above and beyond to ensure your move is as comfortable as possible. With our wide range of services designed to meet your every need, we make sure you are taken care of every step of the way. From packing and disinfecting all items, to providing secure transportation and unpacking services, you can count on us for an efficient and stress-free relocation experience.
                                    </p>
                                </div>

                            </div>
                        </div>


                        <div className="tw-company-approch-section">
                            <div className="tw-company-approch-inner">
                                <div className="tw-company-years">

                                    <div className="tw-company-info">
                                        <span>How Can I Contact Befikrmove Packers And Movers to Plan My Move?</span>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* <!--block 1--> */}
                                    <div className="col-lg-12 col-md-12">
                                        <p>
                                            At Befikrmove Packers and Movers, we’re committed to providing you with a worry-free moving experience. For any questions or to start planning your move, simply go to our website www.befikr.com and fill out the contact form or give us a call at +91-77640-76100 and one of our friendly staff members will be happy to help! We look forward to helping make your move as stress free as possible.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- COMPANY APPROCH SECTION END --> */}


            </div>


        </div>
    );
}
