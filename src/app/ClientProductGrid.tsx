
// src/app/ClientProductGrid.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { ShoppingCart, Eye } from "lucide-react";
import Swal from "sweetalert2";
import { addToCart } from "../../sanity/lib/cart";

export default function ClientProductGrid({ products }: { products: any[] }) {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new CustomEvent("wishlist-updated"));
  }, [wishlist]);

  const toggleWishlist = (e: React.MouseEvent, id: string, name: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (wishlist.includes(id)) {
      setWishlist((prev) => prev.filter((x) => x !== id));
      Swal.fire({
        icon: "info",
        title: "Removed",
        text: `${name} removed from wishlist`,
        timer: 1500,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
    } else {
      setWishlist((prev) => [...prev, id]);
      Swal.fire({
        icon: "success",
        title: "Saved!",
        text: `${name} added to wishlist`,
        timer: 1800,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
    }
  };

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      _id: product._id,
      title: product.name,
      price: product.price,
      image: product.imageUrl,
      slug: product.slug.current,
    });

    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: product.name,
      timer: 1500,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
    });
  };

  // Only take the first 4 products
  const displayedProducts = products.slice(0, 4);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {displayedProducts.map((item, index) => {
          const isWishlisted = wishlist.includes(item._id);

          return (
            <div key={item._id} className="group relative mx-auto w-full max-w-[305px]">
              {/* Product Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <Link href={`/products/${item.slug.current}`}>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={305}
                    height={375}
                    className="w-full h-[375px] object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={index < 4}
                  />
                </Link>

                {/* Hover Buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex gap-5 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <button
                      onClick={(e) => toggleWishlist(e, item._id, item.name)}
                      className={`p-4 rounded-full shadow-2xl backdrop-blur-md transition-all hover:scale-125 ${
                        isWishlisted
                          ? "bg-red-600 text-white"
                          : "bg-white text-gray-800 hover:bg-red-50"
                      }`}
                    >
                      {isWishlisted ? <HiHeart className="w-7 h-7" /> : <HiOutlineHeart className="w-7 h-7" />}
                    </button>

                    <button
                      onClick={(e) => handleAddToCart(e, item)}
                      className="p-4 bg-white rounded-full shadow-2xl backdrop-blur-md hover:bg-indigo-50 hover:text-indigo-700 transition-all hover:scale-125"
                    >
                      <ShoppingCart className="w-7 h-7 text-indigo-700" />
                    </button>

                    <Link href={`/products/${item.slug.current}`}>
                      <button className="p-4 bg-white rounded-full shadow-2xl backdrop-blur-md hover:bg-gray-100 transition-all hover:scale-125">
                        <Eye className="w-7 h-7 text-gray-700" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Name + Price – Left aligned, same as New Arrivals */}
              <div className="mt-4 flex flex-col items-start">
                <Link href={`/products/${item.slug.current}`} className="block">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition">
                    {item.name}
                  </h3>
                </Link>

                {item.price && (
                  <p className="text-sm text-gray-600 mt-1">
                    Rs {item.price.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* View Collection Button */}
      <div className="text-center mt-20">
        <Link href="/products">
          <button className="bg-white text-gray-900 font-bold text-lg px-12 py-5 rounded-full shadow-2xl border-2 border-gray-300 hover:bg-gray-50 hover:border-indigo-600 transform hover:scale-105 transition-all">
            View Full Collection
          </button>
        </Link>
      </div>
    </section>
  );
}