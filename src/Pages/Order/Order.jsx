import { useState } from "react";
import orderFood from "../../assets/shop/order_food.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/Food Card/FoodCard";

const Order = () => {
  const [menu] = useMenu();
  const offered = menu.filter((items) => items?.category === "offered");
  const dessert = menu.filter((items) => items?.category === "dessert");
  const pizza = menu.filter((items) => items?.category === "pizza");
  const salad = menu.filter((items) => items?.category === "salad");
  const soup = menu.filter((items) => items?.category === "soup");
  const drink = menu.filter((items) => items?.category === "drinks");
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {dessert.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {drink.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
