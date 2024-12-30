import React from "react";

const FoodCard = ({ item }) => {
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img className="w-full" src={item.image} alt={item.name} />
      </figure>
      <p className="bg-slate-600 text-white absolute right-4 mt-4  px-4 py-1 rounded-md">${item.price}</p>
      <div className="card-body justify-center flex items-center mt-5">
        <h2 className="card-title font-bold text-2xl">{item.name}</h2>
        <p className="text-gray-400">{item.recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-orange-300 border-b-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
