import Image from "next/image";
import ULS1 from "../assets/gallery/FM2A2207-min.jpg";
import ULS2 from "../assets/IntroGraphic-min.png";
import ULS3 from "../assets/gallery/FM2A2249-min.jpg";
import Link from "next/link";

const Carousel = () => {
  const quote1 = '"Guardians of Peace and Protection."';
  const quote2 = '"Your Safety Our Priority"';
  const quote3 = '"Safety You Can Trust, The Security You Deserve."';
  return (
    <div id="carouselExampleIndicators" className="carousel slide mb-5">
      {/* INDICATORS */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>

      {/* CAROUSEL ITEMS */}
      <div className="carousel-inner" id="home">
        {/* ITEM 1 */}
        <div className="carousel-item active c-item">
          <Image
            src={ULS1}
            className="d-block w-100 c-img"
            alt="Upper Level Security, Security company in Brakpan"
            loading="lazy"
          />
          <div className="carousel-caption">
            <h1 className="text-uppercase">upper level security</h1>
            <p className="text-white fs-3">{quote1}</p>
            <Link
              href="#contact"
              className="btn btn-primary text-uppercase px-4 py-2 fs-5 mt-5 mb-5"
            >
              get quote
            </Link>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="carousel-item c-item">
          <Image
            src={ULS2}
            className="d-block w-100 c-img"
            alt="Upper Level Security, Security company in Brakpan"
            loading="lazy"
          />
          <div className="carousel-caption">
            <h1 className="text-uppercase">upper level security</h1>
            <p className="text-white fs-3">{quote2}</p>
            <Link
              href="#contact"
              className="btn btn-primary text-uppercase px-4 py-2 fs-5 mt-5 mb-5"
            >
              get quote
            </Link>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="carousel-item c-item">
          <Image
            src={ULS3}
            className="d-block w-100 c-img"
            alt="Upper Level Security, Security company in Brakpan"
            loading="lazy"
          />
          <div className="carousel-caption">
            <h1 className="text-uppercase">upper level security</h1>
            <p className="text-white fs-3">{quote3}</p>
            <Link
              href="#contact"
              className="btn btn-primary text-uppercase px-4 py-2 fs-5 mt-5 mb-5"
            >
              get quote
            </Link>
          </div>
        </div>
      </div>

      {/* CAROUSEL NEXT & PREV BUTTONS */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
