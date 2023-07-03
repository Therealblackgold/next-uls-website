/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const Featured = () => {
  const featured_row_1 = [
    {
      title: "Guarding Division",
      content:
        " We provide armed and unarmed guards for various needs, including a tactical reaction unit for rapid response. Specialize in securing functions, events, and even specially trained mining guards. Our services also extend to VIP/executive guarding and protecting national key points.",
      icon: "bi bi-building-lock",
      url: "/services",
      button_text: "View Services",
    },
    {
      title: "Risk Management",
      content: `Mitigate risks and fortify your business with 
      our strategic Risk  Management services. Proactive planning,
       threat assessments, and tailored solutions for a secure future.`,
      icon: "bi bi-person-lock",
      url: "/services",
      button_text: "View Services",
    },
  ];

  const featured_row_2 = [
    {
      title: "Off-Site Monitoring",
      content: `Protect your assets with our advanced Off-Site Monitoring
      services. Round-the-clock surveillance and rapid response for
      ultimate security.`,

      icon: "bi bi-person-video3",
      url: "/services",
      button_text: "View Services",
    },
    {
      title: "Electronic Security",
      content: `Experience peace of mind with our cutting-edge Electronic
      Security solutions. Safeguard your property with
      state-of-the-art alarms, access control, and surveillance
      systems.`,
      icon: "bi bi-pc-display-horizontal",
      url: "/services",
      button_text: "View Services",
    },
  ];

  const featured_row_3 = [
    {
      title: "Protection & Assessment",
      content: `Enhance your security with our comprehensive Protection &
      Assessment services. Expert analysis, risk evaluation, and
      tailored solutions to keep you safe and prepared.`,

      icon: "i bi-person-vcard",
      url: "/services",
      button_text: "View Services",
    },
    {
      title: "Online CCTV Security",
      content: ` Ensure round-the-clock online protection with our advanced CCTV
      security solutions. Monitor and secure your premises remotely,
      anytime, anywhere, with crystal-clear video surveillance.`,
      icon: "bi bi-camera-video",
      url: "/services",
      button_text: "View Services",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="featured" className="introSection py-5">
      <div className="container">
        {/* item 1 */}
        <div className="row">
          {featured_row_1 &&
            featured_row_1.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div className="box-feat">
                  <span className="shadow">
                    <i className={service.icon}></i>
                  </span>
                  <h2>{service.title}</h2>
                  <p className="lead">{service.content}</p>
                  <Link href={service.url} aria-label="services">
                    {service.button_text}
                  </Link>
                </div>
              </div>
            ))}
        </div>
        {/* item 2 */}
        <div className="row">
          {featured_row_2 &&
            featured_row_2.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div className="box-feat">
                  <span className="shadow">
                    <i className={service.icon}></i>
                  </span>
                  <h2>{service.title}</h2>
                  <p className="lead">{service.content}</p>
                  <Link href={service.url} aria-label="services">
                    {service.button_text}
                  </Link>
                </div>
              </div>
            ))}
        </div>
        {/* item 3 */}
        <div className="row">
          {featured_row_3 &&
            featured_row_3.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div className="box-feat">
                  <span className="shadow">
                    <i className={service.icon}></i>
                  </span>
                  <h2>{service.title}</h2>
                  <p className="lead">{service.content}</p>
                  <Link href={service.url} aria-label="services">
                    {service.button_text}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
