import React from 'react'
import { useState } from 'react';
import { products } from '../data/produits';
import { Link } from 'react-router-dom';

export default function AfficherInpt() {
    const [searchTerm, setSearchTerm] = useState('');
  // Filtrage des produits
    const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())||
    product.details.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher un produit..."
        className="w-280 border border-gray-300 rounded-lg mb-6
                 focus:outline-none  mx-auto p-3 ml-10 mt-3 mr-20"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       {/* Résultats */}
      <div className='card_principale'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((produit)=>(
            <div className='card bg-base-100 shadow-sm h-70 m-3 pl-2 pr-2 pt-2' key=      {produit.id}>
                <figure>
                    <img className='object-cover' src={produit.image}/>
                </figure>
                <h1 className="card-title">{produit.title}</h1>
                <p>{produit.category}</p>
                <div className="card-actions justify-center">
                    <Link to={`/produits/${produit.id}`}className='btn btn-primary mb-2 mr-2'>Details</Link>
                    <button className='btn btn-primary mb-2 mr-2 bg-green-700 border-green-700'>panier</button>
                </div>
            </div>
               ))
        ) : (
          <p className="text-center text-gray-500 py-8">
            {searchTerm ? 'Aucun produit trouvé' : 'Commencez à taper pour rechercher'}
          </p>
        )}
      </div>
    </div>
  );
}



