// // import Header from "./components/header"
// // import React from "react";
// // import {client} from "@/sanity/lib/client";
// // import { urlFor } from "@/sanity/lib/image";
// // import { CheckCircle, Truck, Tag, RefreshCcw } from "lucide-react";
// // import { FaRegCheckCircle } from "react-icons/fa";
// // import Image from "next/image"
// // import Footer from "./components/footer";
// // export default async function Home(){
// //   const data =await client.fetch(`*[_type=='product']`);
// //    console.log(data);
// //   const features = [
// //     {
// //       icon: <Truck className="text-gray-900 w-8 h-8" />,
// //       title: "Next day as standard",
// //       description: "Order before 3pm and get your order the next day as standard",
// //     },
// //     {
// //       icon: <CheckCircle className="text-gray-900 w-8 h-8" />,
// //       title: "Made by true artisans",
// //       description: "Handmade crafted goods made with real passion and craftsmanship",
// //     },
// //     {
// //       icon: <Tag className="text-gray-900 w-8 h-8" />,
// //       title: "Unbeatable prices",
// //       description: "For our materials and quality, you won't find better prices anywhere",
// //     },
// //     {
// //       icon: <RefreshCcw className="text-gray-900 w-8 h-8" />,
// //       title: "Recycled packaging",
// //       description: "We use 100% recycled materials to ensure our footprint is more manageable",
// //     },
// //   ];

// //   const products = [
// //     {
// //       image: "/Parent.png", // Replace with actual image paths
// //       name: "The Dandy Chair",
// //       price: "£230",
// //     },
// //     {
// //       image: "/Parent (1).png",
// //       name: "Rustic Vase Set",
// //       price: "£155",
// //     },
// //     {
// //       image: "/Parent (2).png",
// //       name: "The Silky Vase",
// //       price: "£125",
// //     },
// //     {
// //       image: "/Parent (3).png",
// //       name: "The Lucy Lamp",
// //       price: "£399",
// //     },
// //   ];

 
// //  return(<div>
// // <Header/>





// // <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Hero Blocks.png')" }}>
// //       {/* Replace '/your-image.jpg' with your actual image path */}
// //       <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white p-10 rounded-lg shadow-xl max-w-lg">
// //         <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
// //           Luxury homeware for people who love timeless design quality
// //         </h1>
// //         <p className="text-lg text-gray-600 mb-6">
// //           Shop the new Spring 2022 collection today
// //         </p>
// //         <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
// //           View collection
// //         </button>
// //       </div>
// //     </div>
// //     <section className="py-16 px-6 bg-white">
// //       <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-900">
// //         What makes our brand different
// //       </h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //         {features.map((feature, index) => (
// //           <div
// //             key={index}
// //             className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
// //           >
// //             <div className="mb-4">{feature.icon}</div>
// //             <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
// //             <p className="text-sm text-gray-600">{feature.description}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //     <section className="py-16 px-6">
// //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
// //     {products.map((product, index) => (
// //       <div key={index}>
// //         {/* Image Container */}
// //         <div
// //           className="bg-white shadow-md rounded-lg overflow-hidden"
// //           style={{ width: "305px", height: "375px" }}
// //         >
// //           <img
// //             src={product.image}
// //             alt={product.name}
// //             className="w-full h-full object-cover"
// //           />
// //         </div>

// //         {/* Name and Price below the Image Container, aligned to the left */}
// //         <div className="mt-4 flex flex-col items-start">
// //           <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
// //           <p className="text-sm text-gray-600">{product.price}</p>
// //         </div>
// //       </div>
// //     ))}
// //   </div>
// //   <div className="flex justify-center mt-8">
// //   <button
// //     className="bg-[#F8F8F8] text-black text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200"
// //     style={{ width: "170px", height: "56px" }}
// //   >
// //     View Collection
// //   </button>
// // </div>
  
// // </section>
  
// // <section className="py-16 px-6">
// //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
// //     {/* First Container */}
// //     <div
// //       className=" text-white shadow-md"
// //       style={{
// //         backgroundColor:"#1d1160",
// //         width: "634px",
// //         height: "478px",
// //         borderRadius: "0px", // Sharp borders (no rounding)
// //         position: "relative",
// //       }}
// //     >
// //       {/* Text */}
// //       <div style={{ position: "absolute", top: "64px", left: "64px" }}>
// //         <p className="font-bold text-2xl">
// //           It started with a small idea
// //         </p>
// //         <p className="text-base">
// //           A global brand with local beginnings, our story began </p>
// //           <p>in a small
// //           studio in South London in early 2014.
// //         </p>
// //       </div>

