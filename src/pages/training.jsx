import AnimatePage from "../components/AnimatePage";
import Quotations from "../assets/qu.png";
import Logo from "../assets/UlsLogo.png";
import TrainingGraphic from "../assets/TrainingGraphic-min.jpg";
import TrainingGraphicChart from "../assets/TrainingGraphicChart.png";
import { motion } from "framer-motion";
import Header from "../components/Header";
import IMG04 from "../assets/img-04-min.jpg";
import Image from "next/image";

const Training = () => {
  return (
    <AnimatePage>
      <Header />
      <section
        className="training"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <div className="container-fluid px-md-5">
          <div className="row">
            {/* CONTENT */}
            <div className="col-12 col-lg-6 text-center">
              <motion.h2
                className="heading mb-3"
                initial={{ y: "-50px" }}
                animate={{ y: "0px" }}
              >
                RECRUITMENT & <span>TRAINING</span>
              </motion.h2>
              <div className="training-content mb-5">
                <p className="lead">
                  In order to improve security services, we as a company must be
                  well-structured by ensuring every staff member/ security
                  officer undergoes the proper training and recruitment
                  procedure.
                </p>
                <p className="lead">
                  All security personnel as a condition of employment, must be
                  fully conversant and must abide by the regulations as set out
                  by the Private Security Regulatory Authority.
                </p>
              </div>
            </div>
            {/* QUOTE */}
            <div className="col-12 col-lg quote">
              <Image
                src={Quotations}
                alt="Upper Level Security, Security company in Brakpan"
                className="quotations"
                loading="lazy"
              />
              <p className="lead text-dark">
                Avoiding danger is <br /> no safer in the long <br /> run than
                exposure.
              </p>
            </div>

            {/* LOGO */}
            <div className="col-md d-none d-lg-block">
              <Image
                src={Logo}
                alt="Upper Level Security, Security company in Brakpan"
                style={{ width: "20rem" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="row">
            <div className="col-12 col-md text-center d-none d-md-block">
              <Image
                src={TrainingGraphicChart}
                alt="Upper Level Security, Security company in Brakpan"
                style={{ width: "30rem" }}
                loading="lazy"
              />

              {/* QUOTE */}
              <div className="quote mt-5 mb-5 mb-lg-0 text-start d-none d-lg-block">
                <Image
                  src={Quotations}
                  alt="Upper Level Security, Security company in Brakpan"
                  className="quotations mb-3"
                  loading="lazy"
                />
                <p className="lead text-dark">
                  Our success depends on <br /> recruiting the right person for{" "}
                  <br /> the job. It is therefore <br /> imperative that each{" "}
                  <br /> officer be matched to <br /> the client’s requirements
                  and <br /> expectations.
                </p>
              </div>
            </div>

            {/* ANTI-BRIBERY POLICY */}
            <div className="col-md text-center d-none d-md-block">
              <h2 className="heading text-center mt-5">
                ANTI-BRIBERY <span>POLICY</span>
              </h2>
              {/* ABSOLUTE MD ONLY IMAGE */}
              <div className="text-center training-graphic-x">
                <p className="lead text-white">
                  We give out incentive bonuses to our employees for information
                  that can lead to convictions/ crime prevention and arrests.
                  Including but not limited to any form of bribery attempts.
                </p>
              </div>
              <Image
                src={TrainingGraphic}
                alt="Upper Level Security, Security company in Brakpan"
                className="training-graphic-image shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="col-md d-md-none">
              <Image
                src={IMG04}
                alt="Upper Level Security, Security company in Brakpan"
                style={{ borderRadius: "20px" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatePage>
  );
};

export default Training;
