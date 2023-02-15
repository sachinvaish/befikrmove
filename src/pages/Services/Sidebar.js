import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const navigate = useNavigate();

  return (
    <div className="col-lg-4 col-md-12 rightSidebar side-bar">
                            <div className="widget all_services_list">
                                <h4 className="section-head-small mb-4">Our Services</h4> 
                                <div className="all_services m-b30">
                                    <ul>
                                        <li><NavLink to={'/household-shifting-services'} activeClassName='active' >Household Shifting Services</NavLink></li>
                                        <li><NavLink to={'/office-shifting-services'} activeClassName='active'>Office Shifting Services</NavLink></li>
                                        <li><NavLink to={'/industrial-shifting-services'} activeClassName='active'>Industrial Shifting Services</NavLink></li>
                                        <li><NavLink to={'/car-carrier-services'}  activeClassName='active'>Car Carrier Services</NavLink></li>
                                        <li><NavLink to={'/warehouse-services'} activeClassName='active'>Warehouse storage services</NavLink></li>
                                        <li><NavLink to={'/loading-unloading-services'} activeClassName='active'>Loading and Unloading Services</NavLink></li>
										<li><NavLink to={'/relocation-services'} activeClassName='active'>Relocation Services</NavLink></li>
										<li><NavLink to={'/packing-moving-services'} activeClassName='active'>Packing and Moving Services</NavLink></li>
                                    </ul>
                                </div>
                            </div>
 
                            <div className="widget tw-contact-bg-section">
                                <h4 className="section-head-small mb-4">Any Emergency?</h4> 
                                <div className="tw-contact-bg-inner" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/background/bg-4.jpg')`}}>
                                   <div className="section-top">
                                       <span>Call Our 24/7 Customer Support</span>
                                       <h3 className="tw-con-number"><a href="tel:77640-76100"> 77640-76100</a></h3>
                                   </div>
                                   <div className="section-bot">
                                       <ul>
                                        <li>
                                            <span><img src={process.env.PUBLIC_URL+`/assets/images/icons/map-marker.png`} alt=""/></span>
                                            <p>India </p>
                                        </li>
                                        <li>
                                            <span><img src={process.env.PUBLIC_URL+`/assets/images/icons/map-marker.png`} alt=""/></span>
                                            <p>info@befikr.com</p>
                                        </li>
                                       </ul>
                                   </div>
                                </div>
                            </div>


                        </div>
  );
}
