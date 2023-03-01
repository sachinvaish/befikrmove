import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DetailItem(props) {

    const { city, description, phone, address, email, location, photo } = props;
    useEffect(()=>{
        document.title = `Befikrmove - ${city}`;
    },[])

    return (
        <div className="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg')` }}>
                <div className="overlay-main site-bg-sky opacity-08"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">Packers Movers In {city}</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW -->                             */}

                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><Link to='/' >Home</Link></li>
                                <li><Link to='/branches' >Branches</Link></li>
                                <li>Packers Movers In {city}</li>
                            </ul>
                        </div>

                        {/* <!-- BREADCRUMB ROW END -->                         */}
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END --> */}



            {/* <!-- OUR BLOG START --> */}
            <div className="section-full  p-t120 p-b90 bg-white">
                <div className="container">

                    {/* <!-- BLOG SECTION START --> */}
                    <div className="section-content">
                        <div className="row d-flex justify-content-center">

                            <div className="col-lg-8 col-md-12">
                                {/* <!-- BLOG START --> */}
                                <div className="blog-post-single-outer">
                                    <div className="blog-post-single bg-white">

                                        <div className="wt-post-info">
                                            <div className="wt-post-discription">

                                                <p>
                                                    {description}    
                                                </p>


                                            </div>
                                            <div className="wt-post-media m-b30">
                                                <iframe src={location}
                                                width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12 rightSidebar side-bar">

                                <div className="widget tw-contact-bg-section">

                                    <div className="tw-contact-bg-inner" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/background/bg-4.jpg')` }}>
                                        <div className="section-top">
                                            {photo && <img src={process.env.PUBLIC_URL+`/assets/branches/${city.toLowerCase()}.png`} alt="R" className="avatar" />}
                                            <h3 className="tw-con-number"><a href={`tel:${phone}`}> {phone}</a></h3>
                                        </div>
                                        <div className="section-bot">
                                            <ul>
                                                <li>
                                                    <span><img src={process.env.PUBLIC_URL+`/assets/images/icons/map-marker.png`} alt=""/></span>
                                                    <p>{address} </p>
                                                </li>
                                                <li>
                                                    <span><img src={process.env.PUBLIC_URL+`/assets/images/icons/map-marker.png`} alt=""/></span>
                                                    <p>{email}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>
            {/* <!-- OUR BLOG END -->           */}


        </div>
    );
}