// //       {/* Button */}
// //       <button
// //         className="text-white font-semibold rounded-lg"
// //         style={{
// //           position: "absolute",
// //           top: "368px",
// //           left: "64px",
// //           width: "170px",
// //           height: "56px",
// //           backgroundColor: "#4E4D93", // Custom button color
// //         }}
// //       >
// //         View Collection
// //       </button>
// //     </div>

// //     {/* Second Container */}
// //     <div
// //       className="bg-white shadow-md"
// //       style={{
// //         width: "630px",
// //         height: "478px",
// //         borderRadius: "0px", // Sharp borders (no rounding)
// //       }}
// //     >
// //       <img
// //         src="/Image Block.png" // Replace with actual image path
// //         alt="Second Container Image"
// //         className="w-full h-full object-cover"
// //       />
// //     </div>
// //   </div>
// // </section>
// // <section className="py-16 px-6">
// //   <div
// //     className="relative shadow-md mx-auto"
// //     style={{
// //       width: "100%",
// //       maxWidth: "1440px",
// //       height: "444px",
// //       borderRadius: "0px", // Sharp edges
// //       backgroundImage: "url('/Email sign-up (2).png')", // Mobile background image
// //       backgroundSize: "cover",
// //       backgroundPosition: "center",
// //     }}
// //   >
// //     {/* Text Content */}
// //     <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center text-white px-6">
// //       <h2 className="text-3xl font-bold mb-4">Join the club and get the benefits</h2>
// //       <p className="text-lg">
// //         Sign up for our newsletter and receive exclusive offers on
// //       </p>
// //       <p className="text-lg ml-12 sm:ml-0">
// //         new ranges, sales, pop-up stores, and more
// //       </p>

// //       {/* Features with Tick Logos */}
// //       <div className="flex justify-center items-center mt-6 space-x-6 sm:space-x-4">
// //         <div className="flex items-center">
// //           <FaRegCheckCircle className="text-white mr-2" />
// //           <span>Exclusive offers</span>
// //         </div>
// //         <div className="flex items-center">
// //           <FaRegCheckCircle className="text-white mr-2" />
// //           <span>Free events</span>
// //         </div>
// //         <div className="flex items-center">
// //           <FaRegCheckCircle className="text-white mr-2" />
// //           <span>Large discounts</span>
// //         </div>
// //       </div>

// //       {/* Input and Button */}
// //       <div className="flex flex-col lg:flex-row justify-center items-center mt-6 relative w-full">
// //   {/* Email Input */}
// //   <input
// //     type="email"
// //     placeholder="Enter your email"
// //     className="p-3 w-full lg:w-[300px] text-black rounded-none mb-4 lg:mb-0 lg:mr-4"
// //   />

// //   {/* Sign-Up Button */}
// //   <button
// //     className="text-white font-semibold py-2 px-3 bg-[#1d1160] w-full lg:w-[118px] lg:h-[51px]"
// //   >
// //     Sign Up
// //   </button>
// // </div>
// //     </div>
// //   </div>

// // </section>
// // <div><Footer/></div>


// //   </div>
// // )}
// // app/page.tsx
// import Header from "./components/header";
// import Footer from "./components/footer";
// import AddToCartButton from "./components/AddToCartButton";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { Truck, CheckCircle, Tag, RefreshCcw } from "lucide-react";
// import { FaRegCheckCircle } from "react-icons/fa";

// export const revalidate = 60; // Optional: revalidate every 60 seconds

// export default async function Home() {
//   // Fetch real products from Sanity
//   const data = await client.fetch(`*[_type == "product"]{
//     _id,
//     title,
//     price,
//     slug,
//     mainImage
//   }`);

//   const features = [
//     {
//       icon: <Truck className="text-gray-900 w-8 h-8" />,
//       title: "Next day as standard",
//       description: "Order before 3pm and get your order the next day as standard",
//     },
//     {
//       icon: <CheckCircle className="text-gray-900 w-8 h-8" />,
//       title: "Made by true artisans",
//       description: "Handmade crafted goods made with real passion and craftsmanship",
//     },
//     {
//       icon: <Tag className="text-gray-900 w-8 h-8" />,
//       title: "Unbeatable prices",
//       description: "For our materials and quality, you won't find better prices anywhere",
//     },
//     {
//       icon: <RefreshCcw className="text-gray-900 w-8 h-8" />,
//       title: "Recycled packaging",
//       description: "We use 100% recycled materials to ensure our footprint is more manageable",
//     },
//   ];

