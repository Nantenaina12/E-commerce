import { Link } from 'react-router-dom'
import React from 'react'
import Navbar from '../composants/Navbar'
import ProduitCard from '../composants/ProduitCard'
import Footer from '../composants/Footer'
import AfficherInpt from '../composants/AfficherInpt'
export default function() {
  return(
    <>
     <Navbar/>
     <div className=' home text-center '>
        <h1>Votre destination high-tech</h1>
        <p>Découvrez nos derniers produits informatiques aux meilleurs prix</p>
        <Link to="produits"className='btn btn-primary rounded-2xl mt-3'>Voir les produits</Link>
     </div>
     <AfficherInpt/>
     <Footer/>
    </>

  )
}
