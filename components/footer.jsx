import Link from "next/link";

const Footer = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <div className="container-fluid bg-light pt-5 px-sm-3 px-md-5">
        <div className="row">
          <div className="col-lg-7 col-md-11 mb-5 mx-md-3">
            <a href="index.html" className="navbar-brand">
              <h1 className="mb-2 mt-2 display-5 text-uppercase featuredHeader fw-normal footerHeader">
                Agro<span className="text-dark ">Teen</span>
              </h1>
            </a>
            <p>
              {" "}
              Agroteen Agriculture and Foods processing Ltd is an agricultural
              and foods processing company duly registered with Corporate
              Affairs Commission.
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-outline-secondary text-center mx-1 px-0"
                style={{ width: "38px", height: "38px" }}
                href="#"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                className="btn btn-outline-secondary text-center mx-1 px-0"
                style={{ width: "38px", height: " 38px" }}
                href="#"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                className="btn btn-outline-secondary text-center mx-1 px-0"
                style={{ width: "38px", height: " 38px" }}
                href="#"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                className="btn btn-outline-secondary text-center mx-1 px-0"
                style={{ width: "38px", height: " 38px" }}
                href="#"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                className="btn btn-outline-secondary text-center mx-1 px-0"
                style={{ width: "38px", height: " 38px" }}
                href="#"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-12
               mb-5 mx-sm-4 mx-lg-0"
          >
            <h4 className="font-weight-bold mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-secondary mb-2" href="#">
                <i
                  className="fa fa-angle-right text-dark mr-2"
                  href="#about"
                ></i>
                About
              </a>

              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2"></i>Privacy &
                policy
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2"></i>Terms &
                conditions
              </a>
              <Link href={"/contact"}>
                <a className="text-secondary" href="#">
                  <i className="fa fa-angle-right text-dark mr-2"></i>Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
