import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            {/* <!-- HEADER START --> */}
            <header className="site-header header-style-3 mobile-sider-drawer-menu">

                <div className="sticky-header main-bar-wraper  navbar-expand-lg">
                    <div className="main-bar">

                        <div className="container-fluid clearfix">

                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <a href="index.html">
                                        <img src="assets/images/logo-light.png" style={{ filter: 'invert(0%)' }} alt="" />
                                    </a>
                                </div>
                            </div>

                            {/* <!-- NAV Toggle Button --> */}
                            <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar icon-bar-first"></span>
                                <span className="icon-bar icon-bar-two"></span>
                                <span className="icon-bar icon-bar-three"></span>
                            </button>

                            {/* <!-- MAIN Vav --> */}
                            <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">

                                <ul className=" nav navbar-nav">
                                    <li className='has-child'><Link to='/'>Home</Link></li>
                                    <li className='has-child'><Link to="/about">About Us</Link></li>
                                    <li className='has-child'><Link to="/services">Services</Link></li>
                                    <li className='has-child'><Link to="/gallery">Gallery</Link></li>
                                    <li className='has-child'><Link to="/branches">Our Branches</Link></li>
                                    <li className='has-child'><Link to="/contact">Contact</Link></li>
                                </ul>

                            </div>

                            {/* <!-- Header Right Section--> */}
                            <div className="extra-nav header-2-nav">
                                <div className="extra-cell">
                                    <div className="header-search">
                                        <a href="#search" className="header-search-icon"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="extra-cell">
                                    <div className="header-nav-call-section">


                                        <div className="detail">
                                            <span className="title">Free Call In U.S.A</span>
                                            <span><a href="tel:29002344241">2 900 234 4241</a></span>
                                        </div>
                                        <div className="media">
                                            <img src={process.env.PUBLIC_URL + `assets/images/call.png`} alt="#" />
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>


                    </div>

                    {/* <!-- SITE Search --> */}
                    <div id="search">
                        <span className="close"></span>
                        <form role="search" id="searchform" action="https://thewebmax.org/search" method="get" className="radius-xl">
                            <input className="form-control" name="q" type="search" placeholder="Type to search" />
                            <span className="input-group-append">
                                <button type="button" className="search-btn">
                                    <i className="fa fa-paper-plane"></i>
                                </button>
                            </span>
                        </form>
                    </div>
                </div>

            </header>
        </div>
    );
}
