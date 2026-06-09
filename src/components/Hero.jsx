import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-banner", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      });
      
      gsap.to(".stat-item", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        delay: 0.3,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "50K+", label: "Products" },
    { number: "1M+", label: "Happy Customers" },
    { number: "4.8", label: "Avg Rating" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto px-4 my-6 overflow-hidden">
      
      {/* BYPASSED TAILWIND COMPILER: Using inline style attribute for the gradient background */}
      <div 
        className="hero-banner opacity-0 translate-y-[60px] text-white py-16 px-6 text-center rounded-lg shadow-xl"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)' }}
      >
        <div className="mb-12 max-w-3xl mx-auto">
          <span className="inline-block bg-[#e2b714] text-[#1a1a2e] text-sm font-bold py-1 px-4 rounded-full mb-4">
            Summer Sale — Up to 60% Off
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Everything you need,<br />delivered fast.
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8">
            Shop thousands of products at unbeatable prices. New arrivals every week.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-sm mx-auto">
            <button className="bg-[#e2b714] text-[#1a1a2e] font-bold py-3 px-8 hover:bg-yellow-500 transition-colors">
              Shop Now
            </button>
            <button className="bg-transparent border-2 border-white text-white py-3 px-8 hover:bg-white hover:text-[#1a1a2e] transition-colors">
              View Deals
            </button>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="border-t border-white/15 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="stat-item opacity-0 translate-y-[30px] text-center"
            >
              <span className="text-3xl font-bold text-[#e2b714] block">{stat.number}</span>
              <span className="text-sm text-gray-400 mt-1 block">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}