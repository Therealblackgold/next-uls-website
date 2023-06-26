import {
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
} from "../data";
import Logo from "../assets/UlsLogo.png";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IMG1 from "../assets/gallery/team05-min.jpg";

const List = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="services"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div className="container" style={{ zIndex: "90" }}>
        {/* row 1 */}
        <div className="row">
          <Image
            src={Logo}
            alt="Upper Level Security Logo"
            className="d-none d-lg-block mt-4"
            style={{
              width: "10rem",
              position: "absolute",
              top: "2rem",
              left: "5rem",
            }}
          />
          <motion.h2
            className="heading text-center mb-5"
            initial={{ y: "-50px" }}
            animate={{ y: "0px" }}
          >
            our<span> services</span>
          </motion.h2>
          <div className="col-lg" style={{ zIndex: "90" }} data-aos="zoom-in">
            <h3 className="list-heading fs-4">Guarding Division</h3>
            <ul className="list">
              {services1.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg" style={{ zIndex: "90" }} data-aos="zoom-in">
            <h3 className="list-heading fs-4">Risk Management</h3>
            <ul className="list">
              {services2.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg" style={{ zIndex: "90" }} data-aos="zoom-in">
            <h3 className="list-heading fs-4">Off-Site Monitoring</h3>
            <ul className="list">
              {services3.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* row 2 */}
        <div className="row">
          <div
            className="col-12 col-lg"
            style={{ zIndex: "90" }}
            data-aos="zoom-in"
          >
            <h3 className="list-heading fs-4">Electronic Security</h3>
            <ul className="list">
              {services4.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="col-12 col-lg"
            style={{ zIndex: "90" }}
            data-aos="zoom-in"
          >
            <h3 className="list-heading fs-4">Online CCTV Security</h3>
            <ul className="list">
              {services5.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="col-12 col-lg"
            style={{ zIndex: "90" }}
            data-aos="zoom-in"
          >
            <h3 className="list-heading fs-4">Protection & Assessment</h3>
            <ul className="list">
              {services6.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md text-center d-md-none mt-5" data-aos="zoom-in">
            <Image
              src={IMG1}
              alt="Upper Level Security, Security company in Brakpan"
              style={{ height: "15rem", borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
