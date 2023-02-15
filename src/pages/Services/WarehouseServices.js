import React from 'react';

export default function WarehouseServices() {
  return (
    <div className="col-lg-8 col-md-12">
                            <div className="service-full-info">
                                <div className="services-etc m-b30">
                                    <div className="service-category-title">
                                        <h2>Warehouse storage services</h2>
                                    </div>
                                    <div className="wt-media">
                                        <img src={process.env.PUBLIC_URL+`/assets/images/warehouse-services-large.jpg`} alt=""/> 
                                    </div> 
                                    <br/>									
                                    <p>
                                        Warehousing and storage services provide storage for the parts, machinery, automobiles, goods, and perishable goods of another business or organization. Distribution and inventory management are often included in this. This is an important service for companies that lack the resources or capacity to hold goods or that may prefer to store them in a distant or secure location. The climate in warehouses and storage facilities can be controlled, such as temperature and humidity management, to extend product lifespan or prevent item degradation.

                                    </p> 
                                   
                                </div>
                            </div>
                        </div>

  );
}
