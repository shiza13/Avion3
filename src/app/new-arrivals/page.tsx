"use client";

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { useEffect, useState } from "react";

export default function Newarrivals() {
  const [data, setData] = useState<any[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product"]{
        name,
        price,
        image,
        slug,
        description
      }`;
      const result = await client.fetch(query);
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />

      {/* Top Banner */}
      <div
        style={{
          width: "100%",
          height: "209px",
          overflow: "hidden",
          animation: "slideIn 1s ease-out",
        }}
      >
        <img
          src="/Page Headers (1).png"
          alt="Banner"
          style={{
            width: "100%",
            height: "209px",
            objectFit: "cover",
            animation: "slideIn 1s ease-out",
          }}
        />
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center w-full h-16 bg-gray-100 px-4">
        <div className="flex gap-4">
          {["Category", "Product type", "Price", "Brand"].map((filter, i) => (
            <span
              key={i}
              className="text-sm font-medium cursor-pointer hover:text-gray-600 transition-colors duration-300"
            >
              {filter} ▼
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <span className="text-sm font-medium">Sorting by:</span>
          <span className="text-sm font-medium cursor-pointer hover:text-gray-600 transition-colors duration-300">
            Date added ▼
          </span>
        </div>
      </div>

      {/* === Product Section === */}
      <section className="py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {data.map((item: any, index: number) => (
            <Link
              key={item.slug.current}
              href={`/products/${item.slug.current}`}
              className="animate-fadeIn"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
                display: "block",
              }}
            >
              {/* Product Card */}
              <div
                className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500"
                style={{ width: "305px", height: "375px" }}
              >
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={305}
                  height={375}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name + Price */}
              <div className="mt-4 flex flex-col items-start">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>

                {item.price && (
  <p className="text-sm text-gray-600">Rs {item.price}</p>
)}
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#F8F8F8] text-black text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
            style={{ width: "170px", height: "56px" }}
          >
            View Collection
          </button>
        </div>
      </section>

      <Footer />

      {/* Inline animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }

        @keyframes slideIn {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
