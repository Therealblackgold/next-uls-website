import Logo from "../assets/Logo.png";
import Image from "next/image";

import Avenir from "@next/font/local";

const avenir = Avenir({
  src: "../assets/fonts/Avenir_Regular/AvenirRegular.ttf",
  weights: ["100", "300", "400", "600", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`footer ${avenir.className}`}>
      <div className="container">
        <div className="row">
          <div className="col-md text-center">
            <Image
              src={Logo}
              alt="logo"
              style={{ width: "6rem", margin: "1rem", marginTop: "5rem" }}
              placeholder="blur"
              priority
            />
            <div className="social-icon">
              <a href="tel:011732 1004">
                <span>
                  <i className="bi bi-telephone-fill"></i>(011) 732 1004
                </span>
              </a>
              <a href="mailto:protected@upperlevelsecurity.co.za">
                <span>
                  <i className="bi bi-envelope-fill"></i>
                  protected@upperlevelsecurity.co.za
                </span>
              </a>
              <a href="https://www.upperlevelsecurity.co.za">
                <span>
                  <i className="bi bi-globe-central-south-asia"></i>
                  upperlevelsecurity.co.za
                </span>
              </a>
            </div>
            <p>All Rights Reserved UPPER LEVEL SECURITY {currentYear} &copy;</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
