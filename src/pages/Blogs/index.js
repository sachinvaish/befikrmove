import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Blog(props) {

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
                            <h2 className="wt-title">Blog</h2>
                        </div>
                    </div>
                    {/* <!-- BREADCRUMB ROW -->                             */}
                    
                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><Link to="/">Home</Link></li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    
                    {/* <!-- BREADCRUMB ROW END -->                         */}
                </div>
            </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}


        {/* <!-- OUR BLOG START --> */}
        <div className="section-full p-t120  p-b90 site-bg-white">
            

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">

                        <div className="masonry-wrap row d-flex">
                            {/* <!--Block one--> */}
                            <div className="masonry-item col-lg-6 col-md-12 m-b30">

                                <div className="blog-post blog-post-4-outer">
                                    <div className="wt-post-media wt-img-effect zoom-slow">
                                        <Link to="/blog/1"><img src={process.env.PUBLIC_URL+`/assets/images/blog1.png`} alt=""/></Link>
                                    </div>                                    
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date"><span>02</span>Aug</li>
                                            </ul>
                                        </div>
                                                                     
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">5 Important Factors To
                                                    Consider When Choosing The Best Packers And Movers In India</a></h3>
                                        </div>
                                        <div className="wt-post-readmore ">
                                            <Link to="/blog/1" className="site-button-link site-text-primary">Read More</Link>
                                        </div>                                        
                                    </div>                                
                                </div>

                            </div>
                            
                            {/* <!--Block two--> */}
                            <div className="masonry-item col-lg-6 col-md-12 m-b30">
                                
                                <div className="blog-post blog-post-4-outer">
                                    <div className="wt-post-media wt-img-effect zoom-slow">
                                        <Link to="/blog/2"><img src={process.env.PUBLIC_URL+`/assets/images/blog2.png`} alt=""/></Link>
                                    </div>                                     
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date"><span>08</span> Aug</li>
                                            </ul>
                                        </div>
                                                                         
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">How To Find The Right
                                                    Packers And Movers For Your Needs</a></h3>
                                        </div>
                                        <div className="wt-post-readmore ">
                                            <Link to="/blog/2" className="site-button-link site-text-primary">Read More</Link>
                                        </div>                                        
                                    </div>                                
                                </div>

                            </div>
                            
                            {/* <!--Block three--> */}
                            <div className="masonry-item col-lg-6 col-md-12 m-b30">
                                
                                <div className="blog-post blog-post-4-outer">
                                    <div className="wt-post-media wt-img-effect zoom-slow">
                                        <Link to="/blog/3"><img src={process.env.PUBLIC_URL+`/assets/images/blog3.png`} alt=""/></Link>
                                    </div>                                     
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date"><span>21</span> Aug</li>
                                            </ul>
                                        </div>
                                                                        
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">The Benefits Of Hiring
                                                    Professional Packers And Movers In India</a></h3>
                                        </div>
                                        <div className="wt-post-readmore ">
                                            <Link to="/blog/3" className="site-button-link site-text-primary">Read More</Link>
                                        </div>
                                    </div>                                
                                </div>
                                 
                            </div>
                                                        
                        </div>

                        {/* <div className="pagination-outer">
                            <div className="pagination-style1">
                                <ul className="clearfix">
                                    <li className="prev"><a href="javascript:;"><span> <i className="fa fa-angle-double-left"></i> </span></a></li>
                                    <li><a href="javascript:;">1</a></li>
                                    <li className="active"><a href="javascript:;">2</a></li>
                                    <li><a href="javascript:;">3</a></li>
                                    <li><a className="javascript:;" href="javascript:;"><i className="fa fa-ellipsis-h"></i></a></li>
                                    <li><a href="javascript:;">5</a></li>
                                    <li className="next"><a href="javascript:;"><span> <i className="fa fa-angle-double-right"></i> </span></a></li>
                                </ul>
                            </div>
                        </div> */}
                    </div>

                    <div className="col-lg-4 col-md-12 rightSidebar side-bar">
                        

                        <div className="widget recent-posts-entry">
                            <h4 className="section-head-small mb-4">Popular Post</h4>
                            <div className="section-content">
                                <div className="widget-post-bx">
                                    <div className="widget-post clearfix">
                                        <div className="wt-post-media">
                                            <img src={process.env.PUBLIC_URL+`/assets/images/blog1.png`} alt=""/>
                                        </div>
                                        <div className="wt-post-info">
                                            <div className="wt-post-header">
                                                <span className="post-date">August 02, 2022</span>
                                                <span className="post-title"> 
                                                    <a href="services-1.html">5 Important Factors To
                                                    Consider When Choosing The Best Packers And Movers In India</a>
                                                </span>
                                            </div>                                                    
                                        </div>
                                    </div>
                                    <div className="widget-post clearfix">
                                        <div className="wt-post-media">
                                            <img src={process.env.PUBLIC_URL+`/assets/images/blog2.png`} alt=""/>
                                        </div>
                                        <div className="wt-post-info">
                                            <div className="wt-post-header">
                                                <span className="post-date">August 08, 2022</span>
                                                <span className="post-title">
                                                    <a href="services-1.html">How To Find The Right
                                                    Packers And Movers For Your Needs</a>
                                                </span>
                                            </div>                                                    
                                        </div>
                                    </div>

                                    <div className="widget-post clearfix">
                                        <div className="wt-post-media">
                                            <img src={process.env.PUBLIC_URL+`/assets/images/blog3.png`} alt=""/>
                                        </div>
                                        <div className="wt-post-info">
                                            <div className="wt-post-header">
                                                <span className="post-date">August 21, 2022</span>
                                                <span className="post-title">
                                                    <a href="services-1.html">The Benefits Of Hiring
                                                    Professional Packers And Movers In India</a>
                                                </span>
                                            </div>                                                    
                                        </div>
                                    </div>
                                         
                                </div>
                            </div>
                        </div>
                        


                    </div>
                </div>
            </div>
        </div>   
        {/* <!-- OUR BLOG END --> */}
      
        
 
    </div>
    );
}
