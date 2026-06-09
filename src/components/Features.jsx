import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  const features = [
    { icon: "🚚", title: "Fast Delivery", desc: "Get your orders in 2-3 business days with our express shipping network across the country." },
    { icon: "🔒", title: "Secure Payments", desc: "All transactions are encrypted and protected. We support Visa, Mastercard, PayPal, and more." },
    { icon: "🔄", title: "Easy Returns", desc: "Not satisfied? Return any item within 30 days, no questions asked. Full refund guaranteed." },
    { icon: "🌟", title: "Top Quality", desc: "Every product is vetted by our team. We only list items with a minimum 4-star rating." },
    { icon: "📞", title: "24/7 Support", desc: "Our customer support team is always available via chat, email, or phone to help you." },
    { icon: "🎁", title: "Loyalty Rewards", desc: "Earn points on every purchase and redeem them for discounts on future orders." }
  ];

  return (
    <div ref={containerRef} className="bg-white py-12 px-6 text-center overflow-hidden">
      <h3 className="text-2xl font-bold text-[#1a1a2e] mb-8">Why Shop with ShopEasy?</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, index) => (
          <div 
            key={index} 
            ref={(el) => (cardRefs.current[index] = el)} 
            className="bg-[#f9f9f9] border border-gray-200 p-8 text-left hover:shadow-md transition-shadow"
          >
            <span className="text-4xl block mb-4">{feat.icon}</span>
            <h4 className="text-[#1a1a2e] text-lg font-bold mb-2">{feat.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}