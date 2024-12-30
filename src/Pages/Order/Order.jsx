import { useState } from "react";
import orderFood from "../../assets/shop/order_food.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/Food Card/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
  const [menu] = useMenu();
  const { category } = useParams();
  const categoris = ["salad", "pizza", "soup", "dessert", "drinks"];
  const initialInd = categoris.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialInd);
  const dessert = menu.filter((items) => items?.category === "dessert");
  const pizza = menu.filter((items) => items?.category === "pizza");
  const salad = menu.filter((items) => items?.category === "salad");
  const soup = menu.filter((items) => items?.category === "soup");
  const drink = menu.filter((items) => items?.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderFood} title={"Order Food"}></Cover>
      <div className="my-14 p-3">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab item={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={drink}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
