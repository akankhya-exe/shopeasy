export default function Categories() {
  const categories = [
    { icon: "🎧", name: "Electronics", count: "500+ items" },
    { icon: "👗", name: "Fashion", count: "1200+ items" },
    { icon: "🏡", name: "Home & Garden", count: "800+ items" },
    { icon: "🏊", name: "Sports", count: "350+ items" },
    { icon: "📚", name: "Books", count: "2000+ items" },
    { icon: "🍕", name: "Grocery", count: "600+ items" },
  ];

  return (
    <div className="bg-white py-12 px-6 text-center">
      <h3 className="text-2xl font-bold text-[#1a1a2e] mb-8">Shop by Category</h3>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        {categories.map((cat, i) => (
          <div 
            key={i} 
            className="bg-[#f9f9f9] border border-gray-200 p-6 w-[140px] cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">{cat.icon}</div>
            <h4 className="text-sm font-bold text-[#1a1a2e] mb-1">{cat.name}</h4>
            <p className="text-xs text-gray-500">{cat.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}