import { motion } from "framer-motion";
import TeamGraphic2 from "../assets/team-1.png";
import TeamGraphic1 from "../assets/team-2.png";
import TeamGraphic3 from "../assets/team-3.png";
import Quotation from "../assets/qu-marks.png";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
const DirectorsNote = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section style={{ position: "relative" }} className="director">
      <div className="container">
        {/* PART 1 CONTENT */}
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto text-center">
            <motion.h3
              className="sub-heading text-center mb-2"
              initial={{ y: "-50px" }}
              animate={{ y: "0px" }}
            >
              DIRECTORS NOTE
            </motion.h3>
            <Image
              src={Quotation}
              alt="quotation mark"
              className="d-none d-lg-flex"
              loading="lazy"
              style={{
                width: "3rem",
                position: "absolute",
                top: "4rem",
                left: "25rem",
              }}
            />
            <Image
              src={Quotation}
              alt="quotation mark"
              className="d-none d-lg-flex"
              loading="lazy"
              style={{
                width: "3rem",
                position: "absolute",
                top: "4rem",
                right: "25rem",
              }}
            />
            <p className="lead" data-aos="fade-up">
              Upper Level Security Services expresses immense gratitude to all
              those who have welcomed us into their homes and entrusted us with
              their assets and, above all, their safety and lives. Our
              commitment to this privilege is unwavering, and we firmly believe
              that we are because you are.
            </p>
            <p className="lead" data-aos="fade-up">
              Our speedy expansion can be attributed to our commitment to
              exceeding expectations for our satisfied clients. We prioritize
              transparency and only enlist the finest professionals to ensure
              top-notch service, and unparalleled visibility. This way, you can
              confidently trust us to provide you with{" "}
              <b>intelligent protection</b>.
            </p>
            <p className="lead" data-aos="fade-up">
              To all our prospective clients, we take your safety very seriously
              and assure you of our commitment to providing exceptional service
              in our domain. Lets join hands to elevate each other and create a
              safer and brighter future together.
            </p>
            <h3 className="uls-heading mb-5" data-aos="zoom-in">
              We are Upper Level Security!!
            </h3>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md mx-auto mb-3 mb-lg-0">
            <Image
              className="rounded"
              src={TeamGraphic1}
              alt="Team Graphic"
              loading="lazy"
              // style={{ height: "15rem" }}
            />
          </div>
          <div className="col-md mx-auto mb-3 mb-lg-0">
            <Image
              className="rounded"
              src={TeamGraphic2}
              alt="Team Graphic"
              loading="lazy"
              // style={{ height: "15rem" }}
            />
          </div>
          <div className="col-md mx-auto mb-3 mb-lg-0">
            <Image
              className="rounded"
              src={TeamGraphic3}
              alt="Team Graphic"
              loading="lazy"
              // style={{ height: "15rem" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorsNote;
