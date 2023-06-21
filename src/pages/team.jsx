import { motion } from "framer-motion";
import AnimatePage from "../components/AnimatePage";
import TeamCarousel from "../components/TeamCarousel";
import TeamSquare from "../components/TeamSquare";
import DirectorsNote from "../components/DirectorsNote";
import Header from "../components/Header";
import AOS from "aos";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const firstRow = [
    { name: "Sydney Gumede", title: "Operations Manager" },
    { name: "Richard Mohau Mokoena", title: "Managing Director" },
    { name: "Tumi Nkosi", title: "Tactical Operations" },
  ];

  const secondRow = [
    { name: "Tumelo Mokoena", title: "Sales & Marketing" },
    { name: "Thabang Mzizi", title: "Human Resource Management" },
    { name: "Dorah Nkosi", title: "Administration" },
    { name: "Jerry Mokoena", title: "Financial Administration" },
  ];

  return (
    <AnimatePage>
      <Header />
      <DirectorsNote />
      <section
        className="team"
        id="team"
        style={{ overflow: "hidden", marginBottom: "0" }}
      >
        <div className="container">
          {/* PART 2 CONTENT */}
          <div className="row">
            <div className="col-12 col-lg-8 text-center mx-auto">
              <motion.h1
                className="heading text-center mb-5"
                initial={{ y: "-50px" }}
                animate={{ y: "0px" }}
              >
                COMPANY MANAGEMENT & <br /> <span>COMPANY STRUCTURE</span>
              </motion.h1>
              <h4>We are Upper Level Security!!</h4>
              <p className="lead" data-aos="fade-up">
                We are a team of diverse and experienced professionals who
                function together like a finely tuned engine.
              </p>
              <p className="lead" data-aos="fade-up">
                We work together to create dynamic solutions tailored to your
                individual needs and ensure those solutions are executed with
                integrity and quality.
              </p>
              <center>
                <h2 className="sub-heading d-none d-md-block">ORGANOGRAM</h2>
                <h3
                  className="mb-5"
                  style={{
                    background: "gray",
                    color: "white",
                    padding: "0.5rem",
                  }}
                >
                  UPPER-LEVEL SECURITY
                </h3>
              </center>
            </div>
          </div>

          {/* ROW 1 */}
          <center>
            <div className="row" data-aos="fade-up">
              {firstRow.map((member) => (
                <div key={member.name} className="col-md d-none d-md-block">
                  <TeamSquare name={member.name} title={member.title} />
                </div>
              ))}
            </div>
          </center>

          {/* ROW 2 */}
          <center>
            <div className="row mx-auto" data-aos="zoom-in">
              <div className="col-md d-none d-md-block">
                <TeamSquare name="Tumelo Mokoena" title="Sales & Marketing" />
              </div>
              <div className="col-md d-none d-md-block">
                <TeamSquare
                  name="Thabang Mzizi"
                  title="uman Resource Management"
                />
                <TeamSquare name="Dorah Nkosi" title="Administration" />
              </div>
              <div className="col-md d-none d-md-block">
                <TeamSquare
                  name="Jerry Mokoena"
                  title="Financial Administration"
                />
              </div>
            </div>
          </center>

          <TeamCarousel />
        </div>
      </section>
    </AnimatePage>
  );
};

export default Team;
