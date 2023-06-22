import { motion } from "framer-motion";
import TeamGraphic from "../assets/TeamGraphic-min.png";
import Logo from "../assets/UlsLogo.png";
import Quotation from "../assets/qu.png";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
const DirectorsNote = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section style={{ position: "relative" }}>
      <div className="container">
        {/* PART 1 CONTENT */}
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto text-center">
            <motion.h2
              className="sub-heading text-center mb-2"
              initial={{ y: "-50px" }}
              animate={{ y: "0px" }}
            >
              DIRECTORS NOTE
            </motion.h2>
            <Image
              src={Logo}
              alt=" Upper Level Security Logo"
              className="lg-hide mt-4"
              style={{
                width: "10rem",
                position: "absolute",
                top: "2rem",
                right: "10rem",
              }}
            />
            <Image
              src={Quotation}
              alt="quotation mark"
              className="lg-hide"
              loading="lazy"
              style={{
                width: "5rem",
                filter: "invert(70%)",
                position: "absolute",
                top: "4rem",
                left: "25rem",
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
            <h3 data-aos="zoom-in">We are Upper Level Security!!</h3>
            <Image
              src={Quotation}
              alt="quotation mark"
              className="lg-hide"
              loading="lazy"
              style={{
                width: "5rem",
                filter: "invert(70%)",
                position: "absolute",
                top: "27rem",
                right: "40rem",
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md d-none d-lg-block">
            <Image
              className="lg-hide"
              src={TeamGraphic}
              alt="Team Graphic"
              loading="lazy"
              style={{
                width: "50rem",
                position: "absolute",
                bottom: "-4rem",
                left: "35rem",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorsNote;