//   return (
//     <div>
//       <Header />

//       {/* Hero Section */}
//       <div
//         className="relative w-full h-screen bg-cover bg-center"
//         style={{ backgroundImage: "url('/Hero Blocks.png')" }}
//       >
//         <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white p-10 rounded-lg shadow-xl max-w-lg">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
//             Luxury homeware for people who love timeless design quality
//           </h1>
//           <p className="text-lg text-gray-600 mb-6">
//             Shop the new Spring 2022 collection today
//           </p>
//           <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
//             View collection
//           </button>
//         </div>
//       </div>

//       {/* Features Section */}
//       <section className="py-16 px-6 bg-white">
//         <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-900">
//           What makes our brand different
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
//               <p className="text-sm text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Products Grid - Now from Sanity! */}
//       <section className="py-16 px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-center max-w-7xl mx-auto">
//           {data.map((product: any) => (
//             <div key={product._id} className="group relative">
//               {/* Product Image Container */}
//               <div
//                 className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
//                 style={{ width: "305px", height: "375px" }}
//               >
//                 {product.mainImage ? (
//                   <Image
//                     src={urlFor(product.mainImage).url()}
//                     alt={product.title}
//                     width={305}
//                     height={375}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                     <span className="text-gray-500">No Image</span>
//                   </div>
//                 )}

//                 {/* Hover Overlay with Add to Cart Button */}
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
//                   <AddToCartButton
//                     product={{
//                       _id: product._id,
//                       title: product.title,
//                       price: product.price,
//                       image: product.mainImage ? urlFor(product.mainImage).url() : "",
//                       slug: product.slug?.current,
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Product Name & Price */}
//               <div className="mt-4 text-left">
//                 <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
//                 <p className="text-sm text-gray-600">£{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View Collection Button */}
//         <div className="flex justify-center mt-12">
//           <button
//             className="bg-[#F8F8F8] text-black text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition"
//             style={{ width: "170px", height: "56px" }}
//           >
//             View Collection
//           </button>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-7xl mx-auto">
//           <div
//             className="text-white relative"
//             style={{
//               backgroundColor: "#1d1160",
//               width: "634px",
//               height: "478px",
//             }}
//           >
//             <div className="absolute top-16 left-16">
//               <p className="font-bold text-2xl">It started with a small idea</p>
//               <p className="text-base mt-4">
//                 A global brand with local beginnings, our story began in a small
//                 studio in South London in early 2014.
//               </p>
//             </div>
//             <button
//               className="absolute bottom-16 left-16 text-white font-semibold"
//               style={{
//                 width: "170px",
//                 height: "56px",
//                 backgroundColor: "#4E4D93",
//               }}
//             >
//               View Collection
//             </button>
//           </div>

//           <div
//             style={{
//               width: "630px",
//               height: "478px",
//             }}
//           >
//             <img
//               src="/Image Block.png"
//               alt="Brand story"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-16 px-6">
//         <div
//           className="relative mx-auto"
//           style={{
//             width: "100%",
//             maxWidth: "1440px",
//             height: "444px",
//             backgroundImage: "url('/Email sign-up (2).png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center text-white px-6">
//             <h2 className="text-3xl font-bold mb-4">Join the club and get the benefits</h2>
//             <p className="text-lg">
//               Sign up for our newsletter and receive exclusive offers on new ranges,
//               sales, pop-up stores, and more
//             </p>

//             <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
//               <div className="flex items-center gap-2">
//                 <FaRegCheckCircle /> <span>Exclusive offers</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FaRegCheckCircle /> <span>Free events</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FaRegCheckCircle /> <span>Large discounts</span>
//               </div>
//             </div>

//             <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-3 w-full sm:w-80 text-black"
//               />
//               <button className="bg-[#1d1160] text-white px-8 py-3 font-semibold">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
// app/page.tsx
// import Header from "./components/header";
// import Footer from "./components/footer";
// import AddToCartButton from "./components/AddToCartButton";
// import { client } from "../../sanity/lib/client";
// import Image from "next/image";
// import { Truck, CheckCircle, Tag, RefreshCcw } from "lucide-react";
// import { FaRegCheckCircle } from "react-icons/fa";
// import Link from "next/link";

