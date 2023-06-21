const ContactHeader = () => {
  return (
    <>
      <div className="container-fluid d-none d-md-block">
        <div className="row">
          <div className="col header-contact">
            <a href="tel:011732 1004">
              <span>
                <i className="bi bi-telephone-fill"></i>(011) 732 1004
              </span>
            </a>
            <a href="mailto:mmohau1@gmail.com">
              <span>
                <i className="bi bi-envelope-fill"></i>mmohau1@gmail.com
              </span>
            </a>
            <a href="https://www.upperlevelsecurity.co.za">
              <span>
                <i className="bi bi-globe-central-south-asia"></i>
                upperlevelsecurity.co.za
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHeader;
