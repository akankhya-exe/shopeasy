export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#aaa] text-[13px] w-full">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <h4 className="text-white text-[15px] font-semibold mb-4 border-b border-[#333] pb-2">ShopEasy</h4>
          <p className="leading-relaxed mb-4">
            Your trusted online marketplace since 2020. Quality products, fast delivery, and unbeatable prices.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="bg-[#222] text-[#aaa] text-[12px] px-3 py-1 hover:bg-[#e2b714] hover:text-[#1a1a2e] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-[15px] font-semibold mb-4 border-b border-[#333] pb-2">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'Products', 'Flash Deals', 'New Arrivals', 'Best Sellers'].map((link) => (
              <li key={link}><a href="#" className="hover:text-[#e2b714] transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[15px] font-semibold mb-4 border-b border-[#333] pb-2">Customer Service</h4>
          <ul className="space-y-2">
            {['My Account', 'Track My Order', 'Returns & Refunds', 'FAQs', 'Contact Support'].map((link) => (
              <li key={link}><a href="#" className="hover:text-[#e2b714] transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[15px] font-semibold mb-4 border-b border-[#333] pb-2">Contact Us</h4>
          <div className="space-y-2 leading-relaxed">
            <p>123 Market Street<br />San Francisco, CA 94105</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: support@shopeasy.com</p>
            <p>Hours: Mon–Fri, 9am–6pm PST</p>
          </div>
        </div>

      </div>

      <div className="border-t border-[#222]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px]">
          <p className="m-0 text-center md:text-left">
            &copy; 2026 WebdevBootCamp. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((link) => (
              <a key={link} href="#" className="text-[#777] hover:text-[#e2b714] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}