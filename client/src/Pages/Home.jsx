import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import FeaturedProduct from "../components/home/FeaturedProduct";
import UserReview from "../components/home/UserReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <div className="my-24">
          <h1 className="mb-16 text-2xl font-semibold text-center">
            Featured Products
          </h1>
          <FeaturedProduct />
        </div>
        <div className="my-24">
          <h1 className="mb-16 text-2xl font-semibold text-center">
            User Review
          </h1>
          <UserReview />
        </div>
        <div className="my-24">
          <h1 className="mb-16 text-2xl font-semibold text-center">
            Frequently Asked Question
          </h1>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Home;
