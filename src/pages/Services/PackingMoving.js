import React from 'react';

export default function PackingMoving() {
  return (
    <div className="col-lg-8 col-md-12">
                            <div className="service-full-info">
                                <div className="services-etc m-b30">
                                    <div className="service-category-title">
                                        <h2>Packing and Moving Services</h2>
                                    </div>
                                    <div className="wt-media">
                                        <img src={process.env.PUBLIC_URL+`/assets/images/packing-moving-large.jpg`} alt=""/> 
                                    </div> 
                                    <br/>									
                                    <p>
                                        Most reputed <b>Packers and movers</b> in India are available through Befikramove, and they have a professional understanding of packing and moving goods. <b>Packers and movers</b> have experience in handling items and goods with care. They provide prompt, reliable, and hassle-free services for all moving processes including item dispatch to the desired area. Additionally, they provide value-added services like unpacking and arranging your belongings at your new home.

                                    </p> 
                                </div>
                            </div>
                        </div>
  );
}
