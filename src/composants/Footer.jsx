import React from 'react'

export default function Footer() {
  return (
    <>
     <footer className=' foot grid gap-2 items-center justify-center pl-10 pr-10  text-blue-100'>
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
        <div className="pb-4">
            <p>&copy; 2025 TechStore.Tous droits réservés.</p>
        </div>
     </footer>
    </>
  )
}

