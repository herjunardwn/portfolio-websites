import React from "react";
import Banner from "./Banner";
import CardProject from "./CardProject";
import Samudera from "../img-list/project-samudera.png";
import Furniture from "../img-list/furniture (1).png";
import Vijay from "../img-list/vijay.png";
import GGtour from "../img-list/gg.png";
import Html from "../img-list/html5-sort.png";
import Css from "../img-list/css3-sort.png";
import Js from "../img-list/javascript-39395.png";
import Tailwind from "../img-list/tailwind-css-icon.png";
import ReactLogo from "../img-list/react.png";
import BootstrapLogo from "../img-list/bootstrap-logo.png";
import NodejsLogo from "../img-list/nodejs-sort.png";
import jQueryLogo from "../img-list/jquery-sort.png";
import GithubLogo from "../img-list/github-sort.png";
import Ps from "../img-list/photoshop-sort.png";
import GitLogo from "../img-list/gitlogo.png";
import elementor from "../img-list/elementor.png";
import Wp from "../img-list/wordpress.png";
import Canva from "../img-list/canva.png";
import Office from "../img-list/office.png";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Content = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <div className="container-fluid main-content">
        <div className="container">
          <Banner />
          {/* section about */}
          <div className="row" id="about">
            <div className="col-12">
              <h2 className="title-1">
                <span className="fw-normal">ABOUT</span>ME
              </h2>
            </div>
          </div>

          <div className="row mt-5 d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
              <p className="desc-title-1">
                Hello, my name is Iwan Ridwan and I come from Indonesia. I am a Frontend Developer working as a freelancer (part-time) for more than 2 years. <br />
                <br />
                I am also used to using CMS Wordpress and Elementor to create and design websites.
                <br />I have a passion for creating user-interface designs that are both functional and aesthetically pleasing. I am constantly seeking creative and innovative solutions to tackle any challenges that may arise during my
                work.
              </p>
            </div>
            <div className="col-lg-6 d-flex flex-column gap-3 mt-5 mt-lg-0">
              <h6 className="text-light text-center">Here are some technologies I commonly use</h6>
              <div className="tech d-flex flex-wrap gap-2 justify-content-center align-items-center">
                <span className="btn">Javascript</span>
                <span className="btn">HTML5</span>
                <span className="btn">CSS3</span>
                <span className="btn">Bootstrap</span>
                <span className="btn">ReactJs</span>
                <span className="btn">Git</span>
                <span className="btn">Wordpress</span>
                <span className="btn">Elementor</span>
              </div>
            </div>
          </div>

          {/* section project */}
          <div className="row" id="project">
            <div className="col-12">
              <h2 className="title-2">
                <span className="fw-normal">MY</span>PROJECTS
              </h2>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 mb-5">
              <CardProject img={Vijay} title="Portfolio Website" link="https://vijaybrara.com/" skill1="ReactJs" skill2="Bootstrap" skill3="Javascript" skill4="React-Router" />
            </div>
            <div className="col-md-6 mb-5">
              <CardProject img={Samudera} title="Website Company Profile" link="https://samuderacargo.com/" skill1="WordPress" skill2="Elementor" skill3="Astra" skill4="YoastSEO" skill5="CSS" />
            </div>
            <div className="col-md-6 my-lg-5 mb-5">
              <CardProject img={Furniture} title="Slicing Design Web Furniture" link="https://slicing-lp-furniture.netlify.app/" skill1="HTML" skill2="CSS" skill3="Bootstrap" skill4="Javascript" skill5="SwiperJS" />
            </div>
            <div className="col-md-6 mb-5 my-lg-5">
              <CardProject img={GGtour} title="Website Landing Page" link="https://ggtourandtransport.com/" skill1="WordPress" skill2="Elementor" skill3="Astra" skill4="YoastSEO" skill5="CSS" />
            </div>
          </div>

          {/* button more project */}
          <div className="row my-3">
            <div className="col-12 text-center">
              <button type="button" className="btn-projects rounded-2 zoom-1" onClick={() => Navigate("/project")}>
                More Projects <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* section Skills */}
          <div className="row" id="skills">
            <div className="col-12">
              <h2 className="title-3">
                <span className="fw-normal">MY</span>SKILLS
              </h2>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 d-flex justify-content-center gap-3 flex-wrap">
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={Html} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={Css} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={Js} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={BootstrapLogo} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={Tailwind} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={ReactLogo} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={jQueryLogo} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={NodejsLogo} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={GitLogo} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={GithubLogo} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={Ps} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={Canva} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={Wp} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={elementor} />
              </div>
              <div className="logo-skills d-flex justify-content-center align-items-center">
                <img src={Office} />
              </div>
            </div>
          </div>

          {/* section certification */}
          <div className="row" id="certification">
            <div className="col-12">
              <h2 className="title-4">
                <span className="fw-normal">MY</span>CERTIFICATION
              </h2>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-12">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
