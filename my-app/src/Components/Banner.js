import React from "react";
import "../App.css";
import Avatar from "../img/profile-noBg.png";
import { useNavigate } from "react-router";

const Banner = () => {
  const Navigate = useNavigate();
  return (
    <div className="row banner">
      <div className="col-lg-6 text-light">
        <span className="greeting">Hi there, I'am</span>
        <h1 className="my-name">Iwan Ridwan</h1>
        <h3 className="mb-4 job-position">Frontend Developer</h3>
        <p className="desc">I love making things on the web, building and designing websites, so that they have a good and responsive user interface.</p>
        <div className="cta-banner mt-5">
          <div className="cv d-flex gap-4">
            <button type="button" className="btn btn-outline rounded-2" onClick={() => Navigate("/project")}>
              My Projects
            </button>

            <a href="https://drive.google.com/file/d/18GVNOsgvmtAojNwv8nnKosgfmM_z85B4/view?usp=sharing" target="_blank" className="download-cv">
              <i className="bi bi-file-earmark-arrow-down"></i> CV Resume
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-6 my-5 my-lg-0 position-relative mx-md-auto">
        <div className="fotoProfile mx-auto">
          <img src={Avatar} alt="profile" className="rounded-3" />
        </div>
        <div className="job-1 shadow zoom-1">Frontend Developer</div>
        <div className="job-2 shadow zoom-2">Wordpress Web Designer</div>
      </div>

      {/* scroll down */}
      <div className="scroll-down text-light text-center naik-turun">
        <i className="bi bi-mouse fs-3"> </i>
        <span className="down">
          Scroll Down <i className="bi bi-arrow-down"></i>
        </span>
      </div>
    </div>
  );
};

export default Banner;
