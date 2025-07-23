import React from 'react'

export default function Footer() {
  return (
    <>
     <footer className='flex gap-2 items-center justify-between pl-10 pr-10 bg-blue-500 text-white'>
        <div>
            <p className='cursor-pointer hover:underline'>Contacts</p>
            <p className='cursor-pointer hover:underline'>Téléphone</p>
        </div>
        <div className='flex gap-10'>
            <p className='cursor-pointer hover:underline'>Facebook</p>
            <p className='cursor-pointer hover:underline'>Instagram</p>
            <p className='cursor-pointer hover:underline' >WhatsApp</p>
        </div>
        <div>
            <p className='cursor-pointer hover:underline'>Politique d'utilisation</p>
            <p className='cursor-pointer hover:underline'>Confidentialité</p>
        </div>
     </footer>
    </>
  )
}

