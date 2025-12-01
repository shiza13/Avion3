import Link from "next/link"
export default function Footer(){
return(
<footer className="bg-[#262153] text-white py-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
 
    <div>
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><Link href="/" className="hover:underline">New arrivals</Link></li>
        <li><Link href="/" className="hover:underline">Best sellers</Link></li>
        <li><Link href="/" className="hover:underline">Recently viewed</Link></li>
        <li><Link href="/" className="hover:underline">Popular this week</Link></li>
        <li><Link href="/" className="hover:underline"></Link>
        <Link href="/product-listing">All products</Link></li>
      </ul>
    </div>

  
    <div>
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><Link href="/crockery" className="hover:underline">Crockery</Link></li>
        <li><Link href="/furniture" className="hover:underline">Furniture</Link></li>
        <li><Link href="/homeware" className="hover:underline">Homeware</Link></li>
        <li><Link href="/plantpots" className="hover:underline">Plant pots</Link></li>
        <li><Link href="/chairs" className="hover:underline">Chairs</Link></li>
      </ul>
    </div>

   
    <div>
      <h2 className="text-lg font-bold mb-4">Our company</h2>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><Link  href="#" className="hover:underline"><Link href="/about">About us</Link></Link ></li>
        <li><Link  href="#" className="hover:underline">Vacancies</Link ></li>
        <li><Link  href="#" className="hover:underline">Contact us</Link ></li>
        <li><Link  href="#" className="hover:underline">Privacy</Link ></li>
        <li><Link  href="#" className="hover:underline">Returns policy</Link ></li>
      </ul>
    </div>

    <div>
      <h2 className="text-lg font-bold mb-4">Join our mailing list</h2>
      <form className="flex">
        <input 
          type="email" 
          placeholder="your@email.com" 
          className="flex-1 px-4 py-2 text-sm text-gray-400 bg-[#403a74] border border-gray-600 rounded-l-lg outline-none focus:ring focus:ring-indigo-500"
        />
        <button 
          type="submit" 
          className="px-4 py-2 text-sm bg-white text-[#262153] rounded-r-lg font-bold hover:bg-gray-200"
        >
          Sign up
        </button>
      </form>
    </div>
  </div>

 
  <div className="mt-8 border-t border-gray-600 pt-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
      <p>Copyright © 2022 Avion LTD</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
      
        <Link href="#" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></Link >
        <Link  href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></Link >
        <Link  href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></Link >
        <Link  href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></Link >
        <Link  href="#" className="hover:text-gray-300"><i className="fab fa-pinterest"></i></Link >
      
      </div>
    </div>
  </div>
</footer>
)
}