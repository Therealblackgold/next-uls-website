import { galleryImages } from "@/data";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/UlsLogo.png";

const Gallery = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSliderNumber(index);
    setOpenModal(true);
  };

  //   Close Modal
  const handleClose = () => {
    setOpenModal(false);
  };

  //   Prev Slide
  const prevSlide = () => {
    sliderNumber === 0
      ? setSliderNumber(galleryImages.length - 1)
      : setSliderNumber(sliderNumber - 1);
  };

  //   Next Slide
  const nextSlide = () => {
    sliderNumber + 1 === galleryImages.length
      ? setSliderNumber(0)
      : setSliderNumber(sliderNumber + 1);
  };

  return (
    <section
      className="container gallery mt-5"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div className="row">
        <div className="col">
          <Image
            src={Logo}
            alt="Upper Level Security Logo"
            className="d-none d-lg-block"
            style={{
              width: "10rem",
              position: "absolute",
              top: "1px",
              left: "5rem",
            }}
          />
          <motion.h1
            className="heading text-center mb-5"
            initial={{ y: "-50px" }}
            animate={{ y: "0px" }}
          >
            our<span> gallery</span>
          </motion.h1>

          {/* Gallery Modal */}
          {openModal && (
            <div className="sliderWrap">
              <i className="bi bi-x-circle btnClose" onClick={handleClose}></i>
              <i className="bi bi-chevron-left btnPrev" onClick={prevSlide}></i>
              <i
                className="bi bi-chevron-right btnNext"
                onClick={nextSlide}
              ></i>
              <div className="fullscreenImage">
                <Image
                  src={galleryImages[sliderNumber].image}
                  alt="ULS"
                  priority={true}
                />
              </div>
            </div>
          )}

          <div className="galleryWrap">
            {galleryImages &&
              galleryImages.map((slide, index) => {
                return (
                  <div
                    key={index}
                    className="single"
                    onClick={() => handleOpenModal(index)}
                  >
                    <Image src={slide.image} alt="ULS" loading="lazy" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