// export const revalidate = 60; // Revalidate every 60 seconds

// export default async function Home() {
//   // Fetch products with a safe image URL fallback
//   const data = await client.fetch(`
//     *[_type == "product"] {
//       _id,
//       title,
//       price,
//       slug,
//       "imageUrl": coalesce(
//         mainImage.asset->url,
//         image.asset->url,
//         images[0].asset->url,
//         "https://via.placeholder.com/305x375.png?text=No+Image"
//       )
//     }
//   `);

//   const features = [
//     { icon: <Truck className="text-gray-900 w-8 h-8" />, title: "Next day as standard", description: "Order before 3pm and get your order the next day as standard" },
//     { icon: <CheckCircle className="text-gray-900 w-8 h-8" />, title: "Made by true artisans", description: "Handmade crafted goods made with real passion and craftsmanship" },
//     { icon: <Tag className="text-gray-900 w-8 h-8" />, title: "Unbeatable prices", description: "For our materials and quality, you won't find better prices anywhere" },
//     { icon: <RefreshCcw className="text-gray-900 w-8 h-8" />, title: "Recycled packaging", description: "We use 100% recycled materials to ensure our footprint is more manageable" },
//   ];

//   return (
//     <div>
//       <Header />

//       {/* Hero */}
//       <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Hero Blocks.png')" }}>
//         <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white p-10 rounded-lg shadow-xl max-w-lg">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
//             Luxury homeware for people who love timeless design quality
//           </h1>
//           <p className="text-lg text-gray-600 mb-6">Shop the new Spring 2022 collection today</p>
//           <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
//             View collection
//           </button>
//         </div>
//       </div>

//       {/* Features */}
//       <section className="py-16 px-6 bg-white">
//         <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-900">
//           What makes our brand different
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//           {features.map((f, i) => (
//             <div key={i} className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
//               <div className="mb-4">{f.icon}</div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
//               <p className="text-sm text-gray-600">{f.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PRODUCTS FROM SANITY - FIXED & WORKING */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center max-w-7xl mx-auto">
//           {data.map((item: any, index: number) => (
//             <Link
//               key={item._id}
//               href={`/products/${item.slug.current}`}
//               className="block animate-fadeIn"
//               style={{
//                 animationDelay: `${index * 100}ms`,
//                 animationFillMode: "both",
//               }}
//             >
//               {/* Product Card */}
//               <div
//                 className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500"
//                 style={{ width: "305px", height: "375px" }}
//               >
//                 <Image
//                   src={item.imageUrl}           // Now using the pre-fetched string URL
//                   alt={item.title}              // Correct field: title, not name
//                   width={305}
//                   height={375}
//                   className="w-full h-full object-cover"
//                   priority={index < 4}          // Optional: prioritize above-the-fold images
//                 />
//               </div>

//               {/* Name + Price */}
//               <div className="mt-4 text-left">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {item.title}
//                 </h3>
//                 {item.price && (
//                   <p className="text-sm text-gray-600 mt-1">Rs {item.price}</p>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* View Collection Button */}
//         <div className="flex justify-center mt-12">
//           <Link href="/products">
//             <button
//               className="bg-[#F8F8F8] text-black text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
//               style={{ width: "170px", height: "56px" }}
//             >
//               View Collection
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* About / Story Section */}
//       <section className="py-16 px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-7xl mx-auto">
//           <div className="text-white relative" style={{ backgroundColor: "#1d1160", width: "634px", height: "478px" }}>
//             <div className="absolute top-16 left-16 max-w-md">
//               <p className="font-bold text-2xl">It started with a small idea</p>
//               <p className="text-base mt-4">A global brand with local beginnings, our story began in a small studio in South London in early 2014.</p>
//             </div>
//             <Link href="/products">
//               <button className="absolute bottom-16 left-16 text-white font-semibold" style={{ width: "170px", height: "56px", backgroundColor: "#4E4D93" }}>
//                 View Collection
//               </button>
//             </Link>
//           </div>
//           <div style={{ width: "630px", height: "478px" }}>
//             <img src="/Image Block.png" alt="Brand story" className="w-full h-full object-cover rounded-lg" />
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-16 px-6">
//         <div
//           className="relative mx-auto rounded-lg overflow-hidden"
//           style={{ width: "100%", maxWidth: "1440px", height: "444px", backgroundImage: "url('/Email sign-up (2).png')", backgroundSize: "cover", backgroundPosition: "center" }}
//         >
//           <div className="absolute inset-0 bg-black/30" />
//           <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center text-white px-6 max-w-3xl">
//             <h2 className="text-3xl font-bold mb-4">Join the club and get the benefits</h2>
//             <p className="text-lg mb-8">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more</p>
            
