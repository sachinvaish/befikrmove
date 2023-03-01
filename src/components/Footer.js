import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (<>
        <div className="section-full p-t20 p-b20 tw-booking-area" style={{backgroundColor:'red'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sitemessage">Agra | Allahabad | Aurangabad | Aurangabad | Bangalore | Bhagalpur | Bhilai | Bhopal | Bhubneswar | Bilaspur | Chandigarh | Chennai | Dehradun | Delhi | Dhanbad | Faridabad | Gandhidham | Ghaziabad | Gurgaon | Guwahati | Gwalior | Haridwar | Hyderabad | Indore | Jabalpur | Jaipur | Jammu | Jhansi | Jharsuguda | Jodhpur | Kanpur | Kolkata | Lucknow | Ludhiana | Meerut | Mumbai | Muzaffarpur | Mysore | Nagpur | Nashik | Patna | Pune | Raigarh | Raipur | Rajkot | Ranchi | Rudrapur | Salem | Samastipur | Sambalpur | Satna | Sonbhadra | Surat | Sonbhadra | Sambalpur | Udaipur | Vadodara | Varanasi | Vijayawada | Visakhapatnam | Zirakpur</div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer-dark">

            <div className="ftr-bg" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/f-bg.jpg')` }}>
                {/* <!-- FOOTER BLOCKES START -->   */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6">

                                <div className="widget widget_about">
                                    <div className="logo-footer clearfix">
                                        <a href="index.html"><img src={process.env.PUBLIC_URL + `/assets/images/logo-dark.png`} alt="" /></a>
                                    </div>
                                    <p>One of the most renowned moving companies in India is Befikrmove Professional Packers & Movers.</p>
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
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/services">Services</NavLink></li>
                                        <li><NavLink to="/blog">Blog</NavLink></li>
                                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="widget widget_services ftr-list-center">
                                    <h3 className="widget-title">Services</h3>
                                    <ul>
                                        <li><NavLink to={'/household-shifting-services'} >Household Shifting Services</NavLink></li>
                                        <li><NavLink to={'/office-shifting-services'} >Office Shifting Services</NavLink></li>
                                        <li><NavLink to={'/industrial-shifting-services'}>Industrial Shifting Services</NavLink></li>
                                        <li><NavLink to={'/car-carrier-services'}>Car Carrier Services</NavLink></li>
                                        <li><NavLink to={'/warehouse-services'} >Warehouse storage services</NavLink></li>
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
                                <span className="copyrights-text">Copyright © 2023 by Befikrmove. All Rights Reserved.</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </footer>
    </>
    );
}
