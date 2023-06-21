// import Link from "next/link";
import Logo from "../assets/UlsLogo.png";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
const Navigation = () => {
  const route = useRouter();
  const { pathname } = route;

  // HASH LINKS
  const sections = [
    "home",
    "intro",
    "mission",
    "assurance",
    "contact",
    "testimonials",
  ];

  const HashLinks = (
    <>
      {sections.map((section) => (
        <li key={section} className="nav-item" style={{ cursor: "pointer" }}>
          <ScrollLink
            className="nav-link px-2"
            aria-current="page"
            activeClass="active"
            to={section}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            delay={100}
          >
            {section}
          </ScrollLink>
        </li>
      ))}
    </>
  );

  // PAGE LINKS
  const pages = ["services", "gallery", "team", "training"];

  const PageLinks = (
    <>
      {pages.map((page) => (
        <li
          key={page}
          className={pathname.includes(page) ? "nav-item active" : "nav-item"}
        >
          <Link className="nav-link px-2" href={page}>
            {page}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow"
      style={{ zIndex: "99", background: "white" }}
    >
      <div className="container-fluid">
        <Link href={"/"} className="p-2">
          <Image
            src={Logo}
            alt="Upper Level Security Logo"
            style={{ width: "60px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* HASH LINKS and HOME LINK, the HOME LINK only displays when not on the home route "/" */}
            {pathname === "/" ? (
              HashLinks
            ) : (
              <li className="nav-item">
                <Link className="nav-link px-2" href="/">
                  home
                </Link>
              </li>
            )}
            {/* PAGE LINKS */}
            {PageLinks}
          </ul>
          <div className="nav-contact-details d-none d-lg-block">
            <Link href="tel:011732 1004" target="new" className="mx-2">
              <span>
                <i className="bi bi-telephone-fill mx-1"></i>(011) 732 1004
              </span>
            </Link>
            <Link
              href="mailto:protected@upperlevelsecurity.co.za"
              target="new"
              className="mx-2"
            >
              <span>
                <i className="bi bi-envelope-fill mx-1"></i>
                protected@upperlevelsecurity.co.za
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;