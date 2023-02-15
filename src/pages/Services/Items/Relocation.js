import React, { useEffect } from 'react';

export default function Relocation(props) {

    useEffect(()=>{
        document.title = `Befikrmove - ${props.title}`;
      },[])

  return (
    <div className="col-lg-8 col-md-12">
                            <div className="service-full-info">
                                <div className="services-etc m-b30">
                                    <div className="service-category-title">
                                        <h2>Relocation Services</h2>
                                    </div>
                                    <div className="wt-media">
                                        <img src={process.env.PUBLIC_URL+`/assets/images/relocation-large.jpg`} alt=""/> 
                                    </div> 
                                    <br/>									
                                    <p>
                                        To facilitate safe and easy relocation, Befikrmove <b>Relocation Services</b> remains loyal to its primary focus: the client. Regardless of the size of the operation, whether it may involve moving a home or a large corporation, you can be assured that quality requirements will be met from packing to delivery. Again, from the first sales call to completion and our customers' satisfaction, we offer the same unwavering devotion to the highest service standards.

                                    </p> 
                                   
                                </div>
                            </div>
                        </div>
  );
}
