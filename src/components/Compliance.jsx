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
              Compliance is our cornerstone at Upper Level Security, guiding
              every operation with unwavering commitment. We uphold strict
              adherence to legal statutes and industry regulations, protecting
              sensitive information and maintaining client trust. From
              maintaining certifications to implementing cutting-edge security,
              we align every action with prevailing standards. Rigorous audits
              and continuous improvement keep us sharp, identifying and
              addressing vulnerabilities. Prioritizing compliance isn't just
              risk management; it's our commitment to accountability and
              reliability, solidifying our reputation as an industry beacon of
              integrity and excellence.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="row mb-5 g-4">
          <div className="col">
            <div className="card  text-center bg-light shadow border-0">
              <Image
                src={IMG1}
                alt="Upper Level Security Brakpan"
                className="lg-img"
              />
            </div>
          </div>
          <div className="col">
            <div className="card text-center bg-light shadow border-0">
              <Image
                src={IMG2}
                alt="Upper Level Security Brakpan"
                className="lg-img"
              />
            </div>
          </div>
          <div className="col">
            <div className="card text-center bg-light shadow border-0">
              <Image
                src={IMG3}
                alt="Upper Level Security Brakpan"
                className="md-img"
              />
            </div>
          </div>
          <div className="col">
            <div className="card text-center bg-light shadow border-0">
              <Image
                src={IMG5}
                alt="Upper Level Security Brakpan"
                className="md-img"
              />
            </div>
          </div>
          <div className="col">
            <div className="card text-center bg-light shadow border-0">
              <Image
                src={IMG10}
                alt="Upper Level Security Brakpan"
                className="sm-img"
              />
            </div>
          </div>
        </div>
        {/* row 2 */}
        <div className="row mb-5 g-4">
          <div className="col">
            <div className="card text-center bg-light shadow border-0">
              <Image
                src={IMG6}
                alt="Upper Level Security Brakpan"
                className="sm-img"
              />
            </div>
          </div>
          <div className="col">
            <div className="card text-center bg-light shadow border-0">
              <Image
                src={IMG7}
                alt="Upper Level Security Brakpan"
                className="sm-img"
              />
            </div>
          </div>
          <div className="col">
            <div className="card text-center bg-light shadow border-0">
              <Image
                src={IMG8}
                alt="Upper Level Security Brakpan"
                className="md-img"
              />
            </div>
          </div>
          <div className="col">
            <div className="card text-center bg-light shadow border-0">
              <Image
                src={IMG9}
                alt="Upper Level Security Brakpan"
                className="lg-img"
              />
            </div>
          </div>
          <div className="col">
            <div className="card text-center bg-light shadow border-0">
              <Image
                src={IMG11}
                alt="Upper Level Security Brakpan"
                className="lg-img"
              />
            </div>
          </div>
        </div>
        {/* row 3 */}
        {/* <div className="row mb-5">
          <div className="col col-lg-4 text-center bg-light shadow">
            <Image
              src={IMG10}
              alt="Upper Level Security Brakpan"
              className="sm-img"
            />
          </div>
          <div className="col col-lg-4 text-center bg-light shadow">
            <Image
              src={IMG11}
              alt="Upper Level Security Brakpan"
              className="lg-img"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Compliance;
