import React from 'react';

export default function Services() {
    return (
        <div className="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg')`}}>
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
                                <div>All services</div>                                
                            </div>
                            <h2 className="wt-title">Trusted For Our Services</h2>
                            <p className="section-head-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the  when an printer took.</p>
                        </div>                  
                        {/* <!-- TITLE END--> */}

                        <div className="section-content"> 
                            <div className="services-gallery-style1">
                                <div className="row">
                                
                                    {/* <!-- COLUMNS 1 -->  */}
                                    <div className="col-lg-4 col-md-6 mb-4">
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

                                    {/* <!-- COLUMNS 2 -->  */}
                                    <div className="col-lg-4 col-md-6 mb-4">
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
                                    
                                    {/* <!-- COLUMNS 3 -->  */}
                                    <div className="col-lg-4 col-md-6 mb-4">
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
                                    
                                    {/* <!-- COLUMNS 4 -->  */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style1">
                                            <div className="service-content">
                                                <div className="service-content-inner">
                                                    <div className="service-content-top"> 
                                                        <h3 className="service-title-large"><a href="services-detail.html">CAR CARRIER SERVICE</a></h3>
                                                    </div>
                                                    <div className="service-content-bottom">
                                                        <span className="service-title-large-number">04</span>
                                                        <p>We at Befikr Moves International Packers and Movers, promise you the safest transit of your cars incorporating with our modern amenities and punctual service. Safety and damage-free services are our underline benefits where you can be assured of the smoothest and scratch-free trip for your car. In addition to that, we are also known as Cheap Movers and Packers.</p>
                                                        <a href="services-detail.html" className="site-button-2">View Detail</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/s-gallery/4.jpg`} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- COLUMNS 5 -->  */}
                                    <div className="col-lg-4 col-md-6 mb-4">
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
                                    
                                    {/* <!-- COLUMNS 6 -->  */}
                                    <div className="col-lg-4 col-md-6 mb-4">
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

                                    {/* <!-- COLUMNS 7 -->  */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style1">
                                            <div className="service-content">
                                                <div className="service-content-inner">
                                                    <div className="service-content-top"> 
                                                        <h3 className="service-title-large"><a href="services-detail.html">RELOCATION SERVICES</a></h3>
                                                    </div>
                                                    <div className="service-content-bottom">
                                                        <span className="service-title-large-number">07</span>
                                                        <p>Befikr Moves International Packers and Movers is renowned for quality relocation services in Bangalore. With our unbeatable relocation services for office/home, car/bike etc, we imply our best of ability to satisfy your needs. In local areas, we are considered as the best Packers and Movers in Bangalore who provide pleasant and hassle-free shifting.</p>
                                                        <a href="services-detail.html" className="site-button-2">View Detail</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/s-gallery/6.jpg`} alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- COLUMNS 8 -->  */}
                                    <div className="col-lg-4 col-md-6 mb-4">
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
     
        </div>
    );
}
