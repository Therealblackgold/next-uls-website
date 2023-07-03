import { useEffect, useState } from "react";

const BackToTop = () => {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {BackToTopButton && (
        <button
          className="to-top-btn d-none d-md-block"
          aria-label="back to top"
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </>
  );
};

export default BackToTop;
