import React from 'react';

export default function About() {
  return (
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
                        {/* <!-- BREADCRUMB ROW -->                             */}
                        
                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li><a href="index.html">Home</a></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        
                        {/* <!-- BREADCRUMB ROW END -->                         */}
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END -->          */}

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
                                    {/* <!-- COLUMNS 1 -->  */}
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

                                    {/* <!-- COLUMNS 2 -->  */}
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

                                    {/* <!-- COLUMNS 3 -->  */}
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

            {/* <!-- WE ACHIVED SECTION START --> */}
            <div className="section-full site-bg-dark tw-we-achived">
                        
                <div className="container">

                    <div className="tw-we-achived-section">
                           
                        {/* <!-- 1 --> */}
                        <div className="tw-we-achived-box-warp">
                            <div className="tw-we-achived-box">
                                <h2 className="counter">12</h2>
                                <span>Warehouses in U.S.A</span>
                            </div>
                        </div>

                        {/* <!-- 2 --> */}
                        <div className="tw-we-achived-box-warp bg-skew">
                            <div className="tw-we-achived-box ">
                                <h2 className="counter">15</h2>
                                <span>Year of experience work with U.S.A</span>
                            </div>
                        </div>

                        {/* <!-- 3 --> */}
                        <div className="tw-we-achived-box-warp">
                            <div className="tw-we-achived-box">
                                <h2 className="counter">60</h2>
                                <span>Kg Minimum lot valume</span>
                            </div>
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
                                <div  className="tw-testimonial-border-outer">
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
            {/* <!-- TESTIMONIALS  SECTION End -->  */}

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
            {/* <!-- COMPANY APPROCH SECTION END -->  */}
                     
     
        </div>
  );
}
