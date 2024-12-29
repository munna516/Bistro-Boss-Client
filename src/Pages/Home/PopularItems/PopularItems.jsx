import SectionTitle from "../../../Components/ScetionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItems from "../../Shared/Menu Items/MenuItems";

const PopularItems = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((items) => items.category === "popular");

  return (
    <div>
      <SectionTitle
        heading="From Our Menu"
        subheading="Check It out"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {popularItems.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-outline border-0 border-b-4">
          Read More
        </button>
      </div>
    </div>
  );
};

export default PopularItems;
