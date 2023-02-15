import React, { useEffect } from 'react';

export default function LoadingUnloading(props) {

    useEffect(()=>{
        document.title = `Befikrmove - ${props.title}`;
      },[])

  return (
    <div className="col-lg-8 col-md-12">
                            <div className="service-full-info">
                                <div className="services-etc m-b30">
                                    <div className="service-category-title">
                                        <h2>Loading and Unloading Services</h2>
                                    </div>
                                    <div className="wt-media">
                                        <img src={process.env.PUBLIC_URL+`/assets/images/loading-unloading-large.jpg`} alt=""/> 
                                    </div> 
                                    <br/>									
                                    <p>
                                        Our team, owing to their vast experience, knows how to do things the right way, which will come in handy in restricted spaces and manage your household items in tight spaces. <b>Loading and unloading services</b> require good skills and workers should have knowledge of handling household items as they are fragile in nature and workers should have a good experience. Our services for loading and unloading are extremely efficient and courteous, and they will take care of your requests and support you throughout the moving process.

                                    </p> 
                                   
                                </div>
                            </div>
                        </div>
  );
}
