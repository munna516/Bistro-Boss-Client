import React from "react";

const FoodCard = ({ item }) => {
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img className="" src={item.image} alt={item.name} />
      </figure>
      <div className="card-body justify-center flex items-center mt-5">
        <h2 className="card-title font-bold text-2xl">{item.name}</h2>
        <p className="text-gray-400">{item.recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
