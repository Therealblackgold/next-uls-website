import { Col, Row } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const TeamCarousel = () => {
  const team_members = [
    {
      name: "Sydney Gumede",
      title: "Operations Manager",
    },
    {
      name: "Richard Mohau Mokoena",
      title: "Managing Director",
    },
    {
      name: "Tumi Nkosi",
      title: "Tactical Operations",
    },
    {
      name: "Tumelo Mokoena",
      title: "Sales & Marketing",
    },
    {
      name: "Thabang Mzizi",
      title: "Human Resource Management",
    },
    {
      name: "Jerry Mokoena",
      title: "Financial Administration",
    },
    {
      name: "Dorah Nkosi",
      title: "Administration",
    },
  ];

  return (
    <div className="row">
      <div className="col-md-12 d-md-none mySlider">
        <div className="row">
          <div className="testimonialsSection">
            <div className="testimonials">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {team_members &&
                    team_members.map((team_member, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <div className="single-item shadow">
                          <div className="row">
                            <div className="col-md-5">
                              <div className="profile">
                                <div className="img-area">
                                  <Image
                                    src={Logo}
                                    alt="Upper Level Security Team Member"
                                    style={{ width: "10rem", height: "auto" }}
                                    priority
                                    placeholder="empty"
                                  />
                                </div>
                                <div className="bio">
                                  <h3>{team_member.name}</h3>
                                  <span className="fs-5 fst-italic text-muted">
                                    {team_member.title}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* BUTTONS */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
