import React from 'react';

export default function Blog() {
    return (
        <div class="page-content">

        {/* <!-- INNER PAGE BANNER --> */}
        <div class="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg')`}}>
            <div class="overlay-main site-bg-sky opacity-08"></div>
            <div class="container">
                <div class="wt-bnr-inr-entry">
                    <div class="banner-title-outer">
                        <div class="banner-title-name">
                            <h2 class="wt-title">Blog</h2>
                        </div>
                    </div>
                    {/* <!-- BREADCRUMB ROW -->                             */}
                    
                        <div>
                            <ul class="wt-breadcrumb breadcrumb-style-2">
                                <li><a href="index.html">Home</a></li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    
                    {/* <!-- BREADCRUMB ROW END -->                         */}
                </div>
            </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}


        {/* <!-- OUR BLOG START --> */}
        <div class="section-full p-t120  p-b90 site-bg-white">
            

            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">

                        <div class="masonry-wrap row d-flex">
                            {/* <!--Block one--> */}
                            <div class="masonry-item col-lg-6 col-md-12 m-b30">

                                <div class="blog-post blog-post-4-outer">
                                    <div class="wt-post-media wt-img-effect zoom-slow">
                                        <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest/bg1.jpg`} alt=""/></a>
                                    </div>                                    
                                    <div class="wt-post-info">
                                        <div class="wt-post-meta ">
                                            <ul>
                                                <li class="post-date"><span>02</span>Aug</li>
                                            </ul>
                                        </div>
                                                                     
                                        <div class="wt-post-title ">
                                            <h3 class="post-title"><a href="blog-single.html">At the end of the day, going forward, a 
                                                new normal that has evolved from.</a></h3>
                                        </div>
                                        <div class="wt-post-text ">
                                            <p>
                                                New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                            </p>
                                        </div>
                                        <div class="wt-post-readmore ">
                                            <a href="blog-single.html" class="site-button-link site-text-primary">Read More</a>
                                        </div>                                        
                                    </div>                                
                                </div>

                            </div>
                            
                            {/* <!--Block two--> */}
                            <div class="masonry-item col-lg-6 col-md-12 m-b30">
                                
                                <div class="blog-post blog-post-4-outer">
                                    <div class="wt-post-media wt-img-effect zoom-slow">
                                        <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest-2/l-1.jpg`} alt=""/></a>
                                    </div>                                     
                                    <div class="wt-post-info">
                                        <div class="wt-post-meta ">
                                            <ul>
                                                <li class="post-date"><span>08</span> Aug</li>
                                            </ul>
                                        </div>
                                                                         
                                        <div class="wt-post-title ">
                                            <h3 class="post-title"><a href="blog-single.html">How all this mistaken idea of denouncing
                                                pleasure and praising pain was.</a></h3>
                                        </div>
                                        <div class="wt-post-text ">
                                            <p>
                                                New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                            </p>
                                        </div>
                                        <div class="wt-post-readmore ">
                                            <a href="blog-single.html" class="site-button-link site-text-primary">Read More</a>
                                        </div>                                        
                                    </div>                                
                                </div>

                            </div>
                            
                            {/* <!--Block three--> */}
                            <div class="masonry-item col-lg-6 col-md-12 m-b30">
                                
                                <div class="blog-post blog-post-4-outer">
                                    <div class="wt-post-media wt-img-effect zoom-slow">
                                        <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest/bg2.jpg`} alt=""/></a>
                                    </div>                                     
                                    <div class="wt-post-info">
                                        <div class="wt-post-meta ">
                                            <ul>
                                                <li class="post-date"><span>21</span> Aug</li>
                                            </ul>
                                        </div>
                                                                        
                                        <div class="wt-post-title ">
                                            <h3 class="post-title"><a href="blog-single.html">Going forward, a new normal that has 
                                                evolved from generation.</a></h3>
                                        </div>
                                        <div class="wt-post-text ">
                                            <p>
                                                New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                            </p>
                                        </div>
                                        <div class="wt-post-readmore ">
                                            <a href="blog-single.html" class="site-button-link site-text-primary">Read More</a>
                                        </div>
                                    </div>                                
                                </div>
                                 
                            </div>
                            
                             {/* <!--Block Four--> */}
                            <div class="masonry-item col-lg-6 col-md-12 m-b30">

                                <div class="blog-post blog-post-4-outer">
                                    <div class="wt-post-media wt-img-effect zoom-slow">
                                        <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest-2/l-2.jpg`} alt=""/></a>
                                    </div>                                    
                                    <div class="wt-post-info">
                                        <div class="wt-post-meta ">
                                            <ul>
                                                <li class="post-date"><span>02</span>Aug</li>
                                            </ul>
                                        </div>
                                                                     
                                        <div class="wt-post-title ">
                                            <h3 class="post-title"><a href="blog-single.html">At the end of the day, going forward, a
                                                new normal that has evolved from.</a></h3>
                                        </div>
                                        <div class="wt-post-text ">
                                            <p>
                                                New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                            </p>
                                        </div>
                                        <div class="wt-post-readmore ">
                                            <a href="blog-single.html" class="site-button-link site-text-primary">Read More</a>
                                        </div>                                        
                                    </div>                                
                                </div>

                            </div>
                            
                            {/* <!--Block Five--> */}
                            <div class="masonry-item col-lg-6 col-md-12 m-b30">
                                
                                <div class="blog-post blog-post-4-outer">
                                    <div class="wt-post-media wt-img-effect zoom-slow">
                                        <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest/bg3.jpg`} alt=""/></a>
                                    </div>                                     
                                    <div class="wt-post-info">
                                        <div class="wt-post-meta ">
                                            <ul>
                                                <li class="post-date"><span>08</span> Aug</li>
                                            </ul>
                                        </div>
                                                                         
                                        <div class="wt-post-title ">
                                            <h3 class="post-title"><a href="blog-single.html">How all this mistaken idea denouncing pleasure and praising pain was.</a></h3>
                                        </div>
                                        <div class="wt-post-text ">
                                            <p>
                                                New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                            </p>
                                        </div>
                                        <div class="wt-post-readmore ">
                                            <a href="blog-single.html" class="site-button-link site-text-primary">Read More</a>
                                        </div>                                        
                                    </div>                                
                                </div>

                            </div>
                            
                            {/* <!--Block Six--> */}
                            <div class="masonry-item col-lg-6 col-md-12 m-b30">
                                
                                <div class="blog-post blog-post-4-outer">
                                    <div class="wt-post-media wt-img-effect zoom-slow">
                                        <a href="blog-single.html"><img src={process.env.PUBLIC_URL+`/assets/images/blog/latest-2/l-3.jpg`} alt=""/></a>
                                    </div>                                     
                                    <div class="wt-post-info">
                                        <div class="wt-post-meta ">
                                            <ul>
                                                <li class="post-date"><span>21</span> Aug</li>
                                            </ul>
                                        </div>
                                                                        
                                        <div class="wt-post-title ">
                                            <h3 class="post-title"><a href="blog-single.html">Going forward, a new normal that has 
                                                evolved from generation.</a></h3>
                                        </div>
                                        <div class="wt-post-text ">
                                            <p>
                                                New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                            </p>
                                        </div>
                                        <div class="wt-post-readmore ">
                                            <a href="blog-single.html" class="site-button-link site-text-primary">Read More</a>
                                        </div>
                                    </div>                                
                                </div>

                            </div>

                            {/* <!--Block Seven--> */}
                            <div class="masonry-item col-lg-6 col-md-12 m-b30">
                                
                                <div class="blog-post blog-no-image">
                                    <div class="wt-post-info">
                                        <div class="post-date"><span>02</span> Aug</div>
                                        <div class="wt-post-title ">
                                            <h3 class="post-title">
                                                <a href="blog-single.html">Go beyond logistics, make the world go round and revolutionize</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="wt-post-text ">
                                        <p>New chip traps clusters of migrating are tumor cells  asperiortenetur, blanditiis odit.</p>
                                    </div>
                                    <div class="wt-post-readmore ">
                                        <a href="blog-single.html" class="site-button-link site-text-white">Read More</a>
                                    </div>
                                    <span class="qt-light"><img src={process.env.PUBLIC_URL+`/assets/images/quote-white.png`} alt="#"/></span>
                                </div>

                            </div>
                                                        
                        </div>

                        <div class="pagination-outer">
                            <div class="pagination-style1">
                                <ul class="clearfix">
                                    <li class="prev"><a href="javascript:;"><span> <i class="fa fa-angle-double-left"></i> </span></a></li>
                                    <li><a href="javascript:;">1</a></li>
                                    <li class="active"><a href="javascript:;">2</a></li>
                                    <li><a href="javascript:;">3</a></li>
                                    <li><a class="javascript:;" href="javascript:;"><i class="fa fa-ellipsis-h"></i></a></li>
                                    <li><a href="javascript:;">5</a></li>
                                    <li class="next"><a href="javascript:;"><span> <i class="fa fa-angle-double-right"></i> </span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-12 rightSidebar side-bar">
                        

                        <div class="widget recent-posts-entry">
                            <h4 class="section-head-small mb-4">Popular Post</h4>
                            <div class="section-content">
                                <div class="widget-post-bx">
                                    <div class="widget-post clearfix">
                                        <div class="wt-post-media">
                                            <img src={process.env.PUBLIC_URL+`/assets/images/blog/recent-blog/pic1.jpg`} alt=""/>
                                        </div>
                                        <div class="wt-post-info">
                                            <div class="wt-post-header">
                                                <span class="post-date">January 08, 2022</span>
                                                <span class="post-title"> 
                                                    <a href="services-1.html">Equipment you can count on. People you can trust.</a>
                                                </span>
                                            </div>                                                    
                                        </div>
                                    </div>
                                    <div class="widget-post clearfix">
                                        <div class="wt-post-media">
                                            <img src={process.env.PUBLIC_URL+`/assets/images/blog/recent-blog/pic2.jpg`} alt=""/>
                                        </div>
                                        <div class="wt-post-info">
                                            <div class="wt-post-header">
                                                <span class="post-date">January 12, 2022</span>
                                                <span class="post-title">
                                                    <a href="services-1.html">Advanced Service Functions by Air Transport</a>
                                                </span>
                                            </div>                                                    
                                        </div>
                                    </div>

                                    <div class="widget-post clearfix">
                                        <div class="wt-post-media">
                                            <img src={process.env.PUBLIC_URL+`/assets/images/blog/recent-blog/pic3.jpg`} alt=""/>
                                        </div>
                                        <div class="wt-post-info">
                                            <div class="wt-post-header">
                                                <span class="post-date">January 16, 2022</span>
                                                <span class="post-title">
                                                    <a href="services-1.html">Proper arrangement for keeping the goods in the warehouse</a>
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
