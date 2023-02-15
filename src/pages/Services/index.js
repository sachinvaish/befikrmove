import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Services(props) {

    useEffect(()=>{
        document.title = `Befikrmove - ${props.title}`;
      },[])

    return (
        <div className="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg')` }}>
                <div className="overlay-main site-bg-sky opacity-08"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">Our Services</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW -->                             */}

                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><a href="index.html">Home</a></li>
                                <li>Our Services</li>
                            </ul>
                        </div>

                        {/* <!-- BREADCRUMB ROW END -->                         */}
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END -->          */}

            {/* <!-- SERVICES SECTION START --> */}
            <div className="section-full p-t120 p-b90 site-bg-gray tw-service-gallery-style1-area tyre-mark-bg">

                <div className="services-gallery-block-outer2">
                    <div className="container">

                        {/* <!-- TITLE START--> */}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div>Services</div>
                            </div>
                            <h2 className="wt-title">Trusted For Our Services</h2>
                            <p className="section-head-text">Professional Movers and Packers in Pan India are committed to rendering high-class, reliable, and skilled packing, and moving services.</p>
                        </div>
                        {/* <!-- TITLE END--> */}

                        <div className="section-content">
                            <div className="services-gallery-style1">
                                <div className="row">

                                    {/* <!-- COLUMNS 1 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style1">
                                            <div className="service-content">
                                                <div className="service-content-inner">
                                                    <div className="service-content-top">
                                                        <h3 className="service-title-large"><a href="household-shifting-services.html">Household Shifting Services</a></h3>
                                                    </div>
                                                    <div className="service-content-bottom">
                                                        <span className="service-title-large-number">01</span>
                                                        <p>Before registering any Household Shifting Services businesses with Befikrmove, we do a thorough background check of them. We link only recognized and trusted Indian house shifting service providers.</p>
                                                        <Link to={'/household-shifting-services'} className="site-button-2">View Detail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/house-shifting.jpg`} alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 2 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style1">
                                            <div className="service-content">
                                                <div className="service-content-inner">
                                                    <div className="service-content-top">
                                                        <h3 className="service-title-large"><a href="office-shifting-services.html">Office Shifting Services</a></h3>
                                                    </div>
                                                    <div className="service-content-bottom">
                                                        <span className="service-title-large-number">02</span>
                                                        <p>We provide hassle-free, high-quality loaded office shifting services at extremely reasonable moving costs.</p>
                                                        <Link to={'/office-shifting-services'} className="site-button-2">View Detail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/office-shifting.jpg`} alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 3 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style1">
                                            <div className="service-content">
                                                <div className="service-content-inner">
                                                    <div className="service-content-top">
                                                        <h3 className="service-title-large"><a href="industrial-shifting-services.html">Industrial Shifting Services</a></h3>
                                                    </div>
                                                    <div className="service-content-bottom">
                                                        <span className="service-title-large-number">03</span>
                                                        <p>The more objects that have to be moved, the more difficult the process.</p>
                                                        <Link to={'/industrial-shifting-services'} className="site-button-2">View Detail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/industrial-shifting.jpg`} alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 4 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style1">
                                            <div className="service-content">
                                                <div className="service-content-inner">
                                                    <div className="service-content-top">
                                                        <h3 className="service-title-large"><a href="car-carrier-services.html">Car Carrier Services</a></h3>
                                                    </div>
                                                    <div className="service-content-bottom">
                                                        <span className="service-title-large-number">04</span>
                                                        <p>Befikramove is one of the top-ranked Car Carrier Services companies in India, thanks to its years of expertise, highly competent and qualified moving staff, and numerous satisfied customers.</p>
                                                        <Link to={'/car-carrier-services'} className="site-button-2">View Detail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/car-shifting.jpg`} alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 5 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style1">
                                            <div className="service-content">
                                                <div className="service-content-inner">
                                                    <div className="service-content-top">
                                                        <h3 className="service-title-large"><a href="warehouse-services.html">Warehouse storage services</a></h3>
                                                    </div>
                                                    <div className="service-content-bottom">
                                                        <span className="service-title-large-number">05</span>
                                                        <p>Warehousing and storage services provide storage for the parts, machinery, automobiles, goods, and perishable goods of another business or organization.</p>
                                                        <Link to={'/warehouse-services'} className="site-button-2">View Detail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/warehouse-services.jpg`} alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 6 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style1">
                                            <div className="service-content">
                                                <div className="service-content-inner">
                                                    <div className="service-content-top">
                                                        <h3 className="service-title-large"><a href="loading-unloading-services.html">Loading and Unloading Services</a></h3>
                                                    </div>
                                                    <div className="service-content-bottom">
                                                        <span className="service-title-large-number">06</span>
                                                        <p>Our team, owing to their vast experience, knows how to do things the right way, which will come in handy in restricted spaces and manage your household items in tight spaces.</p>
                                                        <Link to={'/loading-unloading-services'} className="site-button-2">View Detail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/loading-unloading.jpg`} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- COLUMNS 6 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style1">
                                            <div className="service-content">
                                                <div className="service-content-inner">
                                                    <div className="service-content-top">
                                                        <h3 className="service-title-large"><a href="relocation-services.html">Relocation Services</a></h3>
                                                    </div>
                                                    <div className="service-content-bottom">
                                                        <span className="service-title-large-number">07</span>
                                                        <p>To facilitate safe and easy relocation, Befikrmove Relocation Services remains loyal to its primary focus: the client.</p>
                                                        <Link to={'/relocation-services'} className="site-button-2">View Detail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/relocation-services.jpg`} alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 6 --> */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style1">
                                            <div className="service-content">
                                                <div className="service-content-inner">
                                                    <div className="service-content-top">
                                                        <h3 className="service-title-large"><a href="packing-moving-services.html">Packing and Moving Services</a></h3>
                                                    </div>
                                                    <div className="service-content-bottom">
                                                        <span className="service-title-large-number">08</span>
                                                        <p>Most reputed packers and movers in India are available through Befikramove, and they have a professional understanding of packing and moving goods.</p>
                                                        <Link to={'/packing-moving-services'} className="site-button-2">View Detail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/packing-moving.jpg`} alt=""/>
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

        </div>
    );
}
