import React from 'react';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import Footer from './components/Footer';
import GoTopButton from './components/GoTopButton';
import About from './pages/About';
import Services from './pages/Services/';
import Gallery from './pages/Gallery';
import ServiceDetail from './pages/Services/ServiceDetail';
import HouseHoldServices from './pages/Services/HouseHoldServices';
import OfficeShifting from './pages/Services/OfficeShifting';
import IndustrialShifting from './pages/Services/IndustrialShifting';
import CarCarrier from './pages/Services/CarCarrier';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path ='/' element={<IndexPage key={Math.random()}/>}/>
        <Route exact path ='/contact' element={<ContactPage/>}/>
        {/* <Route exact path="/blog" element={<Blog/>}/> */}
        {/* <Route exact path="/faq" element={<Faq/>}/> */}
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/household-shifting-services" element={<ServiceDetail title={'Household Shifting Services'} service={<HouseHoldServices/>}/>}/>
        <Route exact path="/office-shifting-services" element={<ServiceDetail title={'Office Shifting Services'} service={<OfficeShifting/>}/>}/>
        <Route exact path="/industrial-shifting-services" element={<ServiceDetail title={'Industrial Shifting Services'} service={<IndustrialShifting/>}/>}/>
        <Route exact path="/car-carrier-services" element={<ServiceDetail title={'Car Carrier Services'} service={<CarCarrier/>}/>}/>
        <Route exact path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer/>
      <GoTopButton/>
    </>
  );
}

export default App;
