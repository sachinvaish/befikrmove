import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage(props) {
    
    useEffect(()=>{
        document.title = `Befikrmove - ${props.title}`;
      },[])

    return (
        // <!-- CONTENT START -->
        <div className="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg)`}}>
                <div className="overlay-main site-bg-sky opacity-08"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">Contact us</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW -->                             */}

                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><Link to="/">Home</Link></li>
                                <li>Contact us</li>
                            </ul>
                        </div>

                        {/* <!-- BREADCRUMB ROW END -->                         */}
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END --> */}

            {/* <!-- CONTACT FORM --> */}
            <div className="section-full  p-t120 p-b120">
                <div className="section-content">
                    <div className="container">
                        
                        <div className="contact-one">
                            {/* <!-- TITLE START--> */}
                            <div className="section-head left wt-small-separator-outer">
                                <h2 className="wt-title m-b30">Join us</h2>
                            </div>
                            {/* <!-- TITLE END--> 
                            <!-- CONTACT FORM--> */}
                            <div className="contact-one-inner  site-bg-sky-blue-light">
                                <div className="row">

                                    <div className="col-lg-8 col-md-12">
                                        <div className="contact-form-outer">
                                            <form className="cons-contact-form" method="post" action="https://thewebmax.org/logitrago/form-handler2.php">

                                                <div className="row">

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group mb-3">
                                                            <input name="username" type="text" required className="form-control" placeholder="Name"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group mb-3">
                                                            <input name="email" type="text" className="form-control" required placeholder="Email"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group mb-3">
                                                            <input name="phone" type="text" className="form-control" required placeholder="Phone"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group mb-3">
                                                            <input name="subject" type="text" className="form-control" required placeholder="Subject"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="form-group mb-3">
                                                            <textarea name="message" className="form-control" rows="3" placeholder="Message"></textarea>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn-half site-button"><span>Submit Now</span><em></em></button>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12">
                                        <div className="contact-info  site-bg-dark bg-no-repeat bg-bottom-left" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/background/contact-bg.png')`}}>
                                            {/* <!-- TITLE START--> */}
                                            <div className="section-head-small white mb-4">
                                                <h3 className="wt-title">Let's get in touch</h3>
                                            </div>
                                            {/* <!-- TITLE END-->   */}

                                            <div className="contact-info-section">

                                                <div className="c-info-column">
                                                    <div className="c-info-icon fa fa-map-marker"><span></span></div>
                                                    <p>India</p>
                                                </div>

                                                <div className="c-info-column">
                                                    <div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div>
                                                    <p><a href="tel:+216-761-8331">+91 7764 076 100</a></p>
                                                </div>

                                                <div className="c-info-column">
                                                    <div className="c-info-icon fa fa-envelope-o"><span></span></div>
                                                    <p>info@befikr.com</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="gmap-outline mb-5" style={{marginTop:50}}>
                            <div className="google-map">
                                <div style={{width: '100%'}}>
                                    <iframe height="460" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.693379332997!2d76.75261881866601!3d30.38806355942656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x722e7e89081fc040!2zMzDCsDIzJzE3LjAiTiA3NsKwNDUnMjQuNyJF!5e0!3m2!1sen!2sin!4v1673661419088!5m2!1sen!2sin"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- CONTENT END --> */}
        </div>
    );
}
