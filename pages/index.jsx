import Image from "next/image";
import Carousel from "react-multi-carousel";
import Blueblack from "../assets/blueback.jpg";
import Footer from "../components/footer";
import Intro from "../components/intro";
import MyNavbar from "../components/navbar";
import Products from "../components/products";
import Testimonial from "../components/testimonial";

export default function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <MyNavbar></MyNavbar>
      <Intro></Intro>
      <Products></Products>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}
