import React from "react";
import { products } from "../data/produits";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const product = products.find(p => p.id.toString() === id);
  console.log(product);
  if (!product) {
    return <div className="p-6 text-red-500">Produit non trouvé</div>;
  }
  return(
    <div className="card bg-base-100 w-110 h-120 shadow-sm ml-32 mr-32 mt-20 mb-20">
        <figure>
            <img className="object-cover" src={product.image} alt={product.title}></img>
        </figure>
        <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <h2 className="card-title">{product.category}</h2>
            <p>{product.details}</p>
            <h3>{product.price}</h3>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Panier</button>
            </div>
        </div>
    </div>
  )
}
