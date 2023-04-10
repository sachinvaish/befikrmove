import React from 'react';
import './Fab.css';
import { Helmet } from "react-helmet"
import $ from 'jquery';

$('#hamburger').click(function() {
    $('#hamburger').toggleClass('show');
    $('#faboverlay').toggleClass('show');
    $('.fabnav').toggleClass('show');
    $('.fiber').toggleClass('show');
});
$('#faboverlay').click(function() {
    $('#hamburger').toggleClass('show');
    $('#faboverlay').toggleClass('show');
    $('.fabnav').toggleClass('show');
    $('.fiber').toggleClass('show');
});

function setClose() {
    localStorage.setItem("qtmodal", "hide");
}

function showModal() {
    $("#qteModal").modal("show");
}

// $(function(){
if (localStorage.getItem('qtmodal') != 'hide') {
    var myTimeout = setTimeout(showModal, 7000);
} else {
                var myTimeout = setTimeout(showModal, 15000);
        }
// var current = location.href;
// $('nav li a').each(function() {
//     var $this = $(this);
//     if ($this.attr('href') == current) {
//         $this.addClass('active');
//     }
// })

function modalStop() {
    clearTimeout(myTimeout);
}
// });

export default function Fab() {
  return (
    <>
    <Helmet>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://ompackersindia.com/assets/css/main.css?v=4.0" type="text/css" media="all"/>
    <script type="text/javascript" src="https://ompackersindia.com/assets/js/vendor/modernizr-3.5.0.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
    <script type="text/javascript" src="https://ompackersindia.com/assets/js/main.js?v=2.3"></script>
    
    </Helmet>

      <div id="hamburger" className="pulse">
		<div id="wrapper">
			<span className="icon-bar" id="one"></span>
			<span className="icon-bar" id="two"></span>
			<span className="icon-bar" id="thr"></span>
		</div>
	</div>
	<div className="fabnav" id="whatsapp">
		<a href="https://api.whatsapp.com/send?phone=&amp;text=Hello+Sir,+I+am+interested+in+one+of+your+services" target="_blank"><i className="fab fa-whatsapp material-icons" style={{color: '#45bd62'}}></i></a>
	</div>
	<div className="fiber" id="new">
		<p className="text-white">Whatsapp Us Now</p>
	</div>
	<div className="fabnav" id="phone">
		<a href="tel:0000000000"><i className="fa fa-phone-volume material-icons" style={{color: '#0164e1'}}></i></a>
	</div>
	<div className="fiber" id="new1">
		<p className="text-white">Call Us Now</p>
	</div>
	<div className="fabnav" id="share">
		<a href="https://ompackersindia.com/index.php/contacts"><i className="fa fa-map-marker material-icons" style={{color:'red'}}></i></a>
	</div>
	<div className="fiber" id="new3">
		<p className="text-white">Select Nearest Branch</p>
	</div>
	<div className="fabnav" id="trip">
		<a href="https://ompackersindia.com/index.php/tracking"><i className="fa fa-truck material-i" style={{color:'red'}}></i></a>
	</div>
	<div className="fiber" id="new4">
		<p className="text-white">Track Your Shipment</p>
	</div>
	<div id="faboverlay" className=""></div>
    </>
  );
}
