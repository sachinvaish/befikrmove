import React from 'react';

export default function HouseHoldServices() {
  return (
    <div className="col-lg-8 col-md-12">
                            <div className="service-full-info">
                                <div className="services-etc m-b30">
                                    <div className="service-category-title">
                                        <h2>Household Shifting Services</h2>
                                    </div>
                                    <div className="wt-media">
                                        <img src={process.env.PUBLIC_URL+`/assets/images/house-shifting-large.jpg`} alt=""/> 
                                    </div> 
                                    <br/>									
                                    <p>
                                        Before registering any Household Shifting Services businesses with Befikrmove, we do a thorough background check of them. We link only recognized and trusted Indian house shifting service providers. We make follow-up calls for each request to ensure that the customer experience has been meaningful. Our affiliated movers and packers promise complete services at reasonable prices and provide household shifting services across multiple Indian cities. They also guarantee door-to-door collection and delivery of your goods at both the origin and destination.
                                    </p>   
                                </div>
                            </div>
                        </div>
  );
}
