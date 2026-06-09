export default function Navbar() {
  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-[#e63946] text-white text-center py-2 px-4 text-[13px]">
        <p className="m-0">
          FREE SHIPPING on orders over $50 <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
          <br className="sm:hidden" />
          Code: <strong>SAVE10</strong> for 10% off <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
          <a href="#" className="text-white font-bold underline ml-1 hover:text-gray-200">Learn More</a>
        </p>
      </div>

      {/* Main Header */}
      <div className="bg-[#1a1a2e] text-white py-3 px-5 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-md">
        
        {/* LEFT WRAPPER: Grouping Logo and Search together */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full lg:w-auto">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start shrink-0">
            <h1 className="text-[26px] text-[#e2b714] font-bold m-0 leading-none">ShopEasy</h1>
            <span className="text-[11px] text-[#aaa] mt-1 block">Your one-stop shop</span>
          </div>

          {/* Search Bar (Now Pinned Left) */}
          <div className="flex w-full md:w-[340px]">
            <input 
              type="text" 
              placeholder="Search for products..." 
              // Added bg-white and text-black to fix the transparency issue
              className="w-full bg-white text-black px-3 py-2 text-[14px] border-none outline-none focus:ring-2 focus:ring-[#e2b714]"
            />
            <button className="bg-[#e2b714] text-[#1a1a2e] px-4 py-2 text-[14px] font-bold hover:bg-yellow-500 transition-colors shrink-0">
              Search
            </button>
          </div>

        </div>

        {/* Right Nav & Icons */}
        <div className="flex flex-col items-center lg:items-end gap-2 w-full lg:w-auto mt-2 lg:mt-0">
          {/* Top Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-[14px]">
            {['Home', 'Products', 'Deals', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-[#ccc] hover:text-[#e2b714] transition-colors decoration-transparent">
                {item}
              </a>
            ))}
          </nav>
          
          {/* Bottom Icons */}
          <div className="flex gap-4 text-[13px] font-medium">
            <a href="#" className="text-[#aaa] hover:text-white transition-colors">Wishlist (0)</a>
            <a href="#" className="text-[#e2b714] font-bold hover:text-yellow-400 transition-colors">Cart (0)</a>
            <a href="#" className="text-[#aaa] hover:text-white transition-colors">Sign In</a>
          </div>
        </div>

      </div>
    </header>
  );
}