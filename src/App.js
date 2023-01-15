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
import Services from './pages/Services';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path ='/' element={<IndexPage/>}/>
        <Route exact path ='/contact' element={<ContactPage/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/faq" element={<Faq/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
      <GoTopButton/>
    </>
  );
}

export default App;
