import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Branches(props) {
    
    const navigate = useNavigate();
    useEffect(() => {
        document.title = `Befikrmove - ${props.title}`;
    }, [])

    return (
        // <!-- CONTENT START -->
        <div className="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/banner/1.jpg)` }}>
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

            {/* <!-- SERVICES SECTION START --> */}
            <div className="section-full p-t120 p-b90 site-bg-gray tw-service-gallery-style3-area">

                <div className="services-gallery-block-outer3">
                    <div className="container">
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div>CORPORATE OFFICE</div>
                            </div>
                            <h2 className="wt-title">158/1/2, Gali No 11 Samta vihar Mukundpur Part 2 New Delhi 110042</h2>
                            <p className="section-head-text" style={{ fontSize: '20px' }}>7764046100   |   info@befikrmove.com </p>
                        </div>

                        {/* <!-- TITLE START--> */}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div>All Branches</div>
                            </div>
                        </div>
                        {/* <!-- TITLE END--> */}

                        <div className="section-content">
                            <div className="services-gallery-style3">
                                <div className="row">

                                    {/* <!-- COLUMNS 1 -->  */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Patna')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>PATNA</h3>
                                                <p>Ghana Colony Road Ramakrishna nagar Kankarbagh 2 PATNA BIHAR 800020</p>
                                                <a href="tel:7979767957" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 7979767957</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:patna@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> patna@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Agra')}}className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Agra</h3>
                                                <p>Shop 457/6, Tp Nagar, Agra, Uttar Pradesh 282002</p>
                                                <a href="tel:8126657772" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 8126657772</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:agra@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> agra@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Allahabad')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Allahabad</h3>
                                                <p> 951 kalyanidavi opp kalyanidavi temple, allahabad</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Aurangabad')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Aurangabad MH</h3>
                                                <p>Dharmatma Complax, Avishkar Chowk N-5 Cidco, Opp. Swami Smarth Tea House, Aurangabad -431003</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Bangalore')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Bangalore</h3>
                                                <p>#41, Jai Bharat Parking TCI Bus stop 18km Tumkur Road, Madavara Bangaluru Karnatka 562162</p>
                                                <a href="tel:9886526564" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9886526564</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:bangalore@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> bangalore@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Bareilly')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Bareilly</h3>
                                                <p>HO Rampur Road, Opp Satya Prakash park, leechi bagh Qilla, Bareilly-243003</p>
                                                <a href="tel:9368316351" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9368316351</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:bareilly@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> bareilly@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Vadodara')}}  className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Vadodara</h3>
                                                <p>Shop No-9,Nr S R Petrol Pump, Sayajipura, Ajwa Road Bridge Village, Ajwa Road, Vadodara</p>
                                                <a href="tel:9328970777" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9328970777</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:vadodara@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> vadodara@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Bhagalpur')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Bhagalpur</h3>
                                                <p>Satyam Complex, Radha Rani Sinha Road, Bhagalpur, Bihar-812001</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Bhilai')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Bhilai</h3>
                                                <p>Church Road Supela Panch Rastha Bhilai, Chattisgarh 490023</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Bhopal')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Bhopal</h3>
                                                <p>52 rajnagar colony near truba college karoand, bhopal 462030</p>
                                                <a href="tel:9589584986" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9589584986</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:bhopal@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> bhopal@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Bhubneswar')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Bhubneswar</h3>
                                                <p>26/2789,Cenal Road,Shantinagar,Jharapara, bhubaneswar, Odisha-751006</p>
                                                <a href="tel:9078779231" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9078779231</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:bhubneswar@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> bhubneswar@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Bilaspur')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Bilaspur</h3>
                                                <p>109, Sindhi Colony, Mandir Chowk, beside Equitas Small Finance Bank Limited, Jarhabhata, Bilaspur, Chhattisgarh 495001</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Chennai')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Chennai</h3>
                                                <p>74-A, Velachery Main Rd, Velachery, Chennai-600042</p>
                                                <a href="tel:9176009933" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9176009933</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:chennai@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> chennai@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Chandigarh')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Chandigarh</h3>
                                                <p>405 pipli wala town Manimajra, chandigarh 160101</p>
                                                <a href="tel:8591858064" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 8591858064</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:chandigarh@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> chandigarh@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Dehradun')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Dehradun</h3>
                                                <p>F-103, Saharnpur road,transport Nagar, Dehradun 248002</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Dhanbad')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Dhanbad</h3>
                                                <p>Matkuria, Katras Rd, Near Mahindra Showroom, Jawahar Nagar, Dhanbad, Jharkhand 826001</p>
                                                <a href="tel:9308794171" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9308794171</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:dhanbad@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> dhanbad@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Faridabad')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Faridabad</h3>
                                                <p>B-1010, Green fields Colony, Sector 42/43, Faridabad-121009,Haryana</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Gandhidham')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Gandhidham</h3>
                                                <p>Plot No 3, Ashapura Park, Meghpar, Bharuchi, Gandhidham</p>
                                                <a href="tel:936834897" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 936834897</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:gandhidham@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> gandhidham@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Ghaziabad')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Ghaziabad</h3>
                                                <p>63 Ground Floor Vrindavan Garden Near Raj Bagh Metro Sahibabad, Ghaziabad</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Gurgaon')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Gurgaon</h3>
                                                <p>2893/4, 3rd Floor, Chuna Mandi, Pahar Ganj, New Delhi-55</p>
                                                <a href="tel:9212672222" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9212672222</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:gurgaon@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> gurgaon@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Guwahati')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Guwahati</h3>
                                                <p>sonkuchi path, near spring dale I school, beharbari charali, NH37, Guwahati, Assam-781029</p>
                                                <a href="tel:6001740527" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 6001740527</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:guwahati@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> guwahati@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Gwalior')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Gwalior</h3>
                                                <p>G-7 The Legacy Plaza, Airport Road, Gwalior, Madhya Pradesh 474005</p>
                                                <a href="tel:9584691919" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9584691919</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:gwalior@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> gwalior@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Haridwar')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Haridwar</h3>
                                                <p>HP Petrol Pump SIDCUL Bypass, Bhadrabad Haridwar – 249402</p>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Hyderabad')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Hyderabad</h3>
                                                <p>2-170/a youth coloney old Haffezpet Miyapur, Hyderabad -500049 </p>
                                                <a href="tel:9394949408" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9394949408</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:Hyderabad@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> Hyderabad@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Indore')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Indore</h3>
                                                <p>shop.6 moulika homes kalp KanDhenu colony, opp. velocity multiplex, Bhusa Mandi, Indore-452010</p>
                                                <a href="tel:9303024555" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9303024555</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:indore@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> indore@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Jabalpur')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Jabalpur</h3>
                                                <p>Shop No 5, Karondanala Near Katni By Pass, Tiraha up Stair of Punjabi Tadka Resturants, Madhya Pradesh 482004</p>
                                                <a href="tel:9285187700" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9285187700</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:jabalpur@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> jabalpur@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/jaipur')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>jaipur</h3>
                                                <p>Plot No. 5, 200 Bypass Ajmer Road, Jivan Vihar Colony,Opp. Karni Vihar, Police Station, Jaipur, Rajasthan 302021</p>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:jaipur@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> jaipur@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/JAMMU')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>JAMMU</h3>
                                                <p>444, Main GT Road, Samba, Bari Brahmana, Jammu and Kashmir - 184121</p>
                                                <a href="tel:9501131472" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9501131472</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:jammu@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> jammu@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/JHANSI')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>JHANSI</h3>
                                                <p>H no 1733 khati baba tube well road near mount litra zee school, Jhansi</p>
                                                <a href="tel:9584691919" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9584691919</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/JHARSUGUDA')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>JHARSUGUDA</h3>
                                                <p>Dung Dung Complex, Shop No-10, Bombay Chowk, Jharsuguda Odisha 768203</p>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/jodhpur')}}  className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>jodhpur</h3>
                                                <p>Basni Police Station, Near Govt. School jodhpur Rajasthan - 342005</p>
                                                <a href="tel:9799233390" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9799233390</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:jodhpur@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> jodhpur@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/KAKINADA')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>KAKINADA</h3>
                                                <p>11-11-2/A, Above Central Bank of India, Nookalamma Street, beside Ravichandra Hospital, Rama Rao Peta, Kakinada, Andhra Pradesh 533004</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:patna@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/KANPUR')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>KANPUR</h3>
                                                <p>S 3250, Avas Vikas Number 3, e.w, Kalyanpur, Kanpur, Uttar Pradesh 208017</p>
                                                <a href="tel:8736006262" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 8736006262</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:kanpur@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> kanpur@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Kolkata')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Kolkata</h3>
                                                <p>35B, Majlish Ara Road, Mini Park, Kolkata - 700041.</p>
                                                <a href="tel:7014095286" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 7014095286</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:kolkata@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> kolkata@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Lucknow')}}  className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Lucknow </h3>
                                                <p>A-107, Z A Complex Ground Floor, Kalyanpur,Opposite - Vridha Ashram, Near Ram Dharam Kanta,,Lucknow, Uttar Pradesh 226022</p>
                                                <a href="tel:9807777720" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9807777720</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:Lucknow@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> Lucknow@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Ludhiana')}}  className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Ludhiana</h3>
                                                <p>SCO-7, First Floor, Transport Nagar, Ludhiana - 141003, Punjab</p>
                                                <a href="tel:9888322510" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9888322510</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:ludhiana@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> ludhiana@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Mysore')}}  className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Mysore</h3>
                                                <p>148, Site No 06, Basaveshwar Nagar, 1st Stage Hebbala, Post, Metagalli Mysore 570016</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:mysore@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> mysore@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Meerut')}}  className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Meerut</h3>
                                                <p>192/3, near Shri Durga Mata Mandir, Sector 3, Shastri Nagar, Meerut, Uttar Pradesh 250004</p>
                                                <a href="tel:9027442551" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9027442551</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:meerut@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> meerut@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Mumbai')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Mumbai</h3>
                                                <p>13, 1st Floor, Rolan Compound, Ag Link Road, Next to BMC School Near Dhanlaxmi Building, Sakinaka 400072 mumbai</p>
                                                <a href="tel:7988475948" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 7988475948</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:mumbai@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> mumbai@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/NaviMumbai')}}  className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Navi Mumbai</h3>
                                                <p>G -01, Plot No. 178, Ghansoli Navi Mumba</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/NaviMumbai2')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Navi Mumbai 2</h3>
                                                <p>14, 2nd floor, rocal depo near DNS bank govarsh wadi dombivalli (east),Thane, Maharashtra -421201</p>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Nagpur')}}  className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Nagpur</h3>
                                                <p> 40, 1st Floor, Suri Complex, Adarsh Nagar, Tawakkal Layout,Wadi, Nagpur 440023</p>
                                                <a href="tel:9325235587" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9325235587</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:nagpur@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> nagpur@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Nashik')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Nashik</h3>
                                                <p>8, gajlaxmi rowhouse, Muralidhar Nagar,pathardi, phata,Nashik 422010</p>
                                                <a href="tel:9371882040" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9371882040</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:nashik@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> nashik@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/PUNE')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>PUNE</h3>
                                                <p>Office No 3, Plot no 69, Sector no 23 Transport nagar Nigdi Pune-44</p>
                                                <a href="tel:9860127272" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9860127272</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:pune@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> pune@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Raigarh')}}  className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Raigarh</h3>
                                                <p>Shop No16,Sarangarh bus stand, sangitarai road, Raigarh</p>
                                                <a href="tel:9300808342" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9300808342</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:raigarh@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> raigarh@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Raipur')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Raipur</h3>
                                                <p>Ganga Vihar Colony, Amlidih, Krishaknagar, Raipur-Chhattisgarh - 492006, Near Government School</p>
                                                <a href="tel:8421099346" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 8421099346</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:raipur@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> raipur@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/RANCHI')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>RANCHI</h3>
                                                <p>Near, Booty More Rd, Gautam Green City, Vijay Nagar, Ohdar Village, Ranchi, Jharkhand 835217</p>
                                                <a href="tel:9113417469" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9113417469</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:ranchi@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> ranchi@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Rudrapur')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Rudrapur</h3>
                                                <p>Preet vihar colony near St marks school, Delhi-Rampur road, Rudrapur-263153</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/SALEM')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>SALEM</h3>
                                                <p>NO 3, MANIMEKALI COMPLEX, TRICHY MAIN ROAD, SEELNAIKAPATTY, SALEM, TAMIL NADU, 636201</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/SAMBALPUR')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>SAMBALPUR</h3>
                                                <p>NH-6, Bareipali,Near Reliance Petrol Pump (Map), Sambalpur - 768006</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/Samastipur')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>Samastipur</h3>
                                                <p>Near indian Oil Petrol Pump Tazpur Road Mushrigharari Samastipur 84101</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/SATNA')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>SATNA</h3>
                                                <p>Jeevan Jyoti Colony Rd, behind IDBI Bank, Shakti Vihar, Jeevan Jyoti Colony, Satna, Madhya Pradesh 485001</p>
                                                <a href="tel:9644343111" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9644343111</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:satna@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> satna@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/SILIGURI')}}  className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>SILIGURI</h3>
                                                <p>C/2, Jajodia Market, Station Feeder Road, Milanpally, Siliguri- 734005</p>
                                                <a href="tel:8637504070" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 8637504070</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:siliguri@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> siliguri@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/SURAT')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>SURAT</h3>
                                                <p>46,sai nagar housing soc dindoli Surat, Gujarat 394210</p>
                                                <a href="tel:9898662924" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9898662924</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:surat@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> surat@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/SONEBHADRA')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>SONEBHADRA</h3>
                                                <p>T P Nager, Unnamed Road, near Kashi More, Anpara, Sonebhadra Uttar Pradesh 231225</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/UDAIPUR')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>UDAIPUR</h3>
                                                <p> 38 Ekling Colony, Behind Reliance Fresh, Hiran magri Sector 3, Udaipur - 313001</p>
                                                <a href="tel:9329324555" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 9329324555</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:udaipur@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> udaipur@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/VARANASI')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>VARANASI</h3>
                                                <p>Maheshpur Block Road , Lahartara , Varanasi 221106</p>

                                                <a style={{ textTransform: "lowercase" }} href="mailto:info@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> info@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/VIJAYAWADA')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>VIJAYAWADA</h3>
                                                <p>SHOP.NO-14, GROUND FLOOR ,H.R.T COMPLEX,HOUSING BOARD COLONY, BHAVANIPURAM,VIJAYAWADA -520012(AP)</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/VISAKHAPATNAM')}} className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>VISAKHAPATNAM</h3>
                                                <p>45-2-60/61, Akkayyapalem 80 Feet Rd, Beside Kendriya Vidyalayam, Ramachandra Nagar, Akkayyapalem, Visakhapatnam, Andhra Pradesh 530016</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="service-box-style3">

                                            <div className="service-content">
                                                <h3 style={{cursor:'pointer'}} onClick={()=>{navigate('/branches/ZIRAKPUR')}}  className="service-title-large"><span className="service-title-large-number"><div className="c-info-icon fa fa-map-marker"><span></span></div></span>ZIRAKPUR</h3>
                                                <p>SCO-8, Cabin no-4 , First Floor, Above On Dot Courier , Ranjan plaza, Zirakpur (140603)</p>
                                                <a href="tel:8591858064" className="site-button-2"><div className="c-info-icon fa fa-mobile-phone custome-size"><span></span></div> 8591858064</a>
                                                <a style={{ textTransform: "lowercase" }} href="mailto:zirakhpur@befikrmove.com" className="site-button-2"><div className="c-info-icon fa fa-envelope-o"><span></span></div> zirakhpur@befikrmove.com</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* // <!-- SERVICES SECTION END-- > */}
            {/* <!-- CONTENT END --> */}
        </div >
    )
}
