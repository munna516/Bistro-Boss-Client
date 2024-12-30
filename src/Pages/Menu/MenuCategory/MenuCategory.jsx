import { Link } from "react-router-dom";
import MenuItems from "../../Shared/Menu Items/MenuItems";

const MenuCategory = ({ items }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 mb-12 mt-12">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center items-center mb-5">
        <Link to={`/order/${items[0]?.category}`}>
          <button className="btn btn-outline border-0 border-b-4">
            Order Your Favourite Food
          </button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
