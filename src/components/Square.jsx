import { motion } from "framer-motion";
import LOGO from "../assets/UlsLogo.png";

const Square = () => {
  return (
    <>
      <motion.div
        className="img-container d-none d-lg-block"
        initial={{ x: "-200px" }}
        animate={{ x: "0px" }}
        exit={{ x: "-200px" }}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
      >
        <img src={LOGO} alt="" />
        <motion.div
          className="square"
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          exit={{ rotate: -90 }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default Square;
