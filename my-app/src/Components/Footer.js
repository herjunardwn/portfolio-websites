import { useState, useEffect } from "react";

const Footer = () => {
  const [showBtnTop, setShowBtnTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 500) {
        setShowBtnTop(true);
      } else {
        setShowBtnTop(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="container-fluid" id="footer">
      <div className="container pt-5 pb-3">
        <div className="row text-light">
          <div className="col-md-6 footer-1">
            <h1 className="pb-4">Iwan Ridwan</h1>
            <h4>Get in touch</h4>
            <span className="touch">
              <a href="mailto:herjunahr@gmail.com">
                <i className="bi bi-envelope-at-fill"></i> herjunahr@gmail.com
              </a>
            </span>
          </div>

          <div className="col-md-6 footer-2 d-md-flex justify-content-md-center flex-md-column align-items-md-center">
            <h5>Connect with me</h5>
            <div className="footer-sosmed d-flex gap-3 my-3">
              <a href="https://www.instagram.com/_herjunardwn/" target={"_blank"}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://github.com/herjunardwn/" target={"_blank"}>
                <i className="bi bi-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/iwn-rdwn/" target={"_blank"}>
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https://t.me/kucingDapurrr" target={"_blank"}>
                <i className="bi bi-telegram"></i>
              </a>
            </div>
          </div>
          <div className="row text-center mt-md-4 mb-3">
            <div className="col-12">
              <span className="copyright">
                &copy; 2023. Created with <i className="bi bi-heart-fill love"></i> by <a href="https://herjunardwn.my.id">Iwan Ridwan</a>
              </span>
            </div>
          </div>

          <div id="btn-top" className={showBtnTop ? "show" : ""} onClick={() => handleClick()}>
            <a href="#">
              <i className="bi bi-arrow-up-circle-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
