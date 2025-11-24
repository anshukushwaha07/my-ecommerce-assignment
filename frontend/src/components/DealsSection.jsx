import React from "react";

const DealsSection = ({ title, products }) => {
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-3">{title}</h2>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {products.map((p) => (
          <div
            key={p._id}
            className="min-w-[180px] bg-white p-3 rounded-lg shadow hover:shadow-lg transition"
          >
            <img src={p.image} className="h-32 w-full object-cover rounded" />
            <p className="mt-2 font-semibold text-sm">{p.name}</p>
            <p className="text-green-600 font-bold">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
