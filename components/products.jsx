import Carousel from "react-multi-carousel";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

const Products = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1399, min: 701 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="products" className="products">
      <h1
        style={{
          marginLeft: "5%",

          color: "#459e06",
        }}
        className="mt-5 aboutHeader"
      >
        Our Products
      </h1>

      <div className="mt-4" data-aos="fade-up">
        <Carousel
          responsive={responsive}
          draggable={true}
          autoPlay={true}
          // autoPlaySpeed={100}
          arrows={false}
          showDots={true}
          keyBoardControl={true}
          infinite={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
        >
          <div className="productDiv" style={{ boxShadow: " 10px 10px 20px" }}>
            <div
              className=""
              style={{
                marginLeft: "50px",
                marginRight: "50px",
                paddingTop: "20px",
              }}
            >
              <Image
                src={product1}
                height={400}
                width={700}
                objectFit="cover"
              ></Image>
            </div>

            <div className="mt-2">
              <h1
                style={{
                  textAlign: "right",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
                className="mx-5"
              >
                VEGETABLES
              </h1>
            </div>
          </div>

          <div
            className="productDiv"
            style={{
              boxShadow: " 10px 10px 20px",
            }}
          >
            <div
              className=""
              style={{
                marginLeft: "50px",
                marginRight: "50px",
                paddingTop: "20px",
              }}
            >
              <Image
                src={product2}
                height={400}
                width={700}
                objectFit="cover"
              ></Image>
            </div>

            <div className="mt-2">
              <h1
                style={{
                  textAlign: "right",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
                className="mx-5"
              >
                WHEAT
              </h1>
            </div>
          </div>
          <div className="productDiv" style={{ boxShadow: " 10px 10px 20px" }}>
            <div
              className=""
              style={{
                marginLeft: "50px",
                marginRight: "50px",
                paddingTop: "20px",
              }}
            >
              <Image
                src={product3}
                height={400}
                width={700}
                objectFit="cover"
              ></Image>
            </div>

            <div className="mt-2">
              <h1
                style={{
                  textAlign: "right",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
                className="mx-5"
              >
                FRUIT
              </h1>
            </div>
          </div>
          <div className="productDiv" style={{ boxShadow: " 10px 10px 20px" }}>
            <div
              className=""
              style={{
                marginLeft: "50px",
                marginRight: "50px",
                paddingTop: "20px",
              }}
            >
              <Image
                src={product4}
                height={400}
                width={700}
                objectFit="cover"
              ></Image>
            </div>
            <div className="mt-2">
              <h1
                style={{
                  textAlign: "right",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
                className="mx-5"
              >
                SUNFLOWER
              </h1>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Products;
