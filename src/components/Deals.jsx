export default function Deals() {
  const deals = [
    { name: "Bluetooth Speaker", old: "$59.99", new: "$29.99", discount: "50% OFF", stock: 30 },
    { name: "Laptop Stand", old: "$45.00", new: "$22.50", discount: "50% OFF", stock: 55 },
    { name: "Stainless Water Bottle", old: "$28.00", new: "$14.99", discount: "46% OFF", stock: 10 },
    { name: "Wireless Mouse", old: "$39.99", new: "$19.99", discount: "50% OFF", stock: 72 },
    { name: "Desk Lamp (LED)", old: "$34.99", new: "$17.99", discount: "49% OFF", stock: 20 },
  ];

  return (
    <div className="bg-[#1a1a2e] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h3 className="text-2xl font-bold text-[#e2b714] m-0">Flash Deals</h3>
          <span className="text-[#e63946] font-medium text-lg">Ends in: <strong className="font-bold">04:32:18</strong></span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="bg-[#e2b714] text-[#1a1a2e]">
                <th className="p-3 text-sm font-bold">Product</th>
                <th className="p-3 text-sm font-bold">Original Price</th>
                <th className="p-3 text-sm font-bold">Sale Price</th>
                <th className="p-3 text-sm font-bold">Discount</th>
                <th className="p-3 text-sm font-bold">Stock Left</th>
                <th className="p-3 text-sm font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal, i) => (
                <tr key={i} className={`border-b border-white/10 ${i % 2 !== 0 ? 'bg-white/5' : ''}`}>
                  <td className="p-3 text-sm text-gray-200">{deal.name}</td>
                  <td className="p-3 text-sm text-gray-400 line-through">{deal.old}</td>
                  <td className="p-3 text-base font-bold text-[#e2b714]">{deal.new}</td>
                  <td className="p-3">
                    <span className="bg-[#e63946] text-white py-1 px-2 text-xs font-bold">{deal.discount}</span>
                  </td>
                  <td className="p-3 text-sm text-gray-300 flex items-center gap-2">
                    <progress value={deal.stock} max="100" className="w-16 h-2"></progress> {deal.stock} left
                  </td>
                  <td className="p-3">
                    <button className="bg-[#e63946] text-white border-none py-2 px-4 text-xs font-bold cursor-pointer hover:bg-red-700 transition">
                      Grab Deal
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}