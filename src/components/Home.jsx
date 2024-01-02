import { useEffect } from "react";
import Banner from "./Banner";
import MyExperience from "./MyExperience";
import MyServices from "./MyServices";
import WhyHire from "./WhyHire";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div>
      <div data-aos="zoom-in">
        <Banner></Banner>
      </div>
      <div className="hidden lg:block" data-aos="zoom-in">
        <MyServices></MyServices>
      </div>
      <div data-aos="zoom-in">
        <MyExperience></MyExperience>
      </div>
      <div data-aos="zoom-in">
        <WhyHire></WhyHire>
      </div>
    </div>
  );
};

export default Home;
