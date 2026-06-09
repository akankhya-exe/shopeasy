export default function Reviews() {
  const reviews = [
    { name: "Sarah M.", text: "Absolutely love this store! The products are high quality and shipping was super fast. Will definitely shop again!" },
    { name: "James T.", text: "Great prices, easy checkout, and the customer support team helped me track my package immediately. 10/10!" },
    { name: "Priya K.", text: "The wireless headphones I bought are incredible for the price. Battery lasts all day. Highly recommend!" },
    { name: "Leo B.", text: "I returned an item hassle-free and got my refund within 3 days. That's the kind of service that builds trust!" },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6 text-center">
      <h3 className="text-2xl font-bold text-[#1a1a2e] mb-8">What Our Customers Say</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-white border border-gray-200 p-6 text-left shadow-sm">
            <div className="text-[#e2b714] text-lg mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="text-gray-700 text-sm leading-relaxed italic mb-4">"{rev.text}"</p>
            <div>
              <strong className="block text-[#1a1a2e] text-sm">{rev.name}</strong>
              <span className="text-xs text-[#2a9d8f] font-medium">Verified Buyer</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}