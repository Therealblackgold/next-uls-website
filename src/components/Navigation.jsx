// import Link from "next/link";
import Logo from "../assets/UlsLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Navigation = () => {
  const route = useRouter();
  const { pathname, asPath } = route;

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
        <li
          key={section}
          className={asPath.includes(section) ? "nav-item active" : "nav-item"}
          style={{ cursor: "pointer" }}
        >
          <Link
            className="nav-link px-2"
            href={`/#${section}`}
            aria-label={`Upper Level Security ${section}`}
          >
            {section}
          </Link>
        </li>
      ))}
    </>
  );

  const CanvasHashLinks = (
    <>
      {sections.map((section) => (
        <li
          key={section}
          className={asPath.includes(section) ? "nav-item active" : "nav-item"}
          style={{ cursor: "pointer" }}
          data-bs-dismiss="offcanvas"
        >
          <Link
            className="nav-link px-2"
            href={` /#${section}`}
            aria-label={`Upper Level Security ${section}`}
          >
            {section}
          </Link>
        </li>
      ))}
    </>
  );

  // PAGE LINKS
  const pages = ["services", "team", "training"];

  const PageLinks = (
    <>
      {pages.map((page) => (
        <li
          key={page}
          className={pathname.includes(page) ? "nav-item active" : "nav-item"}
        >
          <Link
            className="nav-link px-2"
            href={page}
            aria-label={`Upper Level Security ${page}`}
          >
            {page}
          </Link>
        </li>
      ))}
    </>
  );

  const CanvasPageLinks = (
    <>
      {pages.map((page) => (
        <li
          key={page}
          data-bs-dismiss="offcanvas"
          className={pathname.includes(page) ? "nav-item active" : "nav-item"}
        >
          <Link
            className="nav-link px-2"
            href={page}
            aria-label={`Upper Level Security ${page}`}
          >
            {page}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <>
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
              placeholder="blur"
              priority
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle canvas"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
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

            {/* CONTACT BUTTON */}
            {pathname === "/" && (
              <Link
                aria-label="contact Upper Level Security"
                href="#contact"
                className="btn btn-outline-primary mx-md-5 d-none d-lg-block"
              >
                Contact
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* CANVAS */}
      <div
        className="offcanvas offcanvas-start w-50 d-lg-none"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <Image
            src={Logo}
            alt="Upper Level Security Logo"
            style={{ width: "60px" }}
          />
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="offcanvasLinks">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* HASH LINKS and HOME LINK, the HOME LINK only displays when not on the home route "/" */}
              {pathname === "/" ? (
                CanvasHashLinks
              ) : (
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link px-2" href="/">
                    home
                  </Link>
                </li>
              )}
              {/* PAGE LINKS */}
              {CanvasPageLinks}
            </ul>
            <hr />
            <div className="text-center mt-5">
              {/* CONTACT BUTTON */}
              <Link
                aria-label="contact Upper Level Security"
                data-bs-dismiss="offcanvas"
                href="mailto:protected@upperlevelsecurity.co.za"
                target="new"
                className="btn btn-outline-primary"
              >
                get quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
