import React, { useEffect } from 'react';

export default function IndustrialShifting(props) {

    useEffect(()=>{
        document.title = `Befikrmove - ${props.title}`;
      },[])

  return (
    <div className="col-lg-8 col-md-12">
                            <div className="service-full-info">
                                <div className="services-etc m-b30">
                                    <div className="service-category-title">
                                        <h2>Industrial Shifting Services</h2>
                                    </div>
                                    <div className="wt-media">
                                        <img src={process.env.PUBLIC_URL+`/assets/images/industrial-shifting-large.jpg`} alt=""/> 
                                    </div> 
                                    <br/>									
                                    <p>
                                        The more objects that have to be moved, the more difficult the process. Domestic relocation is undoubtedly one of the most common types of moving, but large business relocation is by far the most difficult. Yes, just as people move their household products from one place to another or from one city to another for better development and betterment, there are people who move their business items in the same way. Even though industrial moving is a less specialized type of shifting Befikrmove provides <b>Industrial Shifting Services</b> all over India.

                                    </p> 
                                   
                                </div>
                            </div>
                        </div>
  );
}
