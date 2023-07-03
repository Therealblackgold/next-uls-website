import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IMG1 from "../assets/cars14.png";
import IMG2 from "../assets/team05.png";
import IMG3 from "../assets/team03.png";
import IMG4 from "../assets/team06.png";
import IMG5 from "../assets/cars04-min .png";
import IMG6 from "../assets/cars01.png";
import Image from "next/image";

const Assurance = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="assurance" id="assurance">
      <div className="container">
        <div className="row">
          <div className="col  text-center">
            <h2 className="heading mb-5" data-aos="fade-down">
              QUALITY<span> ASSURANCE</span>
            </h2>
          </div>
        </div>
        <div className="row p-4">
          {/* ASSURANCE CONTENT */}
          <div className="col-lg-6 mx-auto">
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

          {/* ASSURANCE GRAPHIC */}
          <div className="col-lg-6 assurance-box text-center mt-5 mt-lg-0">
            <div className="row">
              <div className="col">
                <Image src={IMG2} alt="Upper Level Security Brakpan" />
              </div>
              <div className="col">
                <Image src={IMG3} alt="Upper Level Security Brakpan" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Image src={IMG1} alt="Upper Level Security Brakpan" />
              </div>
              <div className="col">
                <Image src={IMG4} alt="Upper Level Security Brakpan" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Image src={IMG5} alt="Upper Level Security Brakpan" />
              </div>
              <div className="col">
                <Image src={IMG6} alt="Upper Level Security Brakpan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assurance;
