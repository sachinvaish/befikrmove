import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function IndexPage() {

    const [key, setKey] = useState(Math.random());
    const navigate = useNavigate();

    useEffect(() => {
      setKey(Math.random())
      console.log('key=',key)
    }, []);
    // console.log('public url is');
    // console.log(process.env.PUBLIC_URL);
    return (
        <>
            <div className="page-wraper" >
                {/* <!-- HEADER --> */}
                {/* <!-- CONTENT START --> */}
                <div className="page-content">

                    {/* <!-- Swiper --> */}
                    <div className="twm-slider1-wrap"  >

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
                                                <button onClick={()=>navigate('/services')} className="h-bnr-btn">View Services</button>
                                            </div>

                                        </div>
                                        <div className="h-banner-right"  >
                                            <div className="h-bnr-r-inner">
                                                <div className="h-bnr-media">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/main-slider/slider1/plane.png`} alt="#" className="slide-top"/>
                                                </div>
                                                <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/main-slider/slider1/bg1.jpg')`}} >
                                            
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cross-line-box left up-down"><img src={process.env.PUBLIC_URL+`/assets/images/main-slider/slider1/cross-line-box.png`} alt="#"/></div>
                                        <div className="cross-line-box right up-down"><img src={process.env.PUBLIC_URL+`/assets/images/main-slider/slider1/cross-line-box.png`} alt="#"/></div>
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
                                                <button onClick={()=>navigate('/services')} className="h-bnr-btn">View Services</button>
                                            </div>

                                        </div>
                                        <div className="h-banner-right" >
                                            <div className="h-bnr-r-inner">
                                                <div className="h-bnr-media">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/main-slider/slider1/truck.png`} alt="#" className="slide-top"/>
                                                </div>
                                                <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/main-slider/slider1/bg2.jpg')`}}>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="cross-line-box left up-down"><img src={process.env.PUBLIC_URL+`/assets/images/main-slider/slider1/cross-line-box.png`} alt="#"/></div>
                                        <div className="cross-line-box right up-down"><img src={process.env.PUBLIC_URL+`/assets/images/main-slider/slider1/cross-line-box.png`} alt="#"/></div>
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
                                                <button onClick={()=>navigate('/services')} className="h-bnr-btn">View Services</button>
                                            </div>

                                        </div>
                                        <div className="h-banner-right">
                                            <div className="h-bnr-r-inner">
                                                <div className="h-bnr-media">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/main-slider/slider1/ship.png`} alt="#" className="slide-top"/>
                                                </div>
                                                <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/main-slider/slider1/bg3.jpg')`}} >

                                                </div>
                                            </div>
                                        </div>
                                        <div className="cross-line-box left up-down"><img src={process.env.PUBLIC_URL+`/assets/images/main-slider/slider1/cross-line-box.png`} alt="#"/></div>
                                        <div className="cross-line-box right up-down"><img src={process.env.PUBLIC_URL+`/assets/images/main-slider/slider1/cross-line-box.png`} alt="#"/></div>
                                        <div className="circle-left-top zoon-in-out"></div>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-pagination"> </div>
                        </div>

                    </div>
                    {/* <!-- Swiper --> */}


                    {/* <!-- WHAT WE DO SECTION START --> */}
                    <div className="section-full p-t120 p-b90 site-bg-gray tw-what-wedo-area">

                        <div className="container">

                            {/* <!-- TITLE START--> */}
                            <div className="section-head center wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <div>What we do!</div>
                                </div>
                                <h2 className="wt-title">Specialist Logistics Services</h2>
                                <p className="section-head-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the  when an printer took.</p>
                            </div>
                            {/* <!-- TITLE END--> */}

                            <div className="tw-what-wedo-section">

                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-12">
                                        <div className="tw-what-wedo-media">
                                            <img src={process.env.PUBLIC_URL+`/assets/images/icons/img1.png`} alt=""/>
                                        </div>
                                    </div>

                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="tw-service-icon-box-wrap">
                                            {/* <!-- COLUMNS 1 --> */}
                                            <div className="service-icon-box-two">

                                                <div className="service-icon-box-two-media">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/icons/pic1.png`} alt="#"/>
                                                </div>

                                                <div className="service-icon-box-title">
                                                    <h3 className="wt-title">
                                                        <a href="services-detail.html">
                                                            <span className="site-text-primary">01.</span>Road Freight</a>
                                                    </h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit, sed do eiusmod tempor incididunt </p>
                                                </div>

                                            </div>

                                            {/* <!-- COLUMNS 2 --> */}
                                            <div className="service-icon-box-two">

                                                <div className="service-icon-box-two-media">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/icons/pic2.png`} alt="#"/>
                                                </div>

                                                <div className="service-icon-box-title">
                                                    <h3 className="wt-title">
                                                        <a href="services-detail.html">
                                                            <span className="site-text-primary">02.</span>Shipping Freight</a>
                                                    </h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit, sed do eiusmod tempor incididunt </p>
                                                </div>

                                            </div>

                                            {/* <!-- COLUMNS 3 --> */}
                                            <div className="service-icon-box-two">

                                                <div className="service-icon-box-two-media">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/icons/pic3.png`} alt="#"/>
                                                </div>

                                                <div className="service-icon-box-title">
                                                    <h3 className="wt-title">
                                                        <a href="services-detail.html">
                                                            <span className="site-text-primary">03.</span>Air Freight</a>
                                                    </h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit, sed do eiusmod tempor incididunt </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* <!-- WHAT WE DO SECTION END --> */}

                    {/* <!-- WHY CHOOSE US SECTION START --> */}
                    <div className="section-full-wrap site-bg-gray tw-why-choose-area">
                        <div className="section-full p-t120 p-b120 tw-why-choose-area-top bg-cover bg-no-repeat" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/background/bg-1.jpg')`}}>
                            <div className="container">

                                <div className="tw-why-choose-section">

                                    <div className="row">
                                        <div className="col-xl-5 col-lg-5 col-md-12">
                                            <div className="tw-why-choose-left">
                                                {/* <!-- TITLE START--> */}
                                                <div className="section-head left wt-small-separator-outer">
                                                    <div className="wt-small-separator site-text-primary">
                                                        <div>Why Choose Us</div>
                                                    </div>
                                                    <h2 className="wt-title">We Are Professional Logistics & cargo Agency</h2>
                                                </div>
                                                {/* <!-- TITLE END--> */}
                                                <strong>Sed ut perspiciatis unde omnis iste natus error volup tatem accusantium dolorem que laudantium, totam rem aperiam, eaque ipsa illo inventore.</strong>
                                                <p className="section-head-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiam, que ipsa quae ab illo inventore veritatis quasi architecto beatae itae dicta sunt explicabo. Nemo enim ipsam voluptate voluptas sitr atur aut odit aut fugit, sed quia consequuntur magni dolores is eos qui ratione voluptatem sequi nesciunt. </p>
                                                <div className="tw-why-choose-left-bottom">
                                                    <a href="about-1.html" className="btn-half site-button"><span>Learn More</span><em></em></a>
                                                    <div className="sign-font">
                                                        <span>Signature</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-7 col-lg-7 col-md-12">
                                            <div className="tw-why-choose-right">
                                                <div className="tw-why-choose-media1 shine-effect">
                                                    <div className="shine-box">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/w-choose/pic1.jpg`} alt="" />
                                                    </div>
                                                </div>
                                                <div className="tw-why-choose-media2 slide-top shine-effect">
                                                    <div className="shine-box">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/w-choose/pic2.jpg`} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tw-hilite-text-wrap2">
                                        <div className="tw-hilite-text">
                                            <span>Logistics</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tw-any-help-section">
                            <div className="container">
                                <div className="tw-any-help-inner">
                                    <img src={process.env.PUBLIC_URL+`/assets/images/w-choose/qt-icon.png`} alt=""/>
                                        <span className="tw-24">24/7 Active Suport Team</span>
                                        <span className="tw-help-title">Need Immediate Support Or Any Help?</span>
                                        <span className="tw-help-number">(2 900 234 4241)</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- WHY CHOOSE US SECTION END --> */}

                    {/* <!-- BOOKING SECTION START --> */}
                    <div className="section-full p-t120 p-b90 site-bg-gray tw-booking-area" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/booking/bg-map.png')`}} >

                        <div className="container">
                            {/* <!-- TITLE START--> */}
                            <div className="section-head center wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <div>Request A Quote</div>
                                </div>
                                <h2 className="wt-title">Booking For Product Transformation</h2>
                                <p className="section-head-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the  when an printer took.</p>
                            </div>
                            {/* <!-- TITLE END--> */}
                        </div>

                        <div className="container">
                            <div className="tw-booking-section">
                                <div className="row">


                                    <div className="col-xl-3 col-lg-3 col-md-12">
                                        <div className="tw-booking-media">
                                            <div className="media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/booking/pic1.png`} alt="#"/>
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
                                                                <img src={process.env.PUBLIC_URL+`/assets/images/booking/icon1.png`} alt=""/>
                                                            </div>
                                                            <span>Request A Quote</span>
                                                        </a>
                                                        <a href="#" className="list-group-item text-center">
                                                            <div className="media">
                                                                <img src={process.env.PUBLIC_URL+`/assets/images/booking/icon2.png`} alt=""/>
                                                            </div>
                                                            <span>Track & Trace</span>
                                                        </a>

                                                    </div>
                                                </div>
                                                <div className="col-lg-10 col-md-10 booking-tab">
                                                    {/* <!-- flight section --> */}
                                                    <div className="booking-tab-content active">
                                                        <form>

                                                            <div className="row">

                                                                <div className="col-lg-4 col-md-4">
                                                                    <div className="mb-3">
                                                                        <input name="username" type="text" required className="form-control" placeholder="Name"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4">
                                                                    <div className="mb-3">
                                                                        <input name="email" type="text" required className="form-control" placeholder="Email"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4">
                                                                    <div className="mb-3">
                                                                        <input name="phone" type="text" required className="form-control" placeholder="Phone"/>
                                                                    </div>
                                                                </div>


                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mb-3">
                                                                        <select id="Freight_Type" className="form-select">
                                                                            <option >Freight Type</option>
                                                                            <option>...</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mb-3">
                                                                        <input name="username" type="text" required className="form-control" placeholder="City Of Departure"/>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mb-3">
                                                                        <input name="username" type="text" required className="form-control" placeholder="Delivery City"/>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mb-3">
                                                                        <select id="Incoterms" className="form-select">
                                                                            <option >Incoterms</option>
                                                                            <option>...</option>
                                                                        </select>
                                                                    </div>
                                                                </div>


                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="mb-3">
                                                                        <input name="username" type="text" required className="form-control" placeholder="Weight"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="mb-3">
                                                                        <input name="email" type="text" required className="form-control" placeholder="Height"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="mb-3">
                                                                        <input name="phone" type="text" required className="form-control" placeholder="Width"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="mb-3">
                                                                        <input name="phone" type="text" required className="form-control" placeholder="Length"/>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12">
                                                                    <div className="tw-inline-checked mt-2 mb-3">
                                                                        <div className="mb-4 form-check">
                                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                                                <label className="form-check-label" htmlFor="exampleCheck1">Fragile</label>
                                                                        </div>

                                                                        <div className="mb-4 form-check">
                                                                            <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                                                                                <label className="form-check-label" htmlFor="exampleCheck2">Express Delivery</label>
                                                                        </div>

                                                                        <div className="mb-4 form-check">
                                                                            <input type="checkbox" className="form-check-input" id="exampleCheck3"/>
                                                                                <label className="form-check-label" htmlFor="exampleCheck3">Insurance</label>
                                                                        </div>

                                                                        <div className="mb-4 form-check">
                                                                            <input type="checkbox" className="form-check-input" id="exampleCheck4"/>
                                                                                <label className="form-check-label" htmlFor="exampleCheck4">Packaging</label>
                                                                        </div>
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
                                                                            <input type="checkbox" className="form-check-input" id="Fragile1"/>
                                                                                <label className="form-check-label" htmlFor="Fragile1">Fragile</label>
                                                                        </div>

                                                                        <div className="mb-4 form-check">
                                                                            <input type="checkbox" className="form-check-input" id="Express2"/>
                                                                                <label className="form-check-label" htmlFor="Express2">Express Delivery</label>
                                                                        </div>

                                                                        <div className="mb-4 form-check">
                                                                            <input type="checkbox" className="form-check-input" id="Insurance3"/>
                                                                                <label className="form-check-label" htmlFor="Insurance3">Insurance</label>
                                                                        </div>

                                                                        <div className="mb-4 form-check">
                                                                            <input type="checkbox" className="form-check-input" id="packaging4"/>
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

                    {/* <!-- Estimation SECTION START --> */}
                    <div className="section-full p-t120 site-bg-white  tw-estimation-area">

                        <div className="container">

                            <div className="wt-separator-two-part">
                                <div className="row wt-separator-two-part-row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-left">
                                        {/* <!-- TITLE START--> */}
                                        <div className="section-head left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div>Estimation</div>
                                            </div>
                                            <h2 className="wt-title">Has a wide range of solutions</h2>
                                            <p className="section-head-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the  when an printer took.</p>
                                        </div>
                                        {/* <!-- TITLE END--> */}
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right text-right">
                                        <a href="about-1.html" className="btn-half site-button"><span>Read More</span><em></em></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tw-estimation-section bg-cover bg-no-repeat" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/background/bg-2.jpg')`}}>
                            <div className="container">
                                <div className="row">
                                    {/* <!--1--> */}
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="tw-est-section-block">
                                            <div className="tw-est-section-block-content">
                                                <span className="tw-est-section-number">01</span>
                                                <h3 className="tw-title">Solutions and specialized expertise</h3>
                                                <p>Our aim is to optimize and improve your supply chain so that we can give you the best service</p>
                                                <a href="about-1.html" className="site-button-2-outline"><i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--2--> */}
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="tw-est-section-block">
                                            <div className="tw-est-section-block-content">
                                                <span className="tw-est-section-number">02</span>
                                                <h3 className="tw-title">Multiple warehouses</h3>
                                                <p>We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind...</p>
                                                <a href="about-1.html" className="site-button-2-outline"><i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--3--> */}
                                    <div className="col-xl-4 col-lg-4 col-md-12">
                                        <div className="tw-est-section-block">
                                            <div className="tw-est-section-block-content">
                                                <span className="tw-est-section-number">03</span>
                                                <h3 className="tw-title">Tracking made easy</h3>
                                                <p>A tracking number for the entire process.
                                                    so that you can find the exact position. it
                                                    will help you</p>
                                                <a href="about-1.html" className="site-button-2-outline"><i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
                    {/* <!-- Estimation SECTION END --> */}

                    {/* <!-- TESTIMONIALS SECTION START --> */}
                    <div className="section-full bg-cover p-t120 p-b90 bg-cover tw-testimonial-1-area" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/background/bg-6.jpg')`}} >
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
                                                            <a href="services-1.html"><img src={process.env.PUBLIC_URL+`/assets/images/client-logo/w1.png`} alt=""/></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="logo-media">
                                                            <a href="services-1.html"><img src={process.env.PUBLIC_URL+`/assets/images/client-logo/w2.png`} alt=""/></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="logo-media">
                                                            <a href="services-1.html"><img src={process.env.PUBLIC_URL+`/assets/images/client-logo/w3.png`} alt=""/></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="logo-media">
                                                            <a href="services-1.html"><img src={process.env.PUBLIC_URL+`/assets/images/client-logo/w4.png`} alt=""/></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="logo-media">
                                                            <a href="services-1.html"><img src={process.env.PUBLIC_URL+`/assets/images/client-logo/w5.png`} alt=""/></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="logo-media">
                                                            <a href="services-1.html"><img src={process.env.PUBLIC_URL+`/assets/images/client-logo/w6.png`} alt=""/></a>
                                                        </div>
                                                    </li>

                                                </ul>
                                                <div className="truck-img">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/truck.png`} alt="#"/>
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
                                                            <img src={process.env.PUBLIC_URL+`/assets/images/testimonials/pic1.jpg`} alt="one"/>
                                                        </div>
                                                    </div>
                                                    <div className="slick-item">
                                                        <div className="slick-testimonials-thumb">
                                                            <img src={process.env.PUBLIC_URL+`/assets/images/testimonials/pic2.jpg`} alt="two"/>
                                                        </div>
                                                    </div>
                                                    <div className="slick-item">
                                                        <div className="slick-testimonials-thumb">
                                                            <img src={process.env.PUBLIC_URL+`/assets/images/testimonials/pic3.jpg`} alt="three"/>
                                                        </div>
                                                    </div>
                                                    <div className="slick-item">
                                                        <div className="slick-testimonials-thumb">
                                                            <img src={process.env.PUBLIC_URL+`/assets/images/testimonials/pic4.jpg`} alt="four"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- MAIN SLIDES --> */}
                                                <div className="slick-testimonials-content">
                                                    <div className="slick-item">
                                                        <div className="tw-testimonials1-cell">
                                                            <div className="tw-testimonials1-text">
                                                                <span className="tw-testimonials1-quote"><img src={process.env.PUBLIC_URL+`/assets/images/quote.png`} alt=""/></span>
                                                                Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                                            </div>
                                                            <div className="tw-testimonials1-name">Peter Len</div>
                                                            <div className="tw-testimonials1-postion">Web Designer</div>
                                                        </div>
                                                    </div>
                                                    <div className="slick-item">
                                                        <div className="tw-testimonials1-cell">
                                                            <div className="tw-testimonials1-text">
                                                                <span className="tw-testimonials1-quote"><img src={process.env.PUBLIC_URL+`/assets/images/quote.png`} alt=""/></span>
                                                                Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                                            </div>
                                                            <div className="tw-testimonials1-name">Giselle</div>
                                                            <div className="tw-testimonials1-postion">Developer</div>
                                                        </div>
                                                    </div>
                                                    <div className="slick-item">
                                                        <div className="tw-testimonials1-cell">
                                                            <div className="tw-testimonials1-text">
                                                                <span className="tw-testimonials1-quote"><img src={process.env.PUBLIC_URL+`/assets/images/quote.png`} alt=""/></span>
                                                                Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                                            </div>
                                                            <div className="tw-testimonials1-name">Josephine</div>
                                                            <div className="tw-testimonials1-postion">Web Designer</div>
                                                        </div>
                                                    </div>
                                                    <div className="slick-item">
                                                        <div className="tw-testimonials1-cell">
                                                            <div className="tw-testimonials1-text">
                                                                <span className="tw-testimonials1-quote"><img src={process.env.PUBLIC_URL+`/assets/images/quote.png`} alt=""/></span>
                                                                Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                                            </div>
                                                            <div className="tw-testimonials1-name">Penelope</div>
                                                            <div className="tw-testimonials1-postion">Developer</div>
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
                                    <p className="section-head-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the  when an printer took.</p>
                                </div>
                                {/* <!-- TITLE END--> */}

                                <div className="section-content">
                                    <div className="services-gallery-style1">
                                        <div className="owl-carousel services-gallery-one owl-btn-bottom-center ">

                                            {/* <!-- COLUMNS 1 --> */}
                                            <div className="item ">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><a href="services-detail.html">HOUSEHOLD SHIFTING SERVICE</a></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">01</span>
                                                                <p>Our group of experts executes a systematic and well-planned home shifting in Bangalore by taking utmost care of your goods. During the whole scenario of moving, there is a maximum chance of you getting exhausted, but with our honest and timely approach, we aim to ease your stress and offer a smile on your face.</p>
                                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/s-gallery/1.jpg`} alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 2 --> */}
                                            <div className="item ">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><a href="services-detail.html">OFFICE SHIFTING SERVICE</a></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">02</span>
                                                                <p>Are you looking for the relocation of your office? Relax and experience the essence of our door to door office relocation services. We are the leading name in relocation services and are veteran in dealing all types of setups with our polite and highly-skilled professionals.</p>
                                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/s-gallery/2.jpg`} alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 3 --> */}
                                            <div className="item ">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><a href="services-detail.html">INDUSTRIAL SHIFTING SERVICE</a></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">03</span>
                                                                <p>We can not only manage the office and household shifting but are capable of managing mega-sized projects. We are master in relocating the complete industry with ensuring the safety of your properties while loading and unloading.</p>
                                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/s-gallery/3.jpg`} alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 4 --> */}
                                            <div className="item ">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><a href="services-detail.html">CAR CARRIER SERVICE</a></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">04</span>
                                                                <p>We at Easy Moves International Packers and Movers, promise you the safest transit of your cars incorporating with our modern amenities and punctual service. Safety and damage-free services are our underline benefits where you can be assured of the smoothest and scratch-free trip for your car. In addition to that, we are also known as Cheap Movers and Packers</p>
                                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/s-gallery/4.jpg`} alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 5 --> */}
                                            <div className="item ">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><a href="services-detail.html">WAREHOUSE / STORAGE</a></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">05</span>
                                                                <p>We provide the best warehouses service providers in Bangalore. With our reliable and safety warehouse services, our experts will educate you about our budgeted shifting option where you can compare and save money while shifting!</p>
                                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/s-gallery/5.jpg`} alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 6 --> */}
                                            <div className="item ">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><a href="services-detail.html">LOADING & UNLOADING</a></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">06</span>
                                                                <p>Transportation is easy but the main concern of customers is the safety of goods, the wear and tear of goods while loading and unloading and that’s why they prefer professionals who also offer safe loading and unloading of the goods.</p>
                                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/s-gallery/6.jpg`} alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 7 --> */}
                                            <div className="item ">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><a href="services-detail.html">RELOCATION SERVICES</a></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">07</span>
                                                                <p>Easy Moves International Packers and Movers is renowned for quality relocation services in Bangalore. With our unbeatable relocation services for office/home, car/bike etc, we imply our best of ability to satisfy your needs. In local areas, we are considered as the best Packers and Movers in Bangalore who provide pleasant and hassle-free shifting.</p>
                                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/s-gallery/6.jpg`} alt=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- COLUMNS 8 --> */}
                                            <div className="item ">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top">
                                                                <h3 className="service-title-large"><a href="services-detail.html">PACKING AND MOVING</a></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">08</span>
                                                                <p>Packing and unpacking can give you a headache! Meet our professional packers and movers and let them handle the whole process from packing and unpacking to reach the destination.</p>
                                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/s-gallery/6.jpg`} alt=""/>
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

                            <div className="wt-separator-two-part">
                                <div className="row wt-separator-two-part-row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-left">
                                        {/* <!-- TITLE START--> */}
                                        <div className="section-head left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div>Company Approch</div>
                                            </div>
                                            <h2 className="wt-title">Reliable Logistic & Transport Solutions</h2>
                                        </div>
                                        {/* <!-- TITLE END--> */}
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right text-right">
                                        <a href="about-1.html" className="btn-half site-button"><span>Read More</span><em></em></a>
                                    </div>
                                </div>
                            </div>


                            <div className="tw-company-approch-section">
                                <div className="tw-company-approch-inner">
                                    <div className="tw-company-years">
                                        <div className="light">
                                            <h1>35</h1>
                                            <img src={process.env.PUBLIC_URL+`/assets/images/text-bg.jpg`} alt=""/>
                                        </div>
                                        <div className="tw-company-info">
                                            <span>Year’s of experience in transport and logistics services</span>
                                        </div>
                                    </div>

                                    <div className="row">

                                        {/* <!--block 1--> */}
                                        <div className="col-lg-4 col-md-12">
                                            <div className="counter-outer-two">
                                                <div className="tw-counter-media">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/icons/c-pic1.png`} alt=""/>
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
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/icons/c-pic2.png`} alt=""/>
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
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/icons/c-pic3.png`} alt=""/>
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
                                <p className="section-head-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the  when an printer took.</p>
                            </div>
                            {/* <!-- TITLE END--> */}


                            <div className="section-content">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        {/* <!--Block one--> */}
                                        <div className="blog-post blog-post-4-outer">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest/bg1.jpg`} alt=""/></a>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-date"><span>02</span>Aug</li>
                                                    </ul>
                                                </div>

                                                <div className="wt-post-title ">
                                                    <h3 className="post-title"><a href="blog-single.html">At the end of the day, going forward, a
                                                        new normal that has evolved from.</a></h3>
                                                </div>
                                                <div className="wt-post-text ">
                                                    <p>
                                                        New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                                    </p>
                                                </div>
                                                <div className="wt-post-readmore ">
                                                    <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        {/* <!--Block two--> */}
                                        <div className="blog-post blog-post-4-outer">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest-2/l-1.jpg`} alt=""/></a>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-date"><span>08</span> Aug</li>
                                                    </ul>
                                                </div>

                                                <div className="wt-post-title ">
                                                    <h3 className="post-title"><a href="blog-single.html">How all this mistaken idea denouncing pleasure and praising pain was.</a></h3>
                                                </div>
                                                <div className="wt-post-text ">
                                                    <p>
                                                        New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                                    </p>
                                                </div>
                                                <div className="wt-post-readmore ">
                                                    <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        {/* <!--Block three--> */}
                                        <div className="blog-post blog-post-4-outer">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest/bg3.jpg`} alt=""/></a>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-date"><span>21</span> Aug</li>
                                                    </ul>
                                                </div>

                                                <div className="wt-post-title ">
                                                    <h3 className="post-title"><a href="blog-single.html">Going forward, a new normal that has
                                                        evolved from generation.</a></h3>
                                                </div>
                                                <div className="wt-post-text ">
                                                    <p>
                                                        New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                                    </p>
                                                </div>
                                                <div className="wt-post-readmore ">
                                                    <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- OUR BLOG END --> */}

                    {/* <!-- LATEST PRJECTS SLIDER START --> */}
                    <div className="section-full  tw-project-1-wrap tw-project-1-wrap-bg site-bg-white">
                        {/* <!-- IMAGE CAROUSEL START --> */}
                        <div className="section-content">

                            <div className="container">
                                <div className="tw-project-1-content">
                                    <div className="tw-project-1-content-position">
                                        {/* <!-- TITLE START--> */}
                                        <div className="section-head left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div>Projects</div>
                                            </div>
                                            <h2>Featured Projects</h2>
                                        </div>
                                        {/* <!-- TITLE END--> */}
                                        <div className="owl-carousel project-carousel  owl-btn-bottom-left">
                                            {/* <!-- COLUMNS 1 --> */}
                                            <div className="item">
                                                <div className="project-new-2">
                                                    <div className="wt-img-effect">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/project/1.jpg`} alt=""/>
                                                            <div className="project-view">
                                                                <a className="elem pic-long project-view-btn" href="images/project/1.jpg" title="Nh-16 Highway Bridge"
                                                                    data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project/1.jpg">
                                                                    <i className="fa fa-search-plus"></i>
                                                                </a>
                                                            </div>
                                                    </div>
                                                    <div className="project-new-content">
                                                        <span className="project-new-category">Warehousing , Distrbution</span>
                                                        <h4 className="wt-title"><a href="services-detail.html">Warehouse inventory</a></h4>
                                                        <a href="services-detail.html" className="site-button-h-align">Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- COLUMNS 2 --> */}
                                            <div className="item">
                                                <div className="project-new-2">
                                                    <div className="wt-img-effect">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/project/2.jpg`} alt=""/>
                                                            <div className="project-view">
                                                                <a className="elem pic-long project-view-btn" href="images/project/2.jpg" title="Nh-16 Highway Bridge"
                                                                    data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project/2.jpg">
                                                                    <i className="fa fa-search-plus"></i>
                                                                </a>
                                                            </div>
                                                    </div>
                                                    <div className="project-new-content">
                                                        <span className="project-new-category">Logistics, Analytics</span>
                                                        <h4 className="wt-title"><a href="services-detail.html">Minimize Manufacturing</a></h4>
                                                        <a href="services-detail.html" className="site-button-h-align">Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- COLUMNS 3 --> */}
                                            <div className="item">
                                                <div className="project-new-2">
                                                    <div className="wt-img-effect">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/project/3.jpg`} alt=""/>
                                                            <div className="project-view">
                                                                <a className="elem pic-long project-view-btn" href="images/project/3.jpg" title="Nh-16 Highway Bridge"
                                                                    data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project/3.jpg">
                                                                    <i className="fa fa-search-plus"></i>
                                                                </a>
                                                            </div>
                                                    </div>
                                                    <div className="project-new-content">
                                                        <span className="project-new-category">Warehousing , Distrbution</span>
                                                        <h4 className="wt-title"><a href="services-detail.html">Warehouse inventory</a></h4>
                                                        <a href="services-detail.html" className="site-button-h-align">Read More</a>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* <!-- LATEST PRJECTS SLIDER END --> */}

                </div>
                {/* <!-- CONTENT END --> */}

            </div>
        </>
    );
}
