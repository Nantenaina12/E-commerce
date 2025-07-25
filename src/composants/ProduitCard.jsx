import React from 'react'
import { products } from '../data/produits'
import { Link } from 'react-router-dom'
export default function ProduitCard() {
  return (
    <>
     <div>
        <div className='flex items-center justify-between'>
            <h1 className='ml-44 font-bold text-lg'>Voici les produits que nous vous proposons</h1>
            <Link to="/" className='btn btn-primary mr-3'>Accueil</Link>
        </div>
        <div className='card_principale'>
        {products.map((produit)=>(
            <div className="card bg-base-100 shadow-sm h-70 m-3 pl-2 pr-2 pt-2" key={produit.id}>
                <figure>
                    <img className='object-cover' src={produit.image}/>
                </figure>
                <h1 className="card-title">{produit.title}</h1>
                <p>{produit.category}</p>
                <div className="card-actions justify-center">
                    <Link to={`/produits/${produit.id}`} className='btn btn-primary mb-2 mr-2'>Details</Link>
                    <button className='btn btn-primary mb-2 mr-2 bg-green-700 border-green-700'>panier</button>
                </div>
            </div>
        ))
        }
        </div>
    </div>
    </>
  )
}
