import React from "react";
import { useWishlist } from "../components/wishlistContext";
import ProductCard  from "../components/ProductCard";
import "../style/productpage.css"

function WishlistPage(){
    const {wishlist} = useWishlist();

    return (
        <section className="casual-section">
            <h1>MY WISHLIST</h1>
            {wishlist.length===0 ? (
                <p style ={{padding: "1ren"}}>
                    NO ITEM in wishlist.</p>
            ) : (
                <div className="casual-content">
                    <div className="product-casual">
                        {wishlist.map((product)=>(
                            <ProductCard key= {product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}
export default WishlistPage;