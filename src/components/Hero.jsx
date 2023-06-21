/* eslint-disable @next/next/no-img-element */
import LOGO from "../assets/UlsLogo.png";
import UpperLevelText from "../assets/UpperLevelText.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <header className="hero" id="home" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="row hero-wrapper mt-5">
          <div
            className="col-12 col-lg text-center text-lg-start hero-left"
            data-aos="zoom-in"
          >
            <h1 className="heading" style={{ position: "relative" }}>
              UPPER LEVEL <span>SECURITY</span>
            </h1>
            <Image
              src={UpperLevelText}
              alt="Upper Level Security"
              className="d-none d-lg-block"
              style={{
                position: "absolute",
                bottom: "15rem",
                right: "2.5rem",
              }}
            />
            <p className="lead">
              Upper Level Security prides its-self in striving for excellence
              and its continuous improvement in the security sector. It is
              therefore its policy to formulate ‘Quality Management Systems’.
              Specifically designed for each of our business partner’s unique
              requirements, rather than a general approach.
            </p>
            <div className="row">
              <div className="col-md-4">
                <Link
                  href="mailto:mmohau1@gmail.com"
                  target="_blank"
                  className="btn btn-outline-primary  shadow mt-md-3 mt-lg-0 mb-md-0 d-none d-md-block"
                >
                  <i className="bi bi-chevron-right"></i>get free quote
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  href="/services"
                  className="btn btn-primary shadow mt-md-3 mt-lg-0 mb-lg-0  d-none d-md-block"
                >
                  <i className="bi bi-chevron-right"></i>view services
                </Link>
              </div>
            </div>

            {/* MOBILE BUTTONS */}
            <Link
              href="mailto:mmohau1@gmail.com"
              target="_blank"
              className="btn btn-sm btn-outline-primary  shadow mt-md-3 mt-lg-0 mb-md-0 d-md-none"
            >
              <i className="bi bi-chevron-right"></i>get free quote
            </Link>
            <Link
              href="/services"
              className="btn btn-sm  btn-primary mx-2 shadow mt-md-3 mt-lg-0 mb-lg-0 d-md-none"
            >
              <i className="bi bi-chevron-right"></i>view services
            </Link>
          </div>
          <div
            className="col-12 col-md hero-right mt-sm-5 mt-md-0"
            data-aos="zoom-in"
          >
            <Image
              src={LOGO}
              alt="Upper Level Security Logo"
              className="logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
