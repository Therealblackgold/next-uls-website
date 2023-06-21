import { Col, Row } from "react-bootstrap";
import USER from "../assets/dp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TeamCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Row>
      <Col className="d-md-none mt-5">
        <div className="team-box">
          <Carousel
            responsive={responsive}
            infinite={true}
            className="team-slider"
          >
            {/* slider item 1 */}
            <div className="item">
              <img src={USER} alt="Team" />
              <h5>Tumelo Mokoena</h5>
              <span>Operations Manager</span>
            </div>
            {/* slider item 2 */}
            <div className="item">
              <img src={USER} alt="Team" />
              <h5>Richard Mohau Mokoena</h5>
              <span>Managing Director</span>
            </div>
            {/* slider item 3 */}
            <div className="item">
              <img src={USER} alt="Team" />
              <h5>Jerry Mokoena</h5>
              <span>Tactical Operations</span>
            </div>
            {/* slider item 4 */}
            <div className="item">
              <img src={USER} alt="Team" />
              <h5>Thabang Mzizi</h5>
              <span>Human Resource Management</span>
            </div>
            {/* slider item 5 */}
            <div className="item">
              <img src={USER} alt="Team" />
              <h5>Sydney Gumede</h5>
              <span>Sales & Marketing</span>
            </div>
            {/* slider item 6 */}
            <div className="item">
              <img src={USER} alt="Team" />
              <h5>Tumi Nkosi </h5>
              <span>Financial Administration</span>
            </div>
            {/* slider item 7 */}
            <div className="item">
              <img src={USER} alt="Team" />
              <h5>Dorah Nkosi</h5>
              <span>Administration</span>
            </div>
          </Carousel>
        </div>
      </Col>
    </Row>
  );
};

export default TeamCarousel;
