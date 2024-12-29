import featured from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../Components/ScetionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="bg-[url('/Assets/featured.jpg')] bg-black bg-opacity-60 text-white bg-no-repeat bg-center bg-cover bg-fixed py-2 my-16 relative">
     
      <SectionTitle
        subheading={"Check It Out"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="flex items-center  justify-center gap-10 py-10 px-36">
        <div>
          <img className="rounded-lg" src={featured} alt="" />
        </div>
        <div className="space-y-5">
          <p className="">Dec 30,2024</p>
          <h2 className="uppercase">Where Can I Get some?</h2>
          <p>
            Discover the heart of our restaurant with our featured dishes,
            crafted with the freshest ingredients and inspired by flavors from
            around the world. Each dish tells a story of passion and creativity,
            bringing an unforgettable culinary experience to your table. Dive
            into a journey of taste that's truly extraordinary!
          </p>
          <button className="btn btn-outline text-white border-0 border-b-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
