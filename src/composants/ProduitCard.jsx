import React from 'react'
import { products } from '../data/produits'
export default function ProduitCard() {
  return (
    <>
     <div className='card_principale'>
        {products.map((produit)=>(
            <div className="card bg-base-100 w-96 shadow-sm h-100 m-3 pl-2" key={produit.id}>
                <figure>
                    <img className='object-cover' src={produit.image}/>
                </figure>
                <h1 className="card-title">{produit.title}</h1>
                <p>{produit.category}</p>
                <div className="card-actions justify-end">
                    <button className='btn btn-primary mb-2 mr-2'>Details</button>
                    <button className='btn btn-primary mb-2 mr-2'>panier</button>
                </div>
            </div>
        ))
        }

     </div>
    </>
  )
}
