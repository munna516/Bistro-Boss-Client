import React from "react";

const MenuItems = ({ item }) => {
  const { recipe, image, name, price } = item || {}
  return (
    <div>
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
    </div>
  );
};

export default MenuItems;
