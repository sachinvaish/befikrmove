import React from 'react';

export default function Blog() {
    return (
        <div className="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg')`}}>
                <div className="overlay-main site-bg-sky opacity-08"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">Blog Grid</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW --> */}

                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><a href="index.html">Home</a></li>
                                <li>Blog Grid</li>
                            </ul>
                        </div>

                        {/* <!-- BREADCRUMB ROW END --> */}
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END --> */}


            {/* <!-- OUR BLOG START --> */}
            <div className="section-full p-t120  p-b90 site-bg-white">


                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">

                            <div className="masonry-wrap row d-flex">
                                {/* <!--Block one--> */}
                                <div className="masonry-item col-lg-6 col-md-12 m-b30">

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

                                {/* <!--Block two--> */}
                                <div className="masonry-item col-lg-6 col-md-12 m-b30">

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
                                                <h3 className="post-title"><a href="blog-single.html">How all this mistaken idea of denouncing
                                                    pleasure and praising pain was.</a></h3>
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

                                {/* <!--Block three--> */}
                                <div className="masonry-item col-lg-6 col-md-12 m-b30">

                                    <div className="blog-post blog-post-4-outer">
                                        <div className="wt-post-media wt-img-effect zoom-slow">
                                            <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest/bg2.jpg`} alt=""/></a>
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

                                {/* <!--Block Four--> */}
                                <div className="masonry-item col-lg-6 col-md-12 m-b30">

                                    <div className="blog-post blog-post-4-outer">
                                        <div className="wt-post-media wt-img-effect zoom-slow">
                                            <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest-2/l-2.jpg`} alt=""/></a>
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

                                {/* <!--Block Five--> */}
                                <div className="masonry-item col-lg-6 col-md-12 m-b30">

                                    <div className="blog-post blog-post-4-outer">
                                        <div className="wt-post-media wt-img-effect zoom-slow">
                                            <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest/bg3.jpg`} alt=""/></a>
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

                                {/* <!--Block Six--> */}
                                <div className="masonry-item col-lg-6 col-md-12 m-b30">

                                    <div className="blog-post blog-post-4-outer">
                                        <div className="wt-post-media wt-img-effect zoom-slow">
                                            <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest-2/l-3.jpg`} alt=""/></a>
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

                                {/* <!--Block Seven--> */}
                                <div className="masonry-item col-lg-6 col-md-12 m-b30">

                                    <div className="blog-post blog-no-image">
                                        <div className="wt-post-info">
                                            <div className="post-date"><span>02</span> Aug</div>
                                            <div className="wt-post-title ">
                                                <h3 className="post-title">
                                                    <a href="blog-single.html">Go beyond logistics, make the world go round and revolutionize</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="wt-post-text ">
                                            <p>New chip traps clusters of migrating are tumor cells  asperiortenetur, blanditiis odit.</p>
                                        </div>
                                        <div className="wt-post-readmore ">
                                            <a href="blog-single.html" className="site-button-link site-text-white">Read More</a>
                                        </div>
                                        <span className="qt-light"><img src={process.env.PUBLIC_URL+`/assets/images/quote-white.png`} alt="#"/></span>
                                    </div>

                                </div>

                            </div>

                            <div className="pagination-outer">
                                <div className="pagination-style1">
                                    <ul className="clearfix">
                                        <li className="prev"><a href="#"><span> <i className="fa fa-angle-double-left"></i> </span></a></li>
                                        <li><a href="#">1</a></li>
                                        <li className="active"><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a className="#" href="#"><i className="fa fa-ellipsis-h"></i></a></li>
                                        <li><a href="#">5</a></li>
                                        <li className="next"><a href="#"><span> <i className="fa fa-angle-double-right"></i> </span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 rightSidebar side-bar">
                            <div className="widget search-bx">

                                <form role="search" method="post">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search"/>
                                            <button className="btn" type="button" id="button-addon2"><i className="fa fa-search"></i></button>
                                    </div>
                                </form>

                            </div>

                            <div className="widget all_services_list">
                                <h4 className="section-head-small mb-4">Transport Services</h4>
                                <div className="all_services m-b30">
                                    <ul>
                                        <li><a href="services-1.html">Land Transport</a></li>
                                        <li><a href="services-1.html" className="active">Ocean Freight</a></li>
                                        <li><a href="services-1.html">Strategy Tips</a></li>
                                        <li><a href="services-1.html">Air Transport</a></li>
                                        <li><a href="services-1.html">Warehousing</a></li>
                                        <li><a href="services-1.html">Trade Advisory</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="widget recent-posts-entry">
                                <h4 className="section-head-small mb-4">Popular Post</h4>
                                <div className="section-content">
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="wt-post-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/blog/recent-blog/pic1.jpg`} alt=""/>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-header">
                                                    <span className="post-date">January 08, 2022</span>
                                                    <span className="post-title">
                                                        <a href="services-1.html">Equipment you can count on. People you can trust.</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="wt-post-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/blog/recent-blog/pic2.jpg`} alt=""/>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-header">
                                                    <span className="post-date">January 12, 2022</span>
                                                    <span className="post-title">
                                                        <a href="services-1.html">Advanced Service Functions by Air Transport</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget-post clearfix">
                                            <div className="wt-post-media">
                                                <img src={process.env.PUBLIC_URL+`/assets/images/blog/recent-blog/pic3.jpg`} alt=""/>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-header">
                                                    <span className="post-date">January 16, 2022</span>
                                                    <span className="post-title">
                                                        <a href="services-1.html">Proper arrangement for keeping the goods in the warehouse</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>



                            <div className="widget tw-sidebar-gallery-wrap">
                                <h4 className="section-head-small mb-4">Gallery</h4>
                                <div className="tw-sidebar-gallery">
                                    <ul>
                                        <li>
                                            <div className="tw-service-gallery-thumb">
                                                <a className="elem" href="images/gallery/thumb/pic1.jpg" title="Title 1" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic1.jpg">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic1.jpg`} alt=""/>
                                                        <i className="fa fa-file-image-o"></i>
                                                </a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="tw-service-gallery-thumb">
                                                <a className="elem" href="images/gallery/thumb/pic2.jpg" title="Title 2" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic2.jpg">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic2.jpg`} alt=""/>
                                                        <i className="fa fa-file-image-o"></i>
                                                </a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="tw-service-gallery-thumb ">
                                                <a className="elem" href="images/gallery/thumb/pic3.jpg" title="Title 3" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic3.jpg">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic3.jpg`} alt=""/>
                                                        <i className="fa fa-file-image-o"></i>
                                                </a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="tw-service-gallery-thumb">
                                                <a className="elem" href="images/gallery/thumb/pic4.jpg" title="Title 4" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic4.jpg">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic4.jpg`} alt=""/>
                                                        <i className="fa fa-file-image-o"></i>
                                                </a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="tw-service-gallery-thumb">
                                                <a className="elem" href="images/gallery/thumb/pic5.jpg" title="Title 5" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic5.jpg">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic5.jpg`} alt=""/>
                                                        <i className="fa fa-file-image-o"></i>
                                                </a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="tw-service-gallery-thumb">
                                                <a className="elem" href="images/gallery/thumb/pic6.jpg" title="Title 6" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic6.jpg">
                                                    <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic2.jpg`} alt=""/>
                                                        <i className="fa fa-file-image-o"></i>
                                                </a>
                                            </div>
                                        </li>

                                    </ul>

                                </div>
                            </div>

                            <div className="widget tw-sidebar-tags-wrap">
                                <h4 className="section-head-small mb-4">All Tags</h4>

                                <div className="tagcloud">
                                    <a href="#">Logistics</a>
                                    <a href="#">Company </a>
                                    <a href="#">Business</a>
                                    <a href="#">Cargo </a>
                                    <a href="#">Trucks</a>
                                    <a href="#">Delivery vans</a>
                                    <a href="#">Warehouse</a>
                                    <a href="#">Ocean</a>
                                    <a href="#">Transports</a>
                                </div>
                            </div>

                            <div className="widget tw-contact-bg-section">
                                <h4 className="section-head-small mb-4">Any Emergency?</h4>
                                <div className="tw-contact-bg-inner" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/background/bg-4.jpg')`}}>
                                    <div className="section-top">
                                        <span>Call Our 24/7 Customer Support</span>
                                        <h3 className="tw-con-number"><a href="tel:+9(465)3212055"> +9 (465) 321 20 55</a></h3>
                                    </div>
                                    <div className="section-bot">
                                        <ul>
                                            <li>
                                                <span><img src={process.env.PUBLIC_URL+`/assets/images/icons/map-marker.png`} alt=""/></span>
                                                <p>121 King Street Maxvilla , Tx USA </p>
                                            </li>
                                            <li>
                                                <span><img src={process.env.PUBLIC_URL+`/assets/images/icons/map-marker.png`} alt=""/></span>
                                                <p>themaxhelp@gmail.com</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- OUR BLOG END --> */}



        </div>
    );
}
