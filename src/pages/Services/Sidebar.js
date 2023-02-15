import React from 'react';

export default function Sidebar() {
  return (
    <div className="col-lg-4 col-md-12 rightSidebar side-bar">
                            

                            <div className="widget all_services_list">
                                <h4 className="section-head-small mb-4">Our Services</h4> 
                                <div className="all_services m-b30">
                                    <ul>
                                        <li><a href="household-shifting-services.html" className="active">Household Shifting Services</a></li>
                                        <li><a href="office-shifting-services.html" >Office Shifting Services</a></li>
                                        <li><a href="industrial-shifting-services.html">Industrial Shifting Services</a></li>
                                        <li><a href="car-carrier-services.html">Car Carrier Services</a></li>
                                        <li><a href="warehouse-services.html">Warehouse storage services</a></li>
                                        <li><a href="loading-unloading-services.html">Loading and Unloading Services</a></li>
										<li><a href="relocation-services.html">Relocation Services</a></li>
										<li><a href="packing-moving-services.html">Packing and Moving Services</a></li>
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
