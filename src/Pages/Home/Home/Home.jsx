import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured Items/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularItems></PopularItems>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
