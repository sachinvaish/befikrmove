import React, { useEffect } from 'react'

export default function Branches(props) {

    useEffect(()=>{
        document.title = `Befikrmove - ${props.title}`;
      },[])

  return (
        // <!-- CONTENT START -->
        <div className="page-content">

        {/* <!-- INNER PAGE BANNER --> */}
        <div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg)`}}>
            <div className="overlay-main site-bg-sky opacity-08"></div>
            <div className="container">
                <div className="wt-bnr-inr-entry">
                    <div className="banner-title-outer">
                        <div className="banner-title-name">
                            <h2 className="wt-title">Our Branches</h2>
                        </div>
                    </div>
                    {/* <!-- BREADCRUMB ROW -->                             */}

                    <div>
                        <ul className="wt-breadcrumb breadcrumb-style-2">
                            <li><a href="index.html">Home</a></li>
                            <li>Our Branches</li>
                        </ul>
                    </div>

                    {/* <!-- BREADCRUMB ROW END -->                         */}
                </div>
            </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* <!-- CONTACT FORM --> */}
        <div className="section-full  p-t120 p-b120">
            <div className="banner-title-outer">
            <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div>CORPORATE OFFICE</div>
                            </div>
                            <h2 className="wt-title">158/1/2, Gali No 11 Samta vihar Mukundpur Part 2 New Delhi 110042</h2>
                            <p className="section-head-text" style={{fontSize:'20px'}}>7764046100   |   info@befikrmove.com </p>
                        </div>
            </div>
        </div>
        {/* <!-- CONTENT END --> */}
    </div>
  )
}
