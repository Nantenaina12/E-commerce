import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
   <nav className='flex items-center justify-between pl-8 pr-8 font-bold '>
    <div className='bar flex items-center mr-20'>
        <img className='w-16 h-16 rounded-full ' src='/images/Mockup_InfoCadi.jpg'/>
        <h1 className='text-blue-700 font-bold'>TechStore</h1>
    </div>
    <Link to="/" className='lnk cursor-pointer hover:text-blue-600 '>Accueil</Link>
    <Link to="produits" className=' lnk cursor-pointer hover:text-blue-600 '>Produits</Link>
    <img className='w-14 h-13' src='/images/panier.png'/>
    <img className='w-16 h-16 rounded-full' src='images/admin.png'/>
   </nav>
  </>
}
