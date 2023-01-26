import React from 'react';

export default function Faq() {
  return (
    <div className="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/banner/1.jpg)`}}>
            	<div className="overlay-main site-bg-sky opacity-08"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                    	<div className="banner-title-outer">
                        	<div className="banner-title-name">
                        		<h2 className="wt-title">FAQ</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW -->                             */}
                        
                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li><a href="index.html">Home</a></li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        
                        {/* <!-- BREADCRUMB ROW END -->                         */}
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END --> */}
           
             {/* <!-- Faq Section --> */}
             <div className="section-full p-t120 p-b90 tw-faq-area">
                <div className="container">

                    {/* <!-- TITLE START--> */}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>FAQ's</div>                                
                        </div>
                        <h2 className="wt-title">Frequently Ask Questions?</h2>
                        <p className="section-head-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the  when an printer took.</p>
                    </div>                  
                    {/* <!-- TITLE END--> */}

                    <div className="section-content">
                        <div className="tw-faq-section">
                            <div className="accordion tw-faq" id="sf-faq-accordion">
                                {/* <!--One--> */}
                                <div className="accordion-item">

                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ1" aria-expanded="false" >
                                        What is GTA in transport?
                                    </button>

                                    <div id="FAQ1" className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                        A digital interface the person causing the movement of goods uploads the relevant information prior to the commencement of movement of goods and generates e-way bill on the GST portal. Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                                        </div>
                                    </div>

                                </div>

                                {/* <!--Two--> */}
                                <div className="accordion-item">
                                
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ2" aria-expanded="false">
                                        Is lorry receipt mandatory?
                                    </button>

                                    <div id="FAQ2" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                            A digital interface the person causing the movement of goods uploads the relevant information prior to the commencement of movement of goods and generates e-way bill on the GST portal. Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                                        </div>
                                    </div>

                                </div>

                                {/* <!--Three--> */}
                                <div className="accordion-item">
                                    
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ3" aria-expanded="false">
                                        What are e-way bills?
                                    </button>

                                    <div id="FAQ3" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                            A digital interface the person causing the movement of goods uploads the relevant information prior to the commencement of movement of goods and generates e-way bill on the GST portal. Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Four--> */}
                                <div className="accordion-item">
                                    
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ4" aria-expanded="false">
                                        Can we take input on transportation?
                                    </button>

                                    <div id="FAQ4" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                            A digital interface the person causing the movement of goods uploads the relevant information prior to the commencement of movement of goods and generates e-way bill on the GST portal. Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Five--> */}
                                <div className="accordion-item">
                                    
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ5" aria-expanded="false">
                                        What is unique number in e way Bill?
                                    </button>

                                    <div id="FAQ5" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                            A digital interface the person causing the movement of goods uploads the relevant information prior to the commencement of movement of goods and generates e-way bill on the GST portal. Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Six--> */}
                                <div className="accordion-item">
                                    
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ6" aria-expanded="false">
                                        What is consignee copy?
                                    </button>

                                    <div id="FAQ6" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion">
                                        <div className="accordion-body">
                                            A digital interface the person causing the movement of goods uploads the relevant information prior to the commencement of movement of goods and generates e-way bill on the GST portal. Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Faq Categories End --> */}
         

        </div>
  );
}
