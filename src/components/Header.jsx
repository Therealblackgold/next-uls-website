import Link from "next/link";

const Header = () => {
  return (
    <section className="header d-lg-none">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <p className="text-white">
              “Strive not to be a success, but rather to be of value ”
            </p>
            <Link
              href="mailto:protected@upperlevelsecurity.co.za"
              target="new"
              className="btn btn-sm btn-primary"
            >
              <i className="bi bi-chevron-right"></i>get quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
