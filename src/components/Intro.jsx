/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Logo from "../assets/Logo.png";
// import { Link } from "react-router-dom";
import IMG08 from "../assets/intro-2.png";
import IMG20 from "../assets/intro-1.png";
import Link from "next/link";
import Image from "next/image";

const Intro = () => {
  const string1 =
    '"I am not a product of my circumstances. I am a product of my decisions"';

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="intro" className="intro">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-xl-4 intro-content text-center text-md-start px-lg-5 py-lg-5">
            <h2 className="text-center mb-3 heading">
              EXECUTIVE <span>SUMMARY</span>
            </h2>
            <p className="lead" data-aos="fade-up">
              Upper Level Security is a 100% blacked owned company with a Level
              three (3) BEE certification.
            </p>
            <p className="lead" data-aos="fade-up">
              In the current political climate, with increasing fears of
              criminal activity, and the current economic climate, where
              unemployment is ever increasing and many young people are
              resorting to crime to fulfill their financial needs, every
              business must be protected by an acute security company which is
              dedicated and well prepared to prevent crime.
            </p>
            <p className="lead" data-aos="fade-up">
              Providing the ultimate in customer services and satisfaction along
              with building long term relationships with our clients is the
              cornerstone of our business. Upper Level Security has a reputation
              of completing its projects professionally, in time and within the
              specified budget. We specialize in all aspects of security
              including guarding division and investigations.
            </p>
            <p className="lead" data-aos="fade-up">
              The company strongly emphasizes the “satisfaction guaranteed”
              motto and works on a collaborative basis with staff and clients
            </p>
            <Link
              href="mailto:protected@upperlevelsecurity.co.za"
              target="new"
              className="btn btn-primary mx-auto mx-md-0"
              style={{ width: "10rem" }}
              data-aos="zoom-in"
            >
              <i className="bi bi-chevron-right"></i>get quote
            </Link>

            {/* MOBILE IMG */}
            <div className="col-md d-md-none mt-5 text-center">
              <Image
                src={IMG20}
                alt="Upper Level Security, Security company in Brakpan"
                style={{
                  height: "15rem",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>

          {/* TWO EMPTY DIV */}
          <div className="col-md-3"></div>
          {/* THREE */}
          <div className="col-12 col-xl-5 intro-content text-center text-md-start mt-5 mt-lg-0 px-lg-5">
            <h2 className="heading mb-3 text-center">
              our <span>history</span>
            </h2>
            <p className="lead" data-aos="fade-up">
              After realizing that in this industry, every company is doing
              things the same way, lack of innovation in the industry was the
              birth of Upper Level Security.
            </p>
            <p className="lead" data-aos="fade-up">
              The founder of the company (Mohau Richard Mokoena) started working
              in the security industry as a security guard, thats when the
              desire to improve the standard of private security was realised,
              and as a strong believer in trustworthy and honest customer
              service, things played out.
            </p>
            <p className="lead" data-aos="fade-up">
              The need for that service was realized and Upper Level Security
              came to be.
            </p>
            <p className="lead" data-aos="zoom-in">
              Our previous clients include big and small organizations whom that
              we have served with pride without compromising the standard of
              service because safety is our priority.
            </p>

            {/* MOBILE IMG */}
            <div className="col-md d-md-none text-center">
              <Image
                src={IMG08}
                alt="Upper Level Security, Security company in Brakpan"
                style={{
                  height: "15rem",
                  borderRadius: "20px",
                }}
              />
            </div>

            {/* LOGO MD ONLY */}
            <div
              className="d-none"
              style={{ position: "absolute", right: "4rem", top: "-4rem" }}
            >
              <Image
                src={Logo}
                alt="Upper Level Security Logo"
                style={{ width: "8rem" }}
                className=""
              />
            </div>
            <div
              className="col-md-8 d-none d-md-block"
              style={{
                position: "absolute",
                bottom: "11rem",
                right: "-4rem",
              }}
            >
              <p
                className="lead text-white text-center"
                style={{ fontWeight: "bold" }}
              >
                {string1}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
