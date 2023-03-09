import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Gallery(props) {
    useEffect(()=>{
        document.title = `Befikrmove - ${props.title}`;
      },[])

    return (
        <div className="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg')`}}>
                <div className="overlay-main site-bg-sky opacity-08"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">Gallery</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW --> */}

                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><Link to="/">Home</Link></li>
                                <li>Gallery</li>
                            </ul>
                        </div>

                        {/* <!-- BREADCRUMB ROW END --> */}
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END --> */}

            {/* <!-- SERVICES SECTION START --> */}
            <div className="section-full p-t120 p-b90 site-bg-gray tw-service-gallery-style1-area tyre-mark-bg">

                <div className="services-gallery-block-outer2">
                    <div className="container">

                        {/* <!-- TITLE START--> */}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div>Gallery</div>
                            </div>

                        </div>
                        {/* <!-- TITLE END--> */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="widget tw-sidebar-gallery-wrap">
                                    <div className="tw-sidebar-gallery">
                                        <ul>
                                            <li>
                                                <div className="tw-service-gallery-thumb" >
                                                    <a className="elem" href="images/gallery/thumb/pic1.jpg" title="Title 1" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic1.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic1.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="tw-service-gallery-thumb">
                                                    <a className="elem" href="images/gallery/thumb/pic2.jpg" title="Title 2" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic2.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic2.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="tw-service-gallery-thumb ">
                                                    <a className="elem" href="images/gallery/thumb/pic3.jpg" title="Title 3" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic3.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic3.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="tw-service-gallery-thumb">
                                                    <a className="elem" href="images/gallery/thumb/pic4.jpg" title="Title 4" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic4.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic4.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="tw-service-gallery-thumb">
                                                    <a className="elem" href="images/gallery/thumb/pic5.jpg" title="Title 5" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic5.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic5.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="tw-service-gallery-thumb">
                                                    <a className="elem" href="images/gallery/thumb/pic6.jpg" title="Title 6" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic6.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic6.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="tw-service-gallery-thumb">
                                                    <a className="elem" href="images/gallery/thumb/pic1.jpg" title="Title 1" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic7.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic7.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="tw-service-gallery-thumb">
                                                    <a className="elem" href="images/gallery/thumb/pic2.jpg" title="Title 2" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic8.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic8.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="tw-service-gallery-thumb ">
                                                    <a className="elem" href="images/gallery/thumb/pic3.jpg" title="Title 3" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic9.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic9.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="tw-service-gallery-thumb">
                                                    <a className="elem" href="images/gallery/thumb/pic4.jpg" title="Title 4" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic10.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic10.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="tw-service-gallery-thumb">
                                                    <a className="elem" href="images/gallery/thumb/pic5.jpg" title="Title 5" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic11.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic11.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="tw-service-gallery-thumb">
                                                    <a className="elem" href="images/gallery/thumb/pic6.jpg" title="Title 6" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic12.jpg">
                                                        <img src={process.env.PUBLIC_URL+`/assets/images/gallery/thumb/pic12.jpeg`} alt="" style={{objectFit:'cover', aspectRatio:'1/1', width:'auto', height:'auto'}}/>
                                                            <i className="fa fa-file-image-o"></i>
                                                    </a>
                                                </div>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
            {/* <!-- SERVICES SECTION END --> */}


        </div>
    );
}
