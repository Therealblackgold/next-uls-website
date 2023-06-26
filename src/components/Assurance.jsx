import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Logo from "../assets/UlsLogo.png";
import Quotes from "../assets/qu.png";
import Image from "next/image";

const Assurance = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="assurance" id="assurance">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-xl-4 mx-auto px-5" style={{ zIndex: "2" }}>
            <h2 className="heading text-center mb-5" data-aos="fade-down">
              QUALITY <br /> <span>ASSURANCE</span>
            </h2>
            <span className="surety">100% Reliable</span>
            <p className="lead mt-3" data-aos="fade-up">
              To constantly provide cutting edge knowledge and information as
              per acceptable national and international standards.
            </p>
            <p className="lead" data-aos="fade-up">
              Achieving customer satisfaction through the combined efforts of
              planning the infrastructure and executing the projects through our
              dedicated workforce.
            </p>
            <p className="lead" data-aos="fade-up">
              We have a system in place for every arm in our company that
              ensures the delivery of high standard of service. Those measures
              include but not limited to:
            </p>
            <ul data-aos="fade-up">
              <li className="lead">Pro-active patrols</li>
              <li className="lead">Site inspections</li>
              <li className="lead">Weekly / Monthly reports</li>
              <li className="lead">Uniform Inspection</li>
              <li className="lead">A guard Monitoring System</li>
              <li className="lead">Service Level Agreements</li>
              <li className="lead">Complex induction Manual</li>
              <li className="lead">Management Objectives</li>
              <li className="lead">Vigilance</li>
              <li className="lead">Supervision</li>
              <li className="lead">Sobriety</li>
            </ul>
            <p className="lead" data-aos="fade-up">
              To assure our clients of Quality Assurance we have established
              another unit called Independant Security Investigation Directory.
              This unit gives our supervisors their ultimate role to ensure our
              guards are working accordingly, that there are no illegal dealings
              that are made on site and that all operations are ran smoothly.
            </p>
          </div>
          {/* TWO EMPTY DIV */}
          <div className="col-md-4"></div>
          <div
            className="col-md-4 image-wrapper"
            style={{ zIndex: "2", position: "relative" }}
          >
            <Image
              src={Logo}
              alt="Upper Level Security Logo"
              className="assurance-logo d-none d-lg-block"
              loading="lazy"
            />
            {/* ABSOLUTE MD ONLY IMAGE */}
            <div className="d-none d-lg-block text-center assurance-graphicx">
              <Image
                src={Quotes}
                alt="Upper Level Security, Security company in Brakpan"
                style={{ width: "4rem", filter: "invert(100%)" }}
                loading="lazy"
              />
              <p className="lead text-white">
                The only way to do great <br /> work is to love what you do.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assurance;
