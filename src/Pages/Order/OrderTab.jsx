
import FoodCard from "../../Components/Food Card/FoodCard";

const OrderTab = ({ item }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {item.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
