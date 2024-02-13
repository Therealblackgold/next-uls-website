import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IMG1 from "../assets/uls/01.png";
import IMG2 from "../assets/uls/02.png";
import IMG3 from "../assets/uls/03.png";
import IMG4 from "../assets/uls/04.png";
import IMG5 from "../assets/uls/05.png";
import IMG6 from "../assets/uls/06.png";
import IMG7 from "../assets/uls/07.png";
import IMG8 from "../assets/uls/08.png";
import IMG9 from "../assets/uls/09.png";
import IMG10 from "../assets/uls/10.png";
import IMG11 from "../assets/uls/11.png";

import Image from "next/image";

const Compliance = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="compliance" id="compliance">
      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="col  text-center">
            <h2 className="heading mb-5" data-aos="fade-down">
              ORGANIZATION<span> COMPLIANCE</span>
            </h2>
            <p className="mb-5">
              Compliance stands as the bedrock of Upper Level Security, guiding
              every facet of our operations with unwavering commitment.
              Upholding stringent adherence to legal statutes and industry
              regulations, we ensure the protection of sensitive information and
              the preservation of client trust. From meticulously maintaining
              licensure and certifications to implementing cutting-edge
              cybersecurity protocols, every action is meticulously aligned with
              prevailing standards. Through rigorous audits and continuous
              improvement initiatives, Upper Level Security remains at the
              forefront of compliance, proactively identifying and addressing
              potential vulnerabilities. By prioritizing compliance, we not only
              mitigate risks but also foster an environment of accountability
              and reliability, reinforcing our reputation as a beacon of
              integrity and excellence in the security industry.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="row">
          <div className="col text-center">
            <Image
              src={IMG1}
              alt="Upper Level Security Brakpan"
              className="lg-img"
            />
          </div>
          <div className="col text-center">
            <Image
              src={IMG2}
              alt="Upper Level Security Brakpan"
              className="lg-img"
            />
          </div>
          <div className="col text-center">
            <Image
              src={IMG3}
              alt="Upper Level Security Brakpan"
              className="md-img"
            />
          </div>
          <div className="col text-center">
            <Image
              src={IMG5}
              alt="Upper Level Security Brakpan"
              className="md-img"
            />
          </div>
        </div>
        {/* row 2 */}
        <div className="row">
          <div className="col text-center">
            <Image
              src={IMG6}
              alt="Upper Level Security Brakpan"
              className="sm-img"
            />
          </div>
          <div className="col text-center">
            <Image
              src={IMG7}
              alt="Upper Level Security Brakpan"
              className="sm-img"
            />
          </div>
          <div className="col text-center">
            <Image
              src={IMG8}
              alt="Upper Level Security Brakpan"
              className="md-img"
            />
          </div>
          <div className="col text-center">
            <Image
              src={IMG9}
              alt="Upper Level Security Brakpan"
              className="lg-img"
            />
          </div>
        </div>
        {/* row 3 */}
        <div className="row mb-5">
          <div className="col col-lg-4 text-center">
            <Image
              src={IMG10}
              alt="Upper Level Security Brakpan"
              className="sm-img"
            />
          </div>
          <div className="col col-lg-4 text-center">
            <Image
              src={IMG11}
              alt="Upper Level Security Brakpan"
              className="lg-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
