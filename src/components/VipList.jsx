import { vipServices1, vipServices2, vipServices3 } from "../data";
import VipGraphic from "../assets/Vip-Graphic.png";
import IMG08 from "../assets/intro-2.png";
import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

const VipList = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="vip"
      className="vip-services"
      style={{ marginBottom: "0", position: "relative" }}
    >
      <div className="container">
        <div className="row">
          <h2 className="heading text-center mb-5">
            VIP PROTECTION/<span>CLOSE PROTECTION OFFICER</span>
          </h2>
          <div className="col-md">
            <p className="lead">
              Our VIP Protection services provide a holistic approach to close
              protection. Essentially, this means that every conceivable aspect
              that could or would impact on the health, wealth reputation and
              safety of our client (principal), is dealt with in a suitable
              manner. Transportation , route and destinations are carefully
              analysed and all conceivable risks are identified and adequate
              plans are made and put into place. Residential and hotel security
              in considered and, where needed, the principal is advised.
              <b>Bstain Security Services</b> categories its CPO’s into specific
              operational groups based on the CPO’s actual field of expertise.
              These would be:
            </p>
            <p className="lead text-dark">
              <b>Single CPO</b> Usually required for ad hoc hourly or daily work
              generally for low-key security requirements and escourting. Our
              Category 1 CPO’s are specialists in one-on-one protection,
              driving, firearm handling and basic medical support.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg" data-aos="zoom-in">
            <h3 className="list-heading text-nowrap">
              Execute Protection CPO - Specializing in:
            </h3>
            <ul className="list">
              {vipServices1.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg" data-aos="zoom-in">
            <h3 className="list-heading text-nowrap">
              Team Leader – Specializing in:
            </h3>
            <ul className="list">
              {vipServices2.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <h3 className="list-heading text-nowrap">
              High-Threat CPO – Specializing in:
            </h3>
            <ul className="list">
              {vipServices3.map((service, index) => (
                <li key={index} className="lead">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE IMG */}
          <div
            className="col-md-8 mx-auto text-center d-lg-none mt-5"
            data-aos="zoom-in"
          >
            <Image
              src={IMG08}
              alt="Upper Level Security, Security company in Brakpan"
              style={{ height: "15rem", borderRadius: "1rem" }}
            />
          </div>
          {/* GRAPHIC */}
          <div
            className="col-md-6 d-none d-lg-block"
            style={{ position: "absolute", bottom: "0", left: "30rem" }}
          >
            <Image
              src={VipGraphic}
              alt="Upper Level Security, Security company in Brakpan"
              style={{
                width: "50rem",
                position: "absolute",
                bottom: "0",
                right: "1rem",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipList;
