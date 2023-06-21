import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import { testimonials } from "@/data";
import IMG1 from "../assets/FM2A2285-min.jpg";
import Logo from "../assets/UlsLogo.png";
import { client_logos } from "@/data";

// CLIENTS

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="testimonials"
      style={{
        overflow: "hidden",
        marginBottom: "0",
        marginTop: "5rem",
        position: "relative",
      }}
    >
      <div className="row">
        <div className="col">
          <h1 className="heading text-center mb-5" data-aos="fade-down">
            CLIENTS & <span>TESTIMONIALS</span>
          </h1>

          {/* IMAGE */}
          <div className="row">
            <div className="col-md">
              {/* LOGO */}
              <Image
                src={Logo}
                alt="Upper Level Security Logo"
                className="d-none d-lg-block mt-4"
                style={{
                  width: "14rem",
                  position: "absolute",
                  top: "13rem",
                  left: "12rem",
                }}
              />

              {/* SECTION IMAGE */}
              <Image
                className="shadow-lg d-none d-lg-block"
                src={IMG1}
                alt="Upper Level Security"
                style={{
                  height: "350px",
                  width: "60rem",
                  position: "absolute",
                  right: "0",
                  top: "10rem",
                  borderRadius: "400px 0 0 400px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* SLID */}
            <div className="col-md-12 mySlider" style={{ marginTop: "15rem" }}>
              <div className="row">
                <div className="testimonialsSection">
                  <div className="testimonialsA">
                    <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {testimonials &&
                          testimonials.map((testimonial, index) => (
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
                                          src={testimonial.image}
                                          alt={`ULS Clients ${index + 1}`}
                                        />
                                      </div>
                                      <div className="bio">
                                        <h4>__{testimonial.name}</h4>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="content">
                                      <p>{testimonial.comment}</p>
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

          <div className="row text-center mb-5">
            {client_logos &&
              client_logos.map((logo, index) => (
                <div className="col" key={index}>
                  <Image
                    src={logo}
                    alt="Upper Level Security"
                    style={{ width: "10rem" }}
                  />
                </div>
              ))}
          </div>

          {/* closing statement */}
          <div className="row">
            <div className="col-md-8 mx-auto text-center" data-aos="fade-up">
              <h2 className="sub-heading text-dark">upper level security </h2>
              <p className="lead" data-aos="fade-up">
                Upper Level Security prides its-self in striving for excellence
                and its continuous improvement in the security sector. It is
                therefore its policy to formulate ‘Quality Management Systems’.
                Specifically designed for each of our business partner’s unique
                requirements, rather than a general approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;