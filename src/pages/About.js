import React from 'react';

export default function About() {
  return (
    <div class="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div class="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url('${process.env.PUBLIC_URL}assets/images/banner/1.jpg')`}}>
            	<div class="overlay-main site-bg-sky opacity-08"></div>
                <div class="container">
                    <div class="wt-bnr-inr-entry">
                    	<div class="banner-title-outer">
                        	<div class="banner-title-name">
                        		<h2 class="wt-title">About Us</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW -->                             */}
                        
                            <div>
                                <ul class="wt-breadcrumb breadcrumb-style-2">
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
            <div class="section-full p-t120 p-b90 site-bg-gray tw-what-wedo-area">
                        
                <div class="container">

                    {/* <!-- TITLE START--> */}
                    <div class="section-head center wt-small-separator-outer">
                        <div class="wt-small-separator site-text-primary">
                           <div>What we do!</div>                                
                        </div>
                        <h2 class="wt-title">Specialist Logistics Services</h2>
                        <p class="section-head-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the  when an printer took.</p>
                    </div>                  
                    {/* <!-- TITLE END--> */}

                    <div class="tw-what-wedo-section">

                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div class="tw-what-wedo-media">
                                    <img src={process.env.PUBLIC_URL+`assets/images/icons/img1.png`} alt=""/>
                                </div>
                            </div>

                            <div class="col-xl-7 col-lg-7 col-md-12">
                                <div class="tw-service-icon-box-wrap">
                                    {/* <!-- COLUMNS 1 -->  */}
                                    <div class="service-icon-box-two">
                                    
                                        <div class="service-icon-box-two-media">
                                            <img src={process.env.PUBLIC_URL+`assets/images/icons/pic1.png`} alt="#"/>
                                        </div>
                                                                                
                                        <div class="service-icon-box-title">
                                            <h3 class="wt-title">
                                                <a href="services-detail.html">
                                                    <span class="site-text-primary">01.</span>Road Freight</a>
                                                </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt </p>
                                        </div>
                                                                                    
                                    </div>

                                    {/* <!-- COLUMNS 2 -->  */}
                                    <div class="service-icon-box-two">
                                    
                                        <div class="service-icon-box-two-media">
                                            <img src={process.env.PUBLIC_URL+`assets/images/icons/pic2.png`} alt="#"/>
                                        </div>
                                                                                
                                        <div class="service-icon-box-title">
                                            <h3 class="wt-title">
                                                <a href="services-detail.html">
                                                    <span class="site-text-primary">02.</span>Shipping Freight</a>
                                                </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt </p>
                                        </div>
                                                                                    
                                    </div>

                                    {/* <!-- COLUMNS 3 -->  */}
                                    <div class="service-icon-box-two">
                                    
                                        <div class="service-icon-box-two-media">
                                            <img src={process.env.PUBLIC_URL+`assets/images/icons/pic3.png`} alt="#"/>
                                        </div>
                                                                                
                                        <div class="service-icon-box-title">
                                            <h3 class="wt-title">
                                                <a href="services-detail.html">
                                                    <span class="site-text-primary">03.</span>Air Freight</a>
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
            <div class="section-full site-bg-dark tw-we-achived">
                        
                <div class="container">

                    <div class="tw-we-achived-section">
                           
                        {/* <!-- 1 --> */}
                        <div class="tw-we-achived-box-warp">
                            <div class="tw-we-achived-box">
                                <h2 class="counter">12</h2>
                                <span>Warehouses in U.S.A</span>
                            </div>
                        </div>

                        {/* <!-- 2 --> */}
                        <div class="tw-we-achived-box-warp bg-skew">
                            <div class="tw-we-achived-box ">
                                <h2 class="counter">15</h2>
                                <span>Year of experience work with U.S.A</span>
                            </div>
                        </div>

                        {/* <!-- 3 --> */}
                        <div class="tw-we-achived-box-warp">
                            <div class="tw-we-achived-box">
                                <h2 class="counter">60</h2>
                                <span>Kg Minimum lot valume</span>
                            </div>
                        </div>

                    </div>                  
                </div>

            </div>   
            {/* <!-- WE ACHIVED SECTION END --> */}

            {/* <!-- TESTIMONIALS SECTION START --> */}
            <div class="section-full bg-cover p-t120 p-b90 bg-cover tw-testimonial-1-area" style={{backgroundImage:`url('${process.env.PUBLIC_URL}assets/images/background/bg-6.jpg')`}}>
                <div class="tw-testimonial-inner-wrap">
                    <div class="container">
                        <div class="row">

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="tw-client-logo-wrap">
                                    {/* <!-- TITLE START--> */}
                                    <div class="section-head left wt-small-separator-outer">
                                        <div class="wt-small-separator site-text-primary">
                                            <div>Respected</div>
                                        </div>
                                        <h2 class="wt-title">Clients & partners</h2>
                                    </div>
                                    {/* <!-- TITLE END--> */}
                                    <div class="tw-client-logo-inner">
                                        <ul>
                                            <li>
                                                <div class="logo-media">
                                                    <a href="services-1.html"><img src={process.env.PUBLIC_URL+`assets/images/client-logo/w1.png`} alt=""/></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="logo-media">
                                                    <a href="services-1.html"><img src={process.env.PUBLIC_URL+`assets/images/client-logo/w2.png`} alt=""/></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="logo-media">
                                                    <a href="services-1.html"><img src={process.env.PUBLIC_URL+`assets/images/client-logo/w3.png`} alt=""/></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="logo-media">
                                                    <a href="services-1.html"><img src={process.env.PUBLIC_URL+`assets/images/client-logo/w4.png`} alt=""/></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="logo-media">
                                                    <a href="services-1.html"><img src={process.env.PUBLIC_URL+`assets/images/client-logo/w5.png`} alt=""/></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="logo-media">
                                                    <a href="services-1.html"><img src={process.env.PUBLIC_URL+`assets/images/client-logo/w6.png`} alt=""/></a>
                                                </div>
                                            </li>
                                            
                                        </ul>
                                        <div class="truck-img">
                                            <img src={process.env.PUBLIC_URL+`assets/images/truck.png`} alt="#"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="tw-client-logo-bg"></div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div  class="tw-testimonial-border-outer">
                                    <div class="slider-vertical-wrap">
                                        {/* <!-- THUMBNAILS --> */}
                                        <div class="slick-testimonials-thumbnails">
                                        
                                            <div class="slick-item">
                                                <div class="slick-testimonials-thumb">
                                                    <img src={process.env.PUBLIC_URL+`assets/images/testimonials/pic1.jpg`} alt="one"/>
                                                </div>
                                            </div>
                                            <div class="slick-item">
                                                <div class="slick-testimonials-thumb">
                                                    <img src={process.env.PUBLIC_URL+`assets/images/testimonials/pic2.jpg`} alt="two"/>
                                                </div>
                                            </div>
                                            <div class="slick-item">
                                                <div class="slick-testimonials-thumb">
                                                    <img src={process.env.PUBLIC_URL+`assets/images/testimonials/pic3.jpg`} alt="three"/>
                                                </div>
                                            </div>
                                            <div class="slick-item">
                                                <div class="slick-testimonials-thumb">
                                                    <img src={process.env.PUBLIC_URL+`assets/images/testimonials/pic4.jpg`} alt="four"/>
                                                </div>
                                            </div>                                    
                                        </div>                            
                                        {/* <!-- MAIN SLIDES --> */}
                                        <div class="slick-testimonials-content">
                                            <div class="slick-item">
                                            <div class="tw-testimonials1-cell">
                                                    <div class="tw-testimonials1-text">
                                                        <span class="tw-testimonials1-quote"><img src={process.env.PUBLIC_URL+`assets/images/quote.png`} alt=""/></span>
                                                        Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                                </div>
                                                    <div class="tw-testimonials1-name">Peter Len</div>
                                                    <div class="tw-testimonials1-postion">Web Designer</div>
                                                </div>
                                            </div>
                                            <div class="slick-item">
                                            <div class="tw-testimonials1-cell">
                                                    <div class="tw-testimonials1-text">
                                                        <span class="tw-testimonials1-quote"><img src={process.env.PUBLIC_URL+`assets/images/quote.png`} alt=""/></span>
                                                        Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                                </div>
                                                    <div class="tw-testimonials1-name">Giselle</div>
                                                    <div class="tw-testimonials1-postion">Developer</div>
                                                </div>
                                            </div>
                                            <div class="slick-item">
                                            <div class="tw-testimonials1-cell">
                                                    <div class="tw-testimonials1-text">
                                                        <span class="tw-testimonials1-quote"><img src={process.env.PUBLIC_URL+`assets/images/quote.png`} alt=""/></span>
                                                        Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                                </div>
                                                    <div class="tw-testimonials1-name">Josephine</div>
                                                    <div class="tw-testimonials1-postion">Web Designer</div>
                                                </div>
                                            </div>
                                            <div class="slick-item">
                                            <div class="tw-testimonials1-cell">
                                                    <div class="tw-testimonials1-text">
                                                        <span class="tw-testimonials1-quote"><img src={process.env.PUBLIC_URL+`assets/images/quote.png`} alt=""/></span>
                                                        Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                                </div>
                                                    <div class="tw-testimonials1-name">Penelope</div>
                                                    <div class="tw-testimonials1-postion">Developer</div>
                                                </div>
                                            </div>                                    
                                        </div>
                                    </div>
                                    <div class="tw-testimonial-border"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>   
            </div>
            {/* <!-- TESTIMONIALS  SECTION End -->  */}

            {/* <!-- OUR BLOG START --> */}
            <div class="section-full p-t120 p-b90 site-bg-gray bg-cover">
                <div class="container">
                   
                    {/* <!-- TITLE START--> */}
                    <div class="section-head center wt-small-separator-outer">
                        <div class="wt-small-separator site-text-primary">
                           <div>Our Blogs</div>                                
                        </div>
                        <h2 class="wt-title">Recent news & events</h2>
                        <p class="section-head-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the  when an printer took.</p>
                    </div>                  
                    {/* <!-- TITLE END--> */}


                    <div class="section-content">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-4 col-md-6 col-sm-12 m-b30">
                                {/* <!--Block one--> */}
                                <div class="blog-post blog-post-4-outer">
                                    <div class="wt-post-media wt-img-effect zoom-slow">
                                        <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`assets/images/blog/latest/bg1.jpg`} alt=""/></a>
                                    </div>                                    
                                    <div class="wt-post-info">
                                        <div class="wt-post-meta ">
                                            <ul>
                                                <li class="post-date"><span>02</span>Aug</li>
                                            </ul>
                                        </div>
                                                                     
                                    <div class="wt-post-title ">
                                        <h3 class="post-title"><a href="blog-single.html">At the end of the day, going forward, a 
                                            new normal that has evolved from.</a></h3>
                                    </div>
                                    <div class="wt-post-text ">
                                        <p>
                                            New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                        </p>
                                    </div>
                                    <div class="wt-post-readmore ">
                                        <a href="blog-single.html" class="site-button-link site-text-primary">Read More</a>
                                    </div>                                        
                                </div>                                
                                </div>
                            </div>
                            
                            <div class="col-lg-4 col-md-6 col-sm-12 m-b30">
                                {/* <!--Block two--> */}
                                <div class="blog-post blog-post-4-outer">
                                    <div class="wt-post-media wt-img-effect zoom-slow">
                                        <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`assets/images/blog/latest-2/l-1.jpg`} alt=""/></a>
                                    </div>                                     
                                    <div class="wt-post-info">
                                        <div class="wt-post-meta ">
                                            <ul>
                                                <li class="post-date"><span>08</span> Aug</li>
                                            </ul>
                                        </div>
                                                                         
                                        <div class="wt-post-title ">
                                            <h3 class="post-title"><a href="blog-single.html">How all this mistaken idea denouncing pleasure and praising pain was.</a></h3>
                                        </div>
                                        <div class="wt-post-text ">
                                            <p>
                                                New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                            </p>
                                        </div>
                                        <div class="wt-post-readmore ">
                                            <a href="blog-single.html" class="site-button-link site-text-primary">Read More</a>
                                        </div>                                        
                                    </div>                                
                                </div>
                            </div>
                            
                            <div class="col-lg-4 col-md-6 col-sm-12 m-b30">
                                {/* <!--Block three--> */}
                                <div class="blog-post blog-post-4-outer">
                                    <div class="wt-post-media wt-img-effect zoom-slow">
                                        <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`assets/images/blog/latest/bg3.jpg`} alt=""/></a>
                                    </div>                                     
                                    <div class="wt-post-info">
                                        <div class="wt-post-meta ">
                                            <ul>
                                                <li class="post-date"><span>21</span> Aug</li>
                                            </ul>
                                        </div>
                                                                        
                                        <div class="wt-post-title ">
                                            <h3 class="post-title"><a href="blog-single.html">Going forward, a new normal that has 
                                                evolved from generation.</a></h3>
                                        </div>
                                        <div class="wt-post-text ">
                                            <p>
                                                New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                            </p>
                                        </div>
                                        <div class="wt-post-readmore ">
                                            <a href="blog-single.html" class="site-button-link site-text-primary">Read More</a>
                                        </div>
                                    </div>                                
                                </div> 
                            </div>                                                        
                                                        
                        </div>
                    </div>
                   
                </div>
            </div>
            {/* <!-- OUR BLOG END --> */}

            {/* <!-- COMPANY APPROCH SECTION START --> */}
            <div class="section-full p-t120 p-b90 site-bg-white tw-company-approch-area">
                        
                <div class="container">

                    <div class="wt-separator-two-part">
                        <div class="row wt-separator-two-part-row">
                            <div class="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-left">
                                {/* <!-- TITLE START--> */}
                                <div class="section-head left wt-small-separator-outer">
                                    <div class="wt-small-separator site-text-primary">
                                    <div>Company Approch</div>                                
                                    </div>
                                    <h2 class="wt-title">Reliable Logistic & Transport Solutions</h2>
                                </div>                  
                                {/* <!-- TITLE END--> */}
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right text-right">
                                <a href="about-1.html" class="btn-half site-button"><span>Read More</span><em></em></a>
                            </div>
                        </div>
                    </div>

                    
                    <div class="tw-company-approch-section">
                        <div class="tw-company-approch-inner">
                            <div class="tw-company-years">
                                <div class="light">
                                    <h1>35</h1>
                                   <img src={process.env.PUBLIC_URL+`assets/images/text-bg.jpg`} alt=""/>
                                </div>
                                <div class="tw-company-info">
                                    <span>Year’s of experience in transport and logistics services</span>
                                </div>
                            </div>

                            <div class="row">

                                {/* <!--block 1--> */}
                                <div class="col-lg-4 col-md-12">
                                    <div class="counter-outer-two">
                                        <div class="tw-counter-media">
                                            <img src={process.env.PUBLIC_URL+`assets/images/icons/c-pic1.png`} alt=""/>
                                        </div>
                                        <div class="icon-content">
                                            <div class="tw-count-number site-text-primary"><span class="counter site-text-primary">195</span>+</div>
                                            <h3 class="icon-content-info">Professional Staff</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--block 2--> */}
                                <div class="col-lg-4 col-md-12">
                                    <div class="counter-outer-two">
                                        <div class="tw-counter-media">
                                            <img src={process.env.PUBLIC_URL+`assets/images/icons/c-pic2.png`} alt=""/>
                                        </div>
                                        <div class="icon-content">
                                            <div class="tw-count-number site-text-primary"><span class="counter site-text-primary">250</span>+</div>
                                            <h3 class="icon-content-info">On Time Delievery</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--block 3--> */}
                                <div class="col-lg-4 col-md-12">
                                    <div class="counter-outer-two">
                                        <div class="tw-counter-media">
                                            <img src={process.env.PUBLIC_URL+`assets/images/icons/c-pic3.png`} alt=""/>
                                        </div>
                                        <div class="icon-content">
                                            <div class="tw-count-number site-text-primary"><span class="counter site-text-primary">350</span>+</div>
                                            <h3 class="icon-content-info">Technology and Media</h3>
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
