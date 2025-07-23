import React from 'react'

export default function Navbar() {
  return <>
   <nav className='flex items-center justify-between pl-8 pr-8 bg-blue-100 font-large'>
    <img className='w-16 h-16 rounded-full ' src='/images/Mockup_InfoCadi.jpg'/>
    <h2 className='cursor-pointer hover:text-blue-600'>Accueil</h2>
    <h2 className='cursor-pointer hover:text-blue-600'>Produits</h2>
    <img className='w-14 h-13' src='/images/panier.png'/>
    <img className='w-16 h-16 rounded-full' src='images/admin.png'/>
   </nav>
  </>
}