//             <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm mb-10">
//               <div className="flex items-center gap-2"><FaRegCheckCircle /> <span>Exclusive offers</span></div>
//               <div className="flex items-center gap-2"><FaRegCheckCircle /> <span>Free events</span></div>
//               <div className="flex items-center gap-2"><FaRegCheckCircle /> <span>Large discounts</span></div>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="your@email.com"
//                 className="px-6 py-3 w-full text-black rounded-md"
//               />
//               <button className="bg-[#1d1160] text-white px-8 py-3 font-semibold rounded-md hover:bg-[#2a1a80] transition">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }


// app/page.tsx
// app/page.tsx
// app/page.tsx
import Header from "./components/header";
import Footer from "./components/footer";
import { client } from "../../sanity/lib/client";
import { Truck, CheckCircle, Tag, RefreshCcw } from "lucide-react";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";
import ClientProductGrid from "./ClientProductGrid"; // Your existing reusable component

export const revalidate = 60;

export default async function Home() {
  // Fetch products from Sanity
  const products = await client.fetch(`
    *[_type == "product"] {
      _id,
      title,
      price,
      slug,
      "imageUrl": coalesce(
        mainImage.asset->url,
        image.asset->url,
        images[0].asset->url,
        "https://via.placeholder.com/305x375.png?text=No+Image"
      )
    }
  `);

  const features = [
    { icon: <Truck className="text-gray-900 w-8 h-8" />, title: "Next day as standard", description: "Order before 3pm and get your order the next day as standard" },
    { icon: <CheckCircle className="text-gray-900 w-8 h-8" />, title: "Made by true artisans", description: "Handmade crafted goods made with real passion and craftsmanship" },
    { icon: <Tag className="text-gray-900 w-8 h-8" />, title: "Unbeatable prices", description: "For our materials and quality, you won't find better prices anywhere" },
    { icon: <RefreshCcw className="text-gray-900 w-8 h-8" />, title: "Recycled packaging", description: "We use 100% recycled materials to ensure our footprint is more manageable" },
  ];

  return (
    <div>
      <Header />

      {/* Hero */}
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Hero Blocks.png')" }}>
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white p-10 rounded-lg shadow-xl max-w-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p className="text-lg text-gray-600 mb-6">Shop the new Spring 2022 collection today</p>
          <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
            View collection
          </button>
        </div>
      </div>

      {/* Features */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-900">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE PRODUCT GRID WITH HOVER BUTTONS */}
      <ClientProductGrid products={products} />

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-7xl mx-auto">
          <div className="text-white relative" style={{ backgroundColor: "#1d1160", width: "634px", height: "478px" }}>
            <div className="absolute top-16 left-16 max-w-md">
              <p className="font-bold text-2xl">It started with a small idea</p>
              <p className="text-base mt-4">A global brand with local beginnings, our story began in a small studio in South London in early 2014.</p>
            </div>
            <Link href="/products">
              <button className="absolute bottom-16 left-16 text-white font-semibold" style={{ width: "170px", height: "56px", backgroundColor: "#4E4D93" }}>
                View Collection
              </button>
            </Link>
          </div>
          <div style={{ width: "630px", height: "478px" }}>
            <img src="/Image Block.png" alt="Brand story" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6">
        <div className="relative mx-auto rounded-lg overflow-hidden" style={{ width: "100%", maxWidth: "1440px", height: "444px", backgroundImage: "url('/Email sign-up (2).png')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center text-white px-6 max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Join the club and get the benefits</h2>
            <p className="text-lg mb-8">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more</p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm mb-10">
              <div className="flex items-center gap-2"><FaRegCheckCircle /> <span>Exclusive offers</span></div>
              <div className="flex items-center gap-2"><FaRegCheckCircle /> <span>Free events</span></div>
              <div className="flex items-center gap-2"><FaRegCheckCircle /> <span>Large discounts</span></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="px-6 py-3 w-full text-black rounded-md" />
              <button className="bg-[#1d1160] text-white px-8 py-3 font-semibold rounded-md hover:bg-[#2a1a80] transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
    