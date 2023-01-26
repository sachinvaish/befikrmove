import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-dark">

            {/* <!-- NEWS LETTER SECTION START --> */}
            <div className="ftr-nw-ltr site-bg-white">
                
                    <div className="ftr-nw-ltr-inner site-bg-primary">
                        <div className="container">
                            <div className="ftr-nw-img">
                                <img src={process.env.PUBLIC_URL+`/assets/images/news-l-bg.png`} alt=""/>
                            </div>
                            <div className="ftr-nw-content">
                                <div className="ftr-nw-title">Subscribe for offers and news</div>
                                <div className="ftr-nw-form">
                                    <form>
                                        <input name="news-letter" className="form-control" placeholder="Enter Your Email" type="text"/>
                                        <button className="ftr-nw-subcribe-btn">Subscribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- NEWS LETTER SECTION END --> */}

            <div className="ftr-bg"  style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/f-bg.jpg')`}}>
                {/* <!-- FOOTER BLOCKES START -->   */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                
                                <div className="widget widget_about">
                                    <div className="logo-footer clearfix">
                                        <a href="index.html"><img src={process.env.PUBLIC_URL+`/assets/images/logo-dark.png`} alt=""/></a>
                                    </div>
                                    <p>Many desktop publishing packages and web page editors now use are lorem Ipsum as their default .</p>
                                    <ul className="social-icons">
                                        <li><a href="#" className="fa fa-facebook"></a></li>
                                        <li><a href="#" className="fa fa-twitter"></a></li>
                                        <li><a href="#" className="fa fa-instagram"></a></li>
                                        <li><a href="#" className="fa fa-youtube-play"></a></li>
                                    </ul>
                                </div>                            
                                
                            </div>                        
                        
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_services ftr-list-center">
                                    <h3 className="widget-title">Quick Links</h3>
                                    <ul>
                                        <li><a href="about-1.html">About</a></li>
                                        <li><a href="services-1.html">Services</a></li>
                                        <li><a href="blog-grid.html">Blog</a></li>
                                        <li><a href="about-1.html">FAQ</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_services ftr-list-center">
                                    <h3 className="widget-title">Services</h3>
                                    <ul>
                                        <li><a href="services-detail.html">Warehouse</a></li>
                                        <li><a href="services-detail.html">Air Freight</a></li>
                                        <li><a href="services-detail.html">Ocean Freight</a></li>
                                        <li><a href="services-detail.html">Road Freight</a></li>
                                        <li><a href="services-detail.html">Packaging</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">  
                                <div className="widget widget_services ftr-list-center">
                                    <h3 className="widget-title">Community</h3>
                                    <ul>
                                        <li><a href="about-1.html">Business Consulting</a></li>
                                        <li><a href="about-1.html">Testimonials</a></li>
                                        <li><a href="about-1.html">Track Your Shipment</a></li>
                                        <li><a href="about-1.html">Privacy Policy</a></li>
                                        <li><a href="about-1.html">Terms & Condition</a></li>
                                    </ul>
                                </div>
                            </div> 

                        </div>

                    </div>
                </div>
                {/* <!-- FOOTER COPYRIGHT --> */}
                                    
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-info">
                        
                            <div className="footer-copy-right">
                                <span className="copyrights-text">Copyright © 2023 by Befikrmove | All Rights Reserve.</span>
                            </div>
                            
                        </div>
                    </div>   
                </div>
            </div>
    
        </footer>
  );
}
