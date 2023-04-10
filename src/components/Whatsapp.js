import React from 'react'
import { Link } from 'react-router-dom'

export default function Whatsapp() {
  return (
    <a href='https://wa.me/+917764076100' target='_blank'  style={{display:'flex',justifyContent:'center',alignItems:'center',textDecoration:'none', cursor:'pointer',zIndex:2000, position:'fixed', backgroundColor: 'green',borderRadius:'50px',border:'none', width:'4rem', height:'4rem', position:'fixed', bottom:'60px',right:'20px'}}>
        <span className="fa fa-whatsapp" style={{color:'white',fontSize:'3rem', margin:'auto'}}></span>
    </a>
  )
}
