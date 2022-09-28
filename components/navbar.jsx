import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";

const MyNavbar = () => {
  return (
    <div
      className="myNav"
      style={{ fontFamily: "Courier New", marginBottom: "38px" }}
    >
      <Navbar bg="light" expand="lg" className="fixed-top py-2 px-3 px-md-0">
        <Container>
          <Link href={"/"}>
            <div className="logo">
              <Navbar.Brand href="#home">
                <Image
                  src={logo}
                  alt="newslogo"
                  height={70}
                  width={100}
                ></Image>
              </Navbar.Brand>
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-md-auto mx-3 mx-md-none">
              <Nav.Link
                href="#about"
                style={{ textTransform: "uppercase" }}
                className="myNavLink"
              >
                ABOUT-US
              </Nav.Link>
              <Nav.Link
                href="#products"
                style={{ textTransform: "uppercase" }}
                className="myNavLink"
              >
                OUR SERVICES
              </Nav.Link>
              <Nav.Link
                className="myNavLink"
                href="#testimonial"
                style={{ textTransform: "uppercase" }}
              >
                TESTIMONIAL
              </Nav.Link>

              <Nav.Link
                style={{ textTransform: "uppercase", textDecoration: "none" }}
                className="myNavLink"
                href="/contact"
              >
                CONTACT-US
              </Nav.Link>
            </Nav>
            <Link href={"/contact"}>
              <button className="button-62 mt-2  mb-2 mb-lg-0 mt-lg-0">
                Book an appointment
              </button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Navbar section end */}
    </div>
  );
};

export default MyNavbar;
