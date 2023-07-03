import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row mx-0">
          <motion.div
            className="col"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div>
          {/* FORM */}
          <div
            className="row mx-auto text-center text-md-start"
            style={{
              background: "#222",
              borderRadius: "20px",
            }}
          >
            <div className="col-12 col-md-6 p-md-5 mb-5 mb-md-0">
              <h2 className="heading mb-3 text-center text-white mt-5 mt-md-0">
                contact <span>us</span>
              </h2>
              <p className="text-white">
                Upper Level Security, provides tailored security solutions. Our
                experienced team offers surveillance systems, access control,
                and exceptional customer service. Contact us today for a quote
                or more information.
              </p>

              {/* DETAILS */}
              <div className="contact-details mt-4">
                <Link href="https://goo.gl/maps/gDMyQLqHUViYbe1bA" target="new">
                  <span className="text-nowrap">
                    <i className="bi bi-house-fill mx-1"></i>8174 Tswako Str,
                    Brakpan, 1548
                  </span>
                </Link>
                <Link href="tel:011732 1004" target="new">
                  <span className="text-nowrap">
                    <i className="bi bi-telephone-fill mx-1"></i>(011) 732 1004
                  </span>
                </Link>
                <Link
                  href="mailto:protected@upperlevelsecurity.co.za"
                  target="new"
                >
                  <span className="text-nowrap">
                    <i className="bi bi-envelope-fill mx-1"></i>
                    protected@upperlevelsecurity.co.za
                  </span>
                </Link>
                <Link href="https://www.upperlevelsecurity.co.za" target="new">
                  <span className="text-nowrap">
                    <i className="bi bi-globe-central-south-asia mx-1"></i>
                    upperlevelsecurity.co.za
                  </span>
                </Link>
              </div>
            </div>
            <motion.div
              className="col-12 col-md-6 py-md-5"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                className="text-white"
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/protected@upperlevelsecurity.co.za"
              >
                <div>
                  {/* NAME */}
                  <div className="mb-3">
                    <input
                      placeholder="Name"
                      type="text"
                      className="form-control"
                      {...register("name", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {/* NAME INPUT ERRORS */}
                    {errors.name && (
                      <p className="lead mt-3 text-danger">
                        {errors.name.type === "required" &&
                          "This field is required."}
                        {errors.name.type === "maxLength" &&
                          "Max length is 100 characters."}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div className="mb-3">
                    <input
                      placeholder="Email"
                      type="email"
                      className="form-control"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {/* EMAIL INPUT ERROR HANDLING */}
                    {errors.email && (
                      <p className="lead mt-3 text-danger">
                        {errors.email.type === "required" &&
                          "This field is required."}
                        {errors.email.type === "pattern" &&
                          "Invalid  email address"}
                      </p>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div className="mb-3">
                    <textarea
                      placeholder="Message"
                      rows={4}
                      cols={50}
                      className="form-control"
                      {...register("message", {
                        required: true,
                        maxLength: 2000,
                      })}
                    />
                    {/* MESSAGE INPUT ERRORS */}
                    {errors.message && (
                      <p className="lead mt-3 text-danger">
                        {errors.message.type === "required" &&
                          "This field is required."}
                        {errors.message.type === "maxLength" &&
                          "Max length is 2000 characters."}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary mb-5 w-100">
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
