import React from 'react';

export default function Services() {
    return (
        <div className="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url('${process.env.PUBLIC_URL}assets/images/banner/1.jpg')`}}>
                <div className="overlay-main site-bg-sky opacity-08"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">Our Services Two</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW --> */}

                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><a href="index.html">Home</a></li>
                                <li>Our Services Two</li>
                            </ul>
                        </div>

                        {/* <!-- BREADCRUMB ROW END --> */}
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END --> */}

            {/* <!-- SERVICES SECTION START --> */}
            <div className="section-full p-t120 p-b90 site-bg-gray tw-service-gallery-style3-area">

                <div className="services-gallery-block-outer3">
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
                            <div className="services-gallery-style3">
                                <div className="row">

                                    {/* <!-- COLUMNS 1 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`assets/images/icons/pic1.png`} alt=""/>
                                            </div>
                                            <div className="service-content">
                                                <h3 className="service-title-large"><span className="service-title-large-number">01</span><a href="services-detail.html">Air Freight</a></h3>
                                                <p>Our aim is to optimize and improve your supply chain so that we can give you the best service.</p>
                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 2 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`assets/images/icons/pic2.png`} alt=""/>
                                            </div>
                                            <div className="service-content">
                                                <h3 className="service-title-large"><span className="service-title-large-number">02</span><a href="services-detail.html">Road Freight</a></h3>
                                                <p>Our aim is to optimize and improve your supply chain so that we can give you the best service.</p>
                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 3 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`assets/images/icons/pic3.png`} alt=""/>
                                            </div>
                                            <div className="service-content">
                                                <h3 className="service-title-large"><span className="service-title-large-number">03</span><a href="services-detail.html">Ocean Freight</a></h3>
                                                <p>Our aim is to optimize and improve your supply chain so that we can give you the best service.</p>
                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 4 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`assets/images/icons/pic4.png`} alt=""/>
                                            </div>
                                            <div className="service-content">
                                                <h3 className="service-title-large"><span className="service-title-large-number">04</span><a href="services-detail.html">Rail Freight</a></h3>
                                                <p>Our aim is to optimize and improve your supply chain so that we can give you the best service.</p>
                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 5 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`assets/images/icons/pic5.png`} alt=""/>
                                            </div>
                                            <div className="service-content">
                                                <h3 className="service-title-large"><span className="service-title-large-number">05</span><a href="services-detail.html">Warehousing</a></h3>
                                                <p>Our aim is to optimize and improve your supply chain so that we can give you the best service.</p>
                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 6 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`assets/images/icons/pic6.png`} alt=""/>
                                            </div>
                                            <div className="service-content">
                                                <h3 className="service-title-large"><span className="service-title-large-number">06</span><a href="services-detail.html">Project Cargo</a></h3>
                                                <p>Our aim is to optimize and improve your supply chain so that we can give you the best service.</p>
                                                <a href="services-detail.html" className="site-button-2">View Detail</a>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- SERVICES SECTION END --> */}

            {/* <!-- Estimation SECTION START --> */}
            <div className="section-full p-t120 p-b90 site-bg-white  tw-estimation-2-area">

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

                <div className="tw-estimation-2-section">
                    <div className="container">
                        <div className="row">
                            {/* <!--1--> */}
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="tw-est-2-section-block">
                                    <div className="tw-est-2-section-block-content">
                                        <span className="tw-est-2-section-number">01</span>
                                        <div className="media">
                                            <img src={process.env.PUBLIC_URL+`assets/images/estimation-icon/pic1.png`} alt="#"/>
                                        </div>
                                        <h3 className="tw-title">Solutions and specialized</h3>
                                        <p>Our aim is to optimize and improve your supply chain so that we can give you the best service</p>
                                        <a href="about-1.html" className="site-button-2-outline dark"><i className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--2--> */}
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="tw-est-2-section-block">
                                    <div className="tw-est-2-section-block-content">
                                        <span className="tw-est-2-section-number">02</span>
                                        <div className="media">
                                            <img src={process.env.PUBLIC_URL+`assets/images/estimation-icon/pic2.png`} alt="#"/>
                                        </div>
                                        <h3 className="tw-title">Multiple warehouses</h3>
                                        <p>We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind...</p>
                                        <a href="about-1.html" className="site-button-2-outline dark"><i className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--3--> */}
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="tw-est-2-section-block  active">
                                    <div className="tw-est-2-section-block-content">
                                        <span className="tw-est-2-section-number">03</span>
                                        <div className="media">
                                            <img src={process.env.PUBLIC_URL+`assets/images/estimation-icon/pic3.png`} alt="#"/>
                                        </div>
                                        <h3 className="tw-title">Tracking made easy</h3>
                                        <p>A tracking number for the entire process. so that you can find the exact position. this process will help you</p>
                                        <a href="about-1.html" className="site-button-2-outline dark"><i className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
            {/* <!-- Estimation SECTION END --> */}

            {/* <!-- BOOKING SECTION START --> */}
            <div className="section-full p-t120 p-b90 site-bg-gray tw-booking-area"  style={{backgroundImage:`url('${process.env.PUBLIC_URL}assets/images/booking/bg-map.png')`}}>

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
                                        <img src={process.env.PUBLIC_URL+`assets/images/booking/pic1.png`} alt="#"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-9 col-lg-9 col-md-12">
                                <div className="tw-booking-form">

                                    <div className="row booking-tab-container">
                                        <div className="col-lg-2 col-md-12 booking-tab-menu">
                                            <div className="list-group">
                                                <a href="#" className="list-group-item active text-center">
                                                    <div className="media">
                                                        <img src={process.env.PUBLIC_URL+`assets/images/booking/icon1.png`} alt=""/>
                                                    </div>
                                                    <span>Request A Quote</span>
                                                </a>
                                                <a href="#" className="list-group-item text-center">
                                                    <div className="media">
                                                        <img src={process.env.PUBLIC_URL+`assets/images/booking/icon2.png`} alt=""/>
                                                    </div>
                                                    <span>Track & Trace</span>
                                                </a>

                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-12 booking-tab">
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
                                                                    <option>Incoterms</option>
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



            {/* <!-- PRICING TABLE SECTION START --> */}
            <div className="section-full p-t120 p-b90 site-bg-white tw-pricing-area">

                <div className="container">

                    {/* <!-- TITLE START--> */}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Our Plan</div>
                        </div>
                        <h2 className="wt-title">The right price for you whoever you are</h2>
                    </div>
                    {/* <!-- TITLE END--> */}

                    <div className="section-content">
                        <div className="pricing-block-outer">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 m-b30">
                                    <div className="pricing-table-1">
                                        <div className="p-table-title">
                                            <h4 className="wt-title">
                                                Startup
                                            </h4>
                                        </div>
                                        <div className="p-table-inner">
                                            <div className="p-table-price">
                                                <span>90$</span>
                                                <p>/Monthly</p>
                                            </div>
                                            <div className="p-table-list">
                                                <ul>
                                                    <li>Additional</li>
                                                    <li>Warehouing</li>
                                                    <li>Custos Borkerage</li>
                                                    <li>Unlimited Transfer</li>
                                                </ul>
                                            </div>
                                            <div className="p-table-btn">
                                                <a href="about-1.html" className="btn-half site-button"><span>Buy Now</span><em></em></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 p-table-highlight m-b30">
                                    <div className="pricing-table-1">

                                        <div className="p-table-title">
                                            <h4 className="wt-title">
                                                Standard
                                            </h4>
                                        </div>
                                        <div className="p-table-inner">
                                            <div className="p-table-price">
                                                <span>150$</span>
                                                <p>/Monthly</p>
                                            </div>
                                            <div className="p-table-list">
                                                <ul>
                                                    <li>Additional</li>
                                                    <li>Warehouing</li>
                                                    <li>Custos Borkerage</li>
                                                    <li>Unlimited Transfer</li>
                                                </ul>
                                            </div>
                                            <div className="p-table-btn">
                                                <a href="about-1.html" className="btn-half site-button"><span>Buy Now</span><em></em></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 m-b30">
                                    <div className="pricing-table-1">
                                        <div className="p-table-title">
                                            <h4 className="wt-title">
                                                Business
                                            </h4>
                                        </div>
                                        <div className="p-table-inner">
                                            <div className="p-table-price">
                                                <span>260$</span>
                                                <p>/Monthly</p>
                                            </div>
                                            <div className="p-table-list">
                                                <ul>
                                                    <li>Additional</li>
                                                    <li>Warehouing</li>
                                                    <li>Custos Borkerage</li>
                                                    <li>Unlimited Transfer</li>
                                                </ul>
                                            </div>
                                            <div className="p-table-btn">
                                                <a href="about-1.html" className="btn-half site-button"><span>Buy Now</span><em></em></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- PRICING TABLE SECTION END --> */}




        </div>
    );
}
