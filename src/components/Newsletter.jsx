export default function Newsletter() {
  return (
    <div className="bg-gradient-to-br from-[#4a90d9] to-[#1a1a2e] text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
        <p className="text-gray-300 text-[15px] mb-8">
          Subscribe to our newsletter and get exclusive deals, new arrivals, and tips straight to your inbox.
        </p>
        
        <form className="flex flex-col md:flex-row justify-center items-stretch gap-3 mb-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full md:w-auto px-4 py-3 text-[14px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#e2b714]" 
          />
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="w-full md:w-auto px-4 py-3 text-[14px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#e2b714]" 
          />
          
          <select className="w-full md:w-auto px-4 py-3 text-[14px] text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#e2b714] cursor-pointer">
            <option value="">Interested in...</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="sports">Sports</option>
            <option value="home">Home &amp; Garden</option>
            <option value="all">Everything!</option>
          </select>
          
          <button 
            type="submit" 
            className="w-full md:w-auto bg-[#e2b714] text-[#1a1a2e] font-bold px-6 py-3 text-[14px] hover:bg-yellow-500 transition-colors shrink-0"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-[12px] text-[#aaa] m-0">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}