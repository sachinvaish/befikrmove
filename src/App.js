import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Faq from './pages/Faq';
import Footer from './components/Footer';
import GoTopButton from './components/GoTopButton';
import About from './pages/About';
import Services from './pages/Services/';
import Gallery from './pages/Gallery';
import ServiceDetail from './pages/Services/ServiceDetail';
import HouseHoldServices from './pages/Services/Items/HouseHoldServices';
import OfficeShifting from './pages/Services/Items/OfficeShifting';
import IndustrialShifting from './pages/Services/Items/IndustrialShifting';
import CarCarrier from './pages/Services/Items/CarCarrier';
import LoadingUnloading from './pages/Services/Items/LoadingUnloading';
import PackingMoving from './pages/Services/Items/PackingMoving';
import Relocation from './pages/Services/Items/Relocation';
import WarehouseServices from './pages/Services/Items/WarehouseServices';
import Branches from './pages/Branches';
import Detail from './pages/Branches/Detail';
import Blog1 from './pages/Blogs/Blog1';
import Blog from './pages/Blogs';
import Blog2 from './pages/Blogs/Blog2';
import Blog3 from './pages/Blogs/Blog3';
import Whatsapp from './components/Whatsapp';

function App() {

  return (
    <>
      <Navbar/>
      <Whatsapp/>
      <Routes>
        <Route exact path ='/' element={<IndexPage key={Math.random()} title='Home'/>}/>
        <Route exact path ='/contact' element={<ContactPage title='Contact'/>}/>
        <Route exact path="/blog" element={<Blog title='Blog'/>}/>
        <Route exact path="/blog/1" element={<Blog1/>}/>
        <Route exact path="/blog/2" element={<Blog2/>}/>
        <Route exact path="/blog/3" element={<Blog3/>}/>
        {/* <Route exact path="/faq" element={<Faq/>}/> */}
        <Route exact path="/about" element={<About title='About'/>}/>
        <Route exact path="/services" element={<Services title='Services'/>}/>
        <Route exact path="/household-shifting-services" element={<ServiceDetail title={'Household Shifting Services'} service={<HouseHoldServices title='Household Shifting Services'/>}/>}/>
        <Route exact path="/office-shifting-services" element={<ServiceDetail title={'Office Shifting Services'} service={<OfficeShifting title='Office Shifing Services'/>}/>}/>
        <Route exact path="/industrial-shifting-services" element={<ServiceDetail title={'Industrial Shifting Services'} service={<IndustrialShifting title='Industrial Shifting Services'/>}/>}/>
        <Route exact path="/car-carrier-services" element={<ServiceDetail title={'Car Carrier Services'} service={<CarCarrier title='Car Carrier Services'/>}/>}/>
        <Route exact path="/loading-unloading-services" element={<ServiceDetail title={'Loading & Unloading Services'} service={<LoadingUnloading title='Loading & Unloading Services'/>}/>}/>
        <Route exact path="/packing-moving-services" element={<ServiceDetail title={'Packing & Moving Services'} service={<PackingMoving title='Packing & Moving Services'/>}/>}/>
        <Route exact path="/relocation-services" element={<ServiceDetail title={'Relocation Services'} service={<Relocation title='Relocation Services'/>}/>}/>
        <Route exact path="/warehouse-services" element={<ServiceDetail title={'Ware House Services'} service={<WarehouseServices title='Ware House Services'/>}/>}/>
        <Route exact path="/gallery" element={<Gallery title='Gallery'/>}/>
        <Route exact path="/branches" element={<Branches title='Branches'/>}/>
        <Route exact path="/branches/:name" element={<Detail title='Patna'/>}/>
      </Routes>
      <Footer/>
      <GoTopButton/>
    </>
  );
}

export default App;
