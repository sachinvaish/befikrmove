import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from './Slider';

export default function IndexPage(props) {


    useEffect(() => {
        document.title = `Befikrmove - ${props.title}`;
    }, [])

    const navigate = useNavigate();
    const getKey = () => {
        return ((Math.random()).toString());
    }

    useEffect(() => {
        // navigate(0);
    }, [])

    setTimeout(() => {
        navigate(0);
    }, 0);

    // console.log('public url is');
    // console.log(process.env.PUBLIC_URL);
    return (
        <>
            <div className="page-wraper" >
                {/* <!-- HEADER --> */}
                {/* <!-- CONTENT START --> */}
                <div className="page-content">

                    {/* <!-- Swiper --> */}
                    <Slider />
                    {/* <!-- Swiper --> */}

                    {/* <!-- BOOKING SECTIONhref START --> */}
                    <div className="section-full p-t120 p-b90 site-bg-gray tw-booking-area" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/background/bg-6.jpg')` }}>

                        <div className="container">
                            {/* <!-- TITLE START--> */}
                            <div className="section-head center wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <div>Request A Quote</div>
                                </div>
                                <h2 className="wt-title">Booking For Product Transformation</h2>

                            </div>
                            {/* <!-- TITLE END--> */}
                        </div>

                        <div className="container">
                            <div className="tw-booking-section">
                                <div className="row">


                                    <div className="col-xl-3 col-lg-3 col-md-12">
                                        <div className="tw-booking-media">
                                            <div className="media">
                                                <img src={process.env.PUBLIC_URL + `/assets/images/booking/pic1.png`} alt="#" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-9 col-lg-9 col-md-12">
                                        <div className="tw-booking-form">

                                            <div className="row booking-tab-container">
                                                <div className="col-lg-2 col-md-2 booking-tab-menu">
                                                    <div className="list-group">
                                                        <a href="#" className="list-group-item active text-center">
                                                            <div className="media">
                                                                <img src={process.env.PUBLIC_URL + `/assets/images/booking/icon1.png`} alt="" />
                                                            </div>
                                                            <span>Request A Quote</span>
                                                        </a>
                                                        {/* <!--<a href="#" className="list-group-item text-center">
                                                            <div className="media">
                                                                <img src={process.env.PUBLIC_URL+`/assets/images/booking/icon2.png" alt="">
                                                            </div>
                                                            <span>Track & Trace</span>
                                                        </a>--> */}

                                                    </div>
                                                </div>
                                                <div className="col-lg-10 col-md-10 booking-tab">
                                                    {/* <!-- flight section --> */}
                                                    <div className="booking-tab-content active">
                                                        <form>

                                                            <div className="row">

                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mb-3">
                                                                        <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mb-3">
                                                                        <input name="email" type="text" required className="form-control" placeholder="Email" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mb-3">
                                                                        <input name="phone" type="text" required className="form-control" placeholder="Phone" />
                                                                    </div>
                                                                </div>


                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mb-3">
                                                                        <select id="Freight_Type" className="form-select">
                                                                            <option >Service Type</option>
                                                                            <option>...</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mb-3">
                                                                        <input name="username" type="text" required className="form-control" placeholder="City Of Departure" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mb-3">
                                                                        <input name="username" type="text" required className="form-control" placeholder="Delivery City" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="tw-booking-footer">
                                                                        <div className="tw-booking-footer-btn">
                                                                            <button type="submit" className="btn-half site-button">
                                                                                <span>Submit Now</span><em></em>
                                                                            </button>
                                                                        </div>
                                                                        <span className="tw-booking-footer-text">Quote</span>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </form>
                                                    </div>
                                                    {/* <!-- train section --> */}
                                                    <div className="booking-tab-content">
                                                        <form className="track-and-trace-form">

                                                            <div className="row">

                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="mb-3">
                                                                        <select id="Shipment_Type" className="form-select">
                                                                            <option >Shipment Type</option>
                                                                            <option>Road</option>
                                                                            <option>Train</option>
                                                                            <option>Air</option>
                                                                            <option>Sea</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="mb-3">
                                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                                    </div>
                                                                </div>


                                                                <div className="col-lg-12">
                                                                    <div className="tw-inline-checked mt-2 mb-3">
                                                                        <div className="mb-4 form-check">
                                                                            <input type="checkbox" className="form-check-input" id="Fragile1" />
                                                                            <label className="form-check-label" htmlFor="Fragile1">Fragile</label>
                                                                        </div>

                                                                        <div className="mb-4 form-check">
                                                                            <input type="checkbox" className="form-check-input" id="Express2" />
                                                                            <label className="form-check-label" htmlFor="Express2">Express Delivery</label>
                                                                        </div>

                                                                        <div className="mb-4 form-check">
                                                                            <input type="checkbox" className="form-check-input" id="Insurance3" />
                                                                            <label className="form-check-label" htmlFor="Insurance3">Insurance</label>
                                                                        </div>

                                                                        <div className="mb-4 form-check">
                                                                            <input type="checkbox" className="form-check-input" id="packaging4" />
                                                                            <label className="form-check-label" htmlFor="packaging4">Packaging</label>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="tw-booking-footer">
                                                                        <div className="tw-booking-footer-btn">
                                                                            <button type="submit" className="btn-half site-button">
                                                                                <span>Track & Trace</span><em></em>
                                                                            </button>
                                                                        </div>
                                                                        <span className="tw-booking-footer-text">Trace</span>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </form>
                                                    </div>


                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- BOOKING SECTION END --> */}

                    {/* <!-- WHAT WE DO SECTION START --> */}
                    <div className="section-full p-t120 p-b90 site-bg-gray tw-what-wedo-area">

                        <div className="container">

                            {/* <!-- TITLE START--> */}
                            <div className="section-head center wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <div>What we do!</div>
                                </div>

                            </div>
                            {/* <!-- TITLE END--> */}

                            <div className="tw-what-wedo-section">

                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-12">
                                        <div className="tw-what-wedo-media">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/image-what-do.png`} alt="" />
                                        </div>
                                    </div>

                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="tw-service-icon-box-wrap">
                                            {/* <!-- COLUMNS 1 --> */}
                                            <div className="service-icon-box-two">

                                                <div className="service-icon-box-two-media">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/icons/packing.png`} alt="#" />
                                                </div>

                                                <div className="service-icon-box-title">
                                                    <h3 className="wt-title">
                                                        <a href="services-detail.html">
                                                            <span className="site-text-primary">01.</span>Packing</a>
                                                    </h3>

                                                </div>

                                            </div>

                                            {/* <!-- COLUMNS 2 --> */}
                                            <div className="service-icon-box-two">

                                                <div className="service-icon-box-two-media">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/icons/moving.png`} alt="#" />
                                                </div>

                                                <div className="service-icon-box-title">
                                                    <h3 className="wt-title">
                                                        <a href="services-detail.html">
                                                            <span className="site-text-primary">02.</span>Moving </a>
                                                    </h3>

                                                </div>

                                            </div>

                                            {/* <!-- COLUMNS 3 --> */}
                                            <div className="service-icon-box-two">

                                                <div className="service-icon-box-two-media">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/icons/loading.png`} alt="#" />
                                                </div>

                                                <div className="service-icon-box-title">
                                                    <h3 className="wt-title">
                                                        <a href="services-detail.html">
                                                            <span className="site-text-primary">03.</span>Loading</a>
                                                    </h3>

                                                </div>

                                            </div>
                                            {/* <!-- COLUMNS 3 --> */}
                                            <div className="service-icon-box-two">

                                                <div className="service-icon-box-two-media">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/icons/delivery.png`} alt="#" />
                                                </div>

                                                <div className="service-icon-box-title">
                                                    <h3 className="wt-title">
                                                        <a href="services-detail.html">
                                                            <span className="site-text-primary">04.</span>Delivery</a>
                                                    </h3>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* <!-- WHAT WE DO SECTION END --> */}

                    {/* <!-- WHAT WE DO SECTION START --> */}
                    <div className="section-full p-t120 p-b90 tw-what-wedo-area">

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 text-center mx-auto my-auto">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/befikr.png`} style={{ width: 100 % `!important` }} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-6 mx-auto my-auto">
                                    <p style={{ borderLeft: `40px solid #fff`, borderBottom: `40px solid #fff`, left: `-40px`, bottom: ` -40px`, height: `100%`, width: `100%`, zIndex: -1, boxShadow: `0px 40px 60px rgb(30 143 208 / 70%)`, padding: `20px` }}> When you choose Befikr Packers and Movers for your move, you will benefit from our friendly staff members, safe vehicles, and expertise in the moving industry. We offer a variety of services to make your move as stress-free and efficient as possible. From packing and unpacking services to complete relocate services, we can help make your move easier.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- WHY CHOOSE US SECTION START --> */}
                    <div className="section-full-wrap site-bg-gray tw-why-choose-area">
                        <div className="section-full p-t120 p-b120 tw-why-choose-area-top bg-contain bg-no-repeat" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/3.png')` }}>
                            <div className="container">

                                <div className="tw-why-choose-section">

                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="tw-why-choose-left">
                                                {/* <!-- TITLE START--> */}
                                                <div className="section-head left wt-small-separator-outer">
                                                    <div className="wt-small-separator site-text-primary">
                                                        <div>Why Choose Us</div>
                                                    </div>
                                                    <h2 className="wt-title">We Are Professional Packers Movers Agency</h2>
                                                </div>
                                                {/* <!-- TITLE END--> */}

                                                <p className="section-head-text">One of the most renowned moving companies in India is Befikrmove Professional Packers & Movers. With regional offices and trusted partners at more and more locations across India, we have a vast network. A dedicated support executive is assigned to you as soon as you share with us the specifics of your move. You can reach us anytime by calling our toll-free number 77640-76100, where our central support team is always ready to listen to your concerns and resolve them in a timely manner.</p>
                                                <div className="tw-why-choose-left-bottom">
                                                    <a href="about-1.html" className="btn-half site-button"><span>Learn More</span><em></em></a>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="tw-why-choose-right">
                                                <div className="tw-why-choose-media1 shine-effect">
                                                    <div className="shine-box">
                                                        <img src={process.env.PUBLIC_URL + `/assets/images/cheerful-delivery-man-with-parcels.jpg`} alt="" />
                                                    </div>
                                                </div>
                                                <div className="tw-why-choose-media2 slide-top shine-effect">
                                                    <div className="shine-box">
                                                        <img src={process.env.PUBLIC_URL + `/assets/images/img-boy.png`} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tw-hilite-text-wrap2">
                                        <div className="tw-hilite-text">
                                            <span>Befikrmove</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!--<div className="tw-any-help-section">
                            <div className="container">
                                <div className="tw-any-help-inner">
                                    <img src={process.env.PUBLIC_URL+`/assets/images/w-choose/qt-icon.png" alt="">
                                        <span className="tw-24">24/7 Active Suport Team</span>
                                        <span className="tw-help-title">Need Immediate Support Or Any Help?</span>
                                        <span className="tw-help-number">(77640-76100)</span>
                                </div>
                            </div>
                        </div>--> */}

                    </div>
                    {/* <!-- WHY CHOOSE US SECTION END --> */}


                    {/* <!-- TESTIMONIALS SECTION START --> */}
                    <div className="section-full bg-cover p-t120 p-b90 bg-cover tw-testimonial-1-area" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/background/bg-6.jpg')` }}>
                        <div className="tw-testimonial-inner-wrap">
                            <div className="container">
                                <div className="row">

                                    <div className="col-xl-6 col-lg-12 col-md-12">
                                        <div className="tw-client-logo-wrap">
                                            {/* <!-- TITLE START--> */}
                                            <div className="section-head left wt-small-separator-outer">
                                                <div className="wt-small-separator site-text-primary">
                                                    <div>Respected</div>
                                                </div>
                                                <h2 className="wt-title">Clients & partners</h2>
                                            </div>
                                            {/* <!-- TITLE END--> */}
                                            <div className="tw-client-logo-inner">
                                                <ul>
                                                    <li>
                                                        <div className="logo-media">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/yes-bank.png`} alt="" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="logo-media">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/uco-bank.png`} alt="" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="logo-media">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/union.png`} alt="" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="logo-media">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/allahabaad.png`} alt="" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="logo-media">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/sbi.png`} alt="" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="logo-media">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/pnb.png`} alt="" />
                                                        </div>
                                                    </li>

                                                </ul>
                                                <div className="truck-img">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/truck.png`} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tw-client-logo-bg"></div>
                                    </div>

                                    <div className="col-xl-6 col-lg-12 col-md-12">
                                        <div className="tw-testimonial-border-outer">
                                            <div className="slider-vertical-wrap">
                                                {/* <!-- THUMBNAILS --> */}
                                                <div className="slick-testimonials-thumbnails">

                                                    <div className="slick-item">
                                                        <div className="slick-testimonials-thumb">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/testimonials/pic1.jpg`} alt="one" />
                                                        </div>
                                                    </div>
                                                    <div className="slick-item">
                                                        <div className="slick-testimonials-thumb">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/testimonials/pic2.jpg`} alt="two" />
                                                        </div>
                                                    </div>

                                                    <div className="slick-item">
                                                        <div className="slick-testimonials-thumb">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/testimonials/pic4.jpg`} alt="four" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- MAIN SLIDES --> */}
                                                <div className="slick-testimonials-content">
                                                    <div className="slick-item">
                                                        <div className="tw-testimonials1-cell">
                                                            <div className="tw-testimonials1-text">
                                                                <span className="tw-testimonials1-quote"><img src={process.env.PUBLIC_URL + `/assets/images/quote.png`} alt="" /></span>
                                                                We used befikr Packers and Movers services for local shifting recently. They provided professional service and packed our household items carefully. Loading and unloading was done diligently. Mr went out of his way to meet our needs, including disassembling/assembling the utility door for installing our washing machine as the space was congested. It was indeed very helpful. best packers And movers in India
                                                                I highly recommend their services to others
                                                            </div>
                                                            <div className="tw-testimonials1-name">Ravi solanki</div>

                                                        </div>
                                                    </div>
                                                    <div className="slick-item">
                                                        <div className="tw-testimonials1-cell">
                                                            <div className="tw-testimonials1-text">
                                                                <span className="tw-testimonials1-quote"><img src={process.env.PUBLIC_URL + `/assets/images/quote.png`} alt="" /></span>
                                                                It was a wonderful experience with Befikr packers and movers. They are very professional and punctual. I am impressed with their dedication of work and loyalty. The packing was very smooth. best service in india . Keep it up. Highly Recommend......
                                                            </div>
                                                            <div className="tw-testimonials1-name">Purvi sharma</div>
                                                            <div className="tw-testimonials1-postion">Developer</div>
                                                        </div>
                                                    </div>

                                                    <div className="slick-item">
                                                        <div className="tw-testimonials1-cell">
                                                            <div className="tw-testimonials1-text">
                                                                <span className="tw-testimonials1-quote"><img src={process.env.PUBLIC_URL + `/assets/images/quote.png`} alt="" /></span>
                                                                Befikr packers and movers. transport service is best ..my luggage was sent..from Chandigarh to goa by befikr packers and movers in very good condition ..it giving .high priority service. there was no.. breakdown of..any item..in transporting the luggage..I only recommend befikr packers and movers for transport.
                                                            </div>
                                                            <div className="tw-testimonials1-name">Kunal</div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tw-testimonial-border"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- TESTIMONIALS  SECTION End --> */}

                    {/* <!-- SERVICES SECTION START --> */}
                    <div className="section-full p-t120 p-b90 site-bg-gray tw-service-gallery-style1-area tyre-mark-bg">

                        <div className="services-gallery-block-outer2">
                            <div className="container">

                                {/* <!-- TITLE START--> */}
                                <div className="section-head center wt-small-separator-outer">
                                    <div className="wt-small-separator site-text-primary">
                                        <div>All services</div>
                                    </div>
                                    <h2 className="wt-title">Trusted For Our Services</h2>
                                </div>
                                {/* <!-- TITLE END--> */}

                                <div className="section-content">
                                    <div className="services-gallery-style1">
                                        <div className="owl-carousel services-gallery-one owl-btn-bottom-center ">

                                            {/* <!-- COLUMNS 1 --> */}
                                            <div className="item">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><Link to={'/household-shifting-services'}>Household Shifting Services</Link></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">01</span>
                                                                <p>Before registering any Household Shifting Services businesses with Befikrmove, we do a thorough background check of them. We link only recognized and trusted Indian house shifting service providers.</p>
                                                                <Link to={'/household-shifting-services'} className="site-button-2">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL + `/assets/images/house-shifting.jpg`} alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 2 --> */}
                                            <div className="item">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><Link to={'/office-shifting-services'}>Office Shifting Services</Link></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">02</span>
                                                                <p>We provide hassle-free, high-quality loaded office shifting services at extremely reasonable moving costs.</p>
                                                                <Link to={'/office-shifting-services'} className="site-button-2">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL + `/assets/images/office-shifting.jpg`} alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 3 --> */}
                                            <div className="item">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><Link to={'/industrial-shifting-services'}>Industrial Shifting Services</Link></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">03</span>
                                                                <p>The more objects that have to be moved, the more difficult the process.</p>
                                                                <Link to={'/industrial-shifting-services'} className="site-button-2">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL + `/assets/images/industrial-shifting.jpg`} alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 4 --> */}
                                            <div className="item">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><Link to={'/car-carrier-services'}>Car Carrier Services</Link></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">04</span>
                                                                <p>Befikramove is one of the top-ranked Car Carrier Services companies in India, thanks to its years of expertise, highly competent and qualified moving staff, and numerous satisfied customers.</p>
                                                                <Link to={'/car-carrier-services'} className="site-button-2">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL + `/assets/images/car-shifting.jpg`} alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 5 --> */}
                                            <div className="item">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><Link to={'/warehouse-services'}>Warehouse storage services</Link></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">05</span>
                                                                <p>Warehousing and storage services provide storage for the parts, machinery, automobiles, goods, and perishable goods of another business or organization.</p>
                                                                <Link to={'/warehouse-services'} className="site-button-2">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL + `/assets/images/warehouse-services.jpg`} alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 6 --> */}
                                            <div className="item">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><Link to={'/loading-unloading-services'}>Loading and Unloading Services</Link></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">06</span>
                                                                <p>Our team, owing to their vast experience, knows how to do things the right way, which will come in handy in restricted spaces and manage your household items in tight spaces.</p>
                                                                <Link to={'/loading-unloading-services'} className="site-button-2">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL + `/assets/images/loading-unloading.jpg`} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- COLUMNS 6 --> */}
                                            <div className="item">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><Link to={'/relocation-services'}>Relocation Services</Link></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">07</span>
                                                                <p>To facilitate safe and easy relocation, Befikrmove Relocation Services remains loyal to its primary focus: the client.</p>
                                                                <Link to={'/relocation-services'} className="site-button-2">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL + `/assets/images/relocation-services.jpg`} alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 6 --> */}
                                            <div className="item">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><Link to={'/packing-moving-services'}>Packing and Moving Services</Link></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">08</span>
                                                                <p>Most reputed packers and movers in India are available through Befikramove, and they have a professional understanding of packing and moving goods.</p>
                                                                <Link to={'/packing-moving-services'} className="site-button-2">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL + `/assets/images/packing-moving.jpg`} alt="" />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tw-hilite-text-wrap">
                            <div className="tw-hilite-text right">
                                <span>Services</span>
                            </div>
                        </div>

                    </div>
                    {/* <!-- SERVICES SECTION END --> */}

                    {/* <!-- COMPANY APPROCH SECTION START --> */}
                    <div className="section-full p-t120 p-b90 site-bg-white tw-company-approch-area">

                        <div className="container">

                            <div className="tw-company-approch-section">
                                <div className="tw-company-approch-inner">
                                    <div className="tw-company-years">
                                        <div className="light">
                                            <h1>35</h1>
                                            <img src={process.env.PUBLIC_URL + `/assets/images/text-bg.jpg`} alt="" />
                                        </div>
                                        <div className="tw-company-info">
                                            <span>Year’s of experience in Packing Moving services</span>
                                        </div>
                                    </div>

                                    <div className="row">

                                        {/* <!--block 1--> */}
                                        <div className="col-lg-4 col-md-12">
                                            <div className="counter-outer-two">
                                                <div className="tw-counter-media">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/icons/c-pic1.png`} alt="" />
                                                </div>
                                                <div className="icon-content">
                                                    <div className="tw-count-number site-text-primary"><span className="counter site-text-primary">195</span>+</div>
                                                    <h3 className="icon-content-info">Professional Staff</h3>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--block 2--> */}
                                        <div className="col-lg-4 col-md-12">
                                            <div className="counter-outer-two">
                                                <div className="tw-counter-media">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/icons/c-pic2.png`} alt="" />
                                                </div>
                                                <div className="icon-content">
                                                    <div className="tw-count-number site-text-primary"><span className="counter site-text-primary">250</span>+</div>
                                                    <h3 className="icon-content-info">On Time Delievery</h3>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--block 3--> */}
                                        <div className="col-lg-4 col-md-12">
                                            <div className="counter-outer-two">
                                                <div className="tw-counter-media">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/icons/c-pic3.png`} alt="" />
                                                </div>
                                                <div className="icon-content">
                                                    <div className="tw-count-number site-text-primary"><span className="counter site-text-primary">350</span>+</div>
                                                    <h3 className="icon-content-info">Technology and Media</h3>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- COMPANY APPROCH SECTION END --> */}

                    {/* <!-- OUR BLOG START --> */}
                    <div className="section-full p-t120 p-b90 site-bg-gray bg-cover">
                        <div className="container">

                            {/* <!-- TITLE START--> */}
                            <div className="section-head center wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <div>Our Blogs</div>
                                </div>
                                <h2 className="wt-title">Recent news & events</h2>
                            </div>
                            {/* <!-- TITLE END--> */}


                            <div className="section-content">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        {/* <!--Block one--> */}
                                        <div className="blog-post blog-post-4-outer">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <Link to="/blog/1"><img src={process.env.PUBLIC_URL + `/assets/images/blog1.png`} alt=""/></Link>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-date"><span>02</span>Aug</li>
                                                    </ul>
                                                </div>

                                                <div className="wt-post-title ">
                                                    <h3 className="post-title"><a href="blog-single.html">5 Important Factors To Consider When Choosing The Best Packers And Movers In India</a></h3>
                                                </div>

                                                <div className="wt-post-readmore ">
                                                    <Link to="/blog/1" className="site-button-link site-text-primary">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        {/* <!--Block two--> */}
                                        <div className="blog-post blog-post-4-outer">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <Link to="/blog/2"><img src={process.env.PUBLIC_URL + `/assets/images/blog2.png`} alt=""/></Link>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-date"><span>08</span> Aug</li>
                                                    </ul>
                                                </div>

                                                <div className="wt-post-title ">
                                                    <h3 className="post-title"><a href="blog-single.html">How To Find The Right Packers And Movers For Your Needs</a></h3>
                                                </div>

                                                <div className="wt-post-readmore ">
                                                    <Link to="/blog/2" className="site-button-link site-text-primary">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        {/* <!--Block three--> */}
                                        <div className="blog-post blog-post-4-outer">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <Link to="/blog/3"><img src={process.env.PUBLIC_URL + `/assets/images/blog3.png`} alt=""/></Link>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-date"><span>21</span> Aug</li>
                                                    </ul>
                                                </div>

                                                <div className="wt-post-title ">
                                                    <h3 className="post-title"><a href="blog-single.html">The Benefits Of Hiring Professional Packers And Movers In India</a></h3>
                                                </div>

                                                <div className="wt-post-readmore ">
                                                    <Link to="/blog/3" className="site-button-link site-text-primary">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- OUR BLOG END --> */}

                </div>
                {/* <!-- CONTENT END --> */}

            </div>
        </>
    );
}
