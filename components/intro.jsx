import Slider1 from "../assets/slider1.jpg";
import Image from "next/image";
import Food from "../assets/food.jpg";
import Img1 from "../assets/img1.jpg";
import Link from "next/link";

const Intro = () => {
  return (
    <div>
      <section className="banner_main  " data-aos="fade-up">
        <div className="d-md-flex   flex-column text-center">
          <h1 className="companyName fw-bold text-light">AGROTEEN COMPANY</h1>
          <p className=" companyDetails">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            consectetur architecto quasi exercitationem provident? Voluptates
            optio non quod quam eos ullam recusandae incidunt velit eum,
            consequuntur voluptatem. Excepturi accusantium odio, quae
            praesentium omnis fugiat perferendis tempore dolore perspiciatis
            doloremque officia.
          </p>
          <div className="introButton">
            <Link href={"/contact"}>
              <a href=""> Discover</a>
            </Link>
          </div>
        </div>
        <div className="introImages d-none d-md-flex ">
          <div className="introSub mx-5">
            <Image src={Slider1} height={160} width={230}></Image>
          </div>
          <div className="introSub mx-5">
            <Image
              src={Food}
              height={160}
              width={230}
              objectFit="cover"
            ></Image>
          </div>
          <div className="introSub mx-5">
            <Image
              src={Img1}
              height={160}
              width={230}
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </section>
      <div
        className="introImages2 d-md-none align-items-center justify-content-center d-flex flex-column mt-4"
        data-aos="fade-up"
      >
        <div className="introSub">
          <Image src={Slider1} height={160} width={230}></Image>
        </div>
        <div className="introSub">
          <Image src={Food} height={160} width={230} objectFit="cover"></Image>
        </div>
        <div className="introSub">
          <Image src={Img1} height={160} width={230} objectFit="cover"></Image>
        </div>
      </div>

      {/* About us -------------------------------------------------------------------------------------------------------- */}

      <div id="about" className="aboutUs" data-aos="fade-up">
        <div className="hottest">
          <div className="container">
            <div className=" d-lg-flex align-items-center justify-content-between">
              <div className=" mb-0 mb-4 mb-md-5   ">
                <div className="titlepage text-center text-md-start fw-bold">
                  <h2 className=" aboutHeader text-start   mt-lg-5">
                    About us
                  </h2>
                </div>
              </div>
              <div>
                <div className="hottest_box">
                  <p>
                    Agroteen Agriculture and Foods processing Ltd is an
                    agricultural and foods processing company duly registered
                    with Corporate Affairs Commission. We cultivate different
                    cash crops such as tomatoes, pepper, Cucumber, Watermelon,
                    plantain and banana and our livestock sections include
                    fishery, poultry, goat and cattle rearing. We also provide a
                    broad range of services and solutions to help individuals
                    and corporate farm and organizations experience financial
                    revolution, achieve their vision and enjoy maximum
                    satisfaction from our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Choose us _------------------------------------------------------------------------------------------- */}

      <div className="choose text-light " data-aos="fade-up">
        <div className="top " style={{ marginLeft: "40px", width: "96%" }}>
          <h2 className="" style={{ width: "70%", color: "#459e06" }}>
            Why Choose Us?{" "}
          </h2>
          <p style={{ width: "70%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa
            necessitatibus voluptate nisi nihil, et nobis vitae. Voluptatum, et.
            At illum veniam repudiandae. Amet dolore, nesciunt dolores adipisci
            sit inventore.
          </p>
        </div>
        <div className="bottom" data-aos="fade-up">
          <div className="d-lg-flex ">
            <div className="left d-flex flex-wrap justify-content-md-center mx-3 mx-md-0 mt-3">
              <div
                className="choose1 d-flex align-items-center"
                style={{
                  width: "300px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                <div className="iconBack">
                  <i
                    className="bi bi-1-circle"
                    style={{ fontSize: "30px" }}
                  ></i>
                </div>
                <div className="">
                  <h4 className="fw-bold text-light">Excellent Service</h4>
                  <p className="" style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae possimus accusantium nobis. A vero maiores
                    dignissimos nihil, hic culpa ipsum nam aspernatur vel!
                  </p>
                </div>
              </div>
              <div
                className="choose1 d-flex align-items-center"
                style={{
                  width: "300px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                <div className="iconBack">
                  <i
                    className="bi bi-2-circle"
                    style={{ fontSize: "30px" }}
                  ></i>
                </div>
                <div className="">
                  <h4 className="fw-bold text-light">Best at what we do</h4>
                  <p className="" style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati, pariatur maiores. Sequi fugiat delectus adipisci
                    aperiam vel dolor odio, pariatur voluptate nihil, voluptatem
                    libero neque earum, repellat aut iure sit.
                  </p>
                </div>
              </div>
              <div
                className="choose1 d-flex align-items-center"
                style={{
                  width: "300px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
                data-aos="fade-up"
              >
                <div className="iconBack">
                  <i
                    className="bi bi-3-circle"
                    style={{ fontSize: "30px" }}
                  ></i>
                </div>
                <div className="">
                  <h4 className="fw-bold text-light">We respect customers</h4>
                  <p className="" style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore explicabo neque facere. Animi veritatis accusamus
                    dolorem, numquam, enim distinctio magni, nisi perferendis
                    officia nostrum adipisci illo odio!
                  </p>
                </div>
              </div>
              <div
                className="choose1 d-flex align-items-center"
                style={{
                  width: "300px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
                data-aos="fade-up"
              >
                <div className="iconBack">
                  <i
                    className="bi bi-4-circle"
                    style={{ fontSize: "30px" }}
                  ></i>
                </div>
                <div className="">
                  <h4 className="fw-bold text-light">
                    Africa’s most innovative brand
                  </h4>
                  <p className="" style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci suscipit assumenda aliquam doloribus itaque ipsa!
                    Ducimus optio fugiat nobis quibusdam.
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="rightImage mt-5 mt-lg-5">
                <Image src={Food} height={350} width={500}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
