import MissionGraphic1 from "../assets/MissionGraphic1-min.jpg";
import Ellipse from "../assets/Ellipse37.png";
import GraphicBronze from "../assets/GraphicBronze-min.png";
import GraphicCar from "../assets/GraphicCar-min.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="mission"
      id="mission"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div className="container-fluid">
        <div className="row">
          {/* VISION */}
          <div className="col-12 col-xl-4 mx-md-3" data-aos="fade-up">
            <div className="vision-content">
              <h1 className="text-center heading mb-3" data-aos="fade-down">
                our <span>vision</span>
              </h1>
              <ul>
                <li className="lead">
                  To contribute in fighting crime and poverty by creating
                  employment and uplifting the disadvantaged by allowing them to
                  gain and maintain skills.
                </li>
                <li className="lead">
                  To achieve excellence in safety measures and quality services.
                </li>
                <li className="lead">
                  To be the leading organization in the industry through
                  excellent service, advancing empowerment values, in motive and
                  efficient industry through training and fair remuneration.
                </li>
                <li className="lead">
                  To always be a step ahead of intruders through our partnership
                  with a local electronics device manufacturing company, that
                  will assure our clients that we well equipt with the latest
                  electronic devices set for the job at hand.
                </li>
              </ul>

              {/* MISSION */}
              <h1
                className="text-center heading mt-5 mb-3"
                data-aos="fade-down"
              >
                our <span>mission</span>
              </h1>
              <ul>
                <li className="lead">
                  To empower our employees to fulfill their aspirations and
                  capabilities through exchange of their honest labor.
                </li>
                <li className="lead">
                  To build a reputation of managing contracts successfully by
                  continually improving our service levels, and constantly
                  meeting our customer requirements.
                </li>
              </ul>
            </div>
          </div>

          {/* GRAPHIC COL */}
          <div
            className="col-md-2 text-center lg-hide"
            style={{ position: "relative" }}
          >
            <Image
              src={MissionGraphic1}
              alt="Upper Level Security, Security company in Brakpan"
              loading="lazy"
              style={{
                width: "18rem",
                height: "30rem",
                borderRadius: "10rem 10rem 2rem 2rem",
              }}
            />
            <div className="mission-graphic-x">
              <Image
                src={Ellipse}
                alt="Upper Level Security, Security company in Brakpan"
                className="ellipse"
                loading="lazy"
              />
            </div>
          </div>

          {/*  PHILOSOPHY COL */}
          <div
            className="col-md-5 lg-hide philosophy"
            style={{
              position: "absolute",
              top: "5rem",
              right: "8rem",
            }}
          >
            <h1 className="text-center heading mb-3" data-aos="fade-down">
              our <span>philosophy</span>
            </h1>

            <Image
              src={GraphicBronze}
              alt="mission-graphic-bronze"
              className="mission-graphic-bronze"
              loading="lazy"
            />
            <Image
              src={GraphicCar}
              alt="mission-graphic-car"
              className="mission-graphic-car"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
