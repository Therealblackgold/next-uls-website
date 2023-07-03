import {
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
} from "../data";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IMG1 from "../assets/team05.png";

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
          <motion.h2
            className="heading text-nowrap text-center mb-5"
            initial={{ y: "-50px" }}
            animate={{ y: "0px" }}
          >
            our<span> services</span>
          </motion.h2>
          <div className="col-lg" style={{ zIndex: "90" }} data-aos="zoom-in">
            <h3 className="list-heading text-nowrap">Guarding Division</h3>
            <ul className="list">
              {services1.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg" style={{ zIndex: "90" }} data-aos="zoom-in">
            <h3 className="list-heading text-nowrap">Risk Management</h3>
            <ul className="list">
              {services2.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg" style={{ zIndex: "90" }} data-aos="zoom-in">
            <h3 className="list-heading text-nowrap">Off-Site Monitoring</h3>
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
            <h3 className="list-heading text-nowrap">Electronic Security</h3>
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
            <h3 className="list-heading text-nowrap">Online CCTV Security</h3>
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
            <h3 className="list-heading text-nowrap">
              Protection & Assessment
            </h3>
            <ul className="list">
              {services6.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="col-md-8 mx-auto text-center d-lg-none mt-5"
            data-aos="zoom-in"
          >
            <Image
              src={IMG1}
              alt="Upper Level Security, Security company in Brakpan"
              style={{ height: "15rem", borderRadius: "1rem" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
