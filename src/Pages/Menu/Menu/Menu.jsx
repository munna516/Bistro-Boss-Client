import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../Components/ScetionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((items) => items?.category === "offered");
  const dessert = menu.filter((items) => items?.category === "dessert");
  const pizza = menu.filter((items) => items?.category === "pizza");
  const salad = menu.filter((items) => items?.category === "salad");
  const soup = menu.filter((items) => items?.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Cover Image */}
      <Cover
        img={menuImg}
        title={"Our Menu"}
        subtitle={"Would You Like to Try a dish?"}
      ></Cover>
      {/* title */}
      <SectionTitle
        heading="Today's Offer"
        subheading="Don't Miss"
      ></SectionTitle>
      {/* Offered */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert Section */}
      <Cover
        img={desertImg}
        title={"dessert"}
        subtitle={"Would You Like to Try a dish?"}
      ></Cover>
      <MenuCategory items={dessert}></MenuCategory>

      {/* Pizza */}
      <Cover
        img={pizzaImg}
        title={"Pizza"}
        subtitle={"Would You Like to Try a dish?"}
      ></Cover>
      <MenuCategory items={pizza}></MenuCategory>

      {/* Salad */}
      <Cover
        img={saladImg}
        title={"Salad"}
        subtitle={"Would You Like to Try a dish?"}
      ></Cover>
      <MenuCategory items={salad}></MenuCategory>
      {/* Soup */}
      <Cover
        img={soupImg}
        title={"Soup"}
        subtitle={"Would You Like to Try a dish?"}
      ></Cover>
      <MenuCategory items={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
