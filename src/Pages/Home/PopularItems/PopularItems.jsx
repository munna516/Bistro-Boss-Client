import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/ScetionTitle/SectionTitle";
import MenuItems from "../../Shared/Menu Items/MenuItems";

const PopularItems = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menus.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(
          (items) => items.category === "popular"
        );
        setMenu(popularItems);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        heading="From Our Menu"
        subheading="Check It out"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {menu.map((items) => (
          <MenuItems key={items._id} items={items}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
