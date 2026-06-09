import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".product-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", 
        },
        opacity: 1, 
        scale: 1,   
        stagger: 0.1,
        duration: 0.6,
        ease: "power1.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const products = [
    { title: "Wireless Headphones", desc: "Noise cancelling, 30hr battery", price: "$49.99", oldPrice: "$79.99", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", badge: "Best Seller", badgeColor: "bg-[#e63946]", rating: 5, reviews: 128 },
    { title: "Running Shoes", desc: "Lightweight, breathable design", price: "$79.99", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", badge: "New", badgeColor: "bg-[#2a9d8f]", rating: 4, reviews: 94 },
    { title: "Mechanical Keyboard", desc: "RGB backlit, tactile switches", price: "$99.99", oldPrice: "$139.99", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop", rating: 5, reviews: 211 },
    { title: "Portable Charger", desc: "20000mAh, dual USB ports", price: "$29.99", img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", rating: 4, reviews: 76 },
    { title: "Smart Watch", desc: "Heart rate monitor, GPS, waterproof", price: "$149.99", oldPrice: "$199.99", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", badge: "Sale", badgeColor: "bg-[#e76f51]", rating: 5, reviews: 340 },
    { title: "Instant Camera", desc: "Retro design, prints instantly", price: "$69.99", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99a?w=400&h=400&fit=crop", rating: 4, reviews: 55 },
    { title: "Skincare Gift Set", desc: "Moisturizer, serum & eye cream", price: "$44.99", oldPrice: "$65.00", img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop", badge: "Best Seller", badgeColor: "bg-[#e63946]", rating: 5, reviews: 182 },
    { title: "Premium Yoga Mat", desc: "Non-slip, eco-friendly material", price: "$34.99", img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop", badge: "New", badgeColor: "bg-[#2a9d8f]", rating: 4, reviews: 67 },
  ];

  return (
    <div ref={containerRef} className="bg-gray-100 py-12 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-[#1a1a2e]">Featured Products</h3>
          <a href="#" className="text-[#4a90d9] font-bold text-sm hover:underline">View All &rarr;</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card opacity-0 scale-95 bg-white border border-gray-200 p-4 text-center relative group hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {product.badge && (
                  <div className={`absolute top-2 left-2 text-white text-[11px] font-bold py-1 px-2 z-10 ${product.badgeColor}`}>
                    {product.badge}
                  </div>
                )}
                <img src={product.img} alt={product.title} className="w-full h-48 object-cover rounded mb-4" />
                
                <div className="flex justify-center items-center gap-1 mb-2">
                  <span className="text-[#e2b714] text-[13px] tracking-widest">
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </span>
                  <span className="text-gray-400 text-xs">({product.reviews})</span>
                </div>

                <h4 className="text-[15px] text-[#1a1a2e] font-bold mb-1">{product.title}</h4>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed">{product.desc}</p>
              </div>

              <div>
                <div className="mb-4 flex justify-center items-baseline gap-2">
                  <span className="text-xl font-bold text-[#e63946]">{product.price}</span>
                  {product.oldPrice && <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>}
                </div>
                <button className="w-full bg-[#1a1a2e] text-white py-2 text-sm font-medium hover:bg-[#4a90d9] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}