import React from 'react';
import Sidebar from './Sidebar';

export default function ServiceDetail(props) {
    const {title,service}=props;
  return (
    <div className="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg')`}}>
            	<div className="overlay-main site-bg-sky opacity-08"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                    	<div className="banner-title-outer">
                        	<div className="banner-title-name">
                        		<h2 className="wt-title">{title}</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW -->                             */}
                        
                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li><a href="index.html">Home</a></li>
                                    <li>{title}</li>
                                </ul>
                            </div>
                        
                        {/* <!-- BREADCRUMB ROW END -->                         */}
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END -->          */}

            {/* <!-- SERVICE DETAIL SECTION START --> */}
            <div className="section-full p-t120 p-b90 bg-white">
                
                <div className="container">
                    <div className="row">
                        
                        {service}

                        <Sidebar/>
                        
                    </div>                            
                </div>                                 
                
            </div>   
            {/* <!-- SERVICE DETAIL SECTION END -->  */}
     
        </div>
  );
}
