import React from "react";

const MenuItems = ({ items }) => {
  const { recipe, image, name, price } = items;
  return (
    <div className="flex items-center gap-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[108px]"
        src={image}
        alt=""
      />
      <div>
        <h1 className="uppercase">{name} ------------</h1>
        <p className="text-gray-400">{recipe}</p>
      </div>
      <div>
        <p className="text-yellow-600">${price}</p>
      </div>
    </div>
  );
};

export default MenuItems;
