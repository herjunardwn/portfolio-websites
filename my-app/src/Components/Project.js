import Biolink from "../img-list/project-biolink.png";
import Vijay from "../img-list/vijay.png";
import GGtour from "../img-list/gg.png";
import Argo from "../img-list/argo.png";
import Samudera from "../img-list/project-samudera.png";
import Furniture from "../img-list/furniture (1).png";
import Iolink from "../img-list/iolink.png";
import Hrinvitation from "../img-list/hrinvitation (1).png";
import UangkuApp from "../img-list/uangku.png";
import Hanupis from "../img-list/hanupis.png";
import Resto from "../img-list/resto.png";
import Property from "../img-list/property.png";
import CardProject from "./CardProject";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Project = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row project text-light">
          <div className="col-12">
            <span className="fw-normal">MY</span>PROJECTS
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-6 mb-5">
            <CardProject
              img={GGtour}
              title="Car Rental Websites"
              link="https://ggtourandtransport.com/"
              desc="I created a landing page for a car rental company that has car rental and tour services."
              skill1="WordPress"
              skill2="Elementor"
              skill3="Astra"
              skill4="YoastSEO"
              skill5="CSS"
            />
          </div>
          <div className="col-md-6 mb-5">
            <CardProject
              img={Argo}
              title="Website Company Profile"
              link="https://argorayapersada.com/"
              desc="I made a web about company profiles engaged in light steel installation and interior installation."
              skill1="WordPress"
              skill2="Elementor"
              skill3="Astra"
              skill4="YoastSEO"
              skill5="CSS"
            />
          </div>
          <div className="col-md-6 mb-5">
            <CardProject
              img={Biolink}
              title="Multiple link Website"
              link="https://meldydityaputri.netlify.app/"
              desc="Create a Biolink website for users who want to include multiple links on one page, easily with just one click."
              skill1="HTML"
              skill2="CSS"
              skill3="Bootstrap"
              skill4="Javascript"
            />
          </div>
          <div className="col-md-6 mb-5">
            <CardProject
              img={Samudera}
              title="Company Profile Samudera Cargo"
              link="https://samuderacargo.com/"
              desc="PT. Samudera Sukses Lintas Benua is a company engaged in the import and export sector. I also make copywriting for content on this website."
              skill1="WordPress"
              skill2="Elementor"
              skill3="Astra"
              skill4="YoastSEO"
              skill5="CSS"
            />
          </div>
          <div className="col-md-6 my-lg-5 mb-5">
            <CardProject
              img={Furniture}
              title="Slicing Design Web Furniture"
              link="https://slicing-lp-furniture.netlify.app/"
              desc="A simple website Landing page resulting from Slicing design from figma to code."
              skill1="HTML"
              skill2="CSS"
              skill3="Bootstrap"
              skill4="Javascript"
              skill5="SwiperJS"
            />
          </div>
          <div className="col-md-6 mb-5 my-lg-5">
            <CardProject
              img={Iolink}
              title="Landing Page IOLINK"
              link="https://iolink.netlify.app/"
              desc="IOLINK is engaged in the service of making digital business cards such as Biolink. I am in charge of making landing pages up to the dashboard, which is currently still in the development stage. Besides that, I am in charge of making a biolink for every user who registers."
              skill1="HTML"
              skill2="CSS"
              skill3="Bootstrap"
              skill4="Javascript"
            />
          </div>
          <div className="col-md-6 mb-5 my-lg-5">
            <CardProject
              img={Hrinvitation}
              title="Landing Page HRINVITATION"
              link="https://hrinvitation.com/"
              desc="Creating website landing pages for services engaged in creating digital invitation websites."
              skill1="WordPress"
              skill2="Elementor"
              skill3="Astra"
              skill4="YoastSEO"
              skill5="CSS"
            />
          </div>
          <div className="col-md-6 mb-5 my-lg-5">
            <CardProject
              img={Vijay}
              title="Portfolio Website"
              link="https://vijaybrara.com/"
              desc="I built this website for my client within 3 days, which has 4 pages then i used react router to switch between pages. The form on the website is connected to Google spreadsheet using Google apps Script."
              skill1="HTML"
              skill2="CSS"
              skill3="Javascript"
              skill4="ReactJs"
              skill5="Google Apps Script"
            />
          </div>
          <div className="col-md-6 mb-5 my-lg-5">
            <CardProject
              img={UangkuApp}
              title="Uangku Apps"
              link="https://uangku-app.netlify.app/"
              desc="Create a simple finance application, to train data management in ReactJs. But for a while the data will be lost if the page is refreshed, because it hasn't added Web storage."
              skill1="HTML"
              skill2="CSS"
              skill3="Javascript"
              skill4="Bootstrap"
              skill5="ReactJS"
            />
          </div>
          <div className="col-md-6 mb-5 my-lg-5">
            <CardProject
              img={Hanupis}
              title="Web Rent Cars Hanupis"
              link="https://hanupisrentcar.com/"
              desc="PT. Hanupis is a company that provides car rental transportation services. I made this website from scratch and I also made several websites for the company's branches."
              skill1="WordPress"
              skill2="Elementor"
              skill3="Astra"
              skill4="YoastSEO"
              skill5="CSS"
            />
          </div>
          <div className="col-md-6 mb-5 my-lg-5">
            <CardProject
              img={Resto}
              title="Slicing Design Web Restaurant"
              desc="I made this project to complete a coding challenge organized by Build with Angga in the context of Indonesia's independence day."
              skill1="HTML"
              skill2="CSS"
              skill3="Bootstrap"
              skill4="Javascript"
            />
          </div>
          <div className="col-md-6 mb-5 my-lg-5">
            <CardProject
              img={Property}
              title="Web Property"
              link="https://sangdewiproperty.com/"
              desc="Sang Dewi Property serves the rental and sale of houses, apartments and shop houses. I also make copywriting on this website and standard seo settings."
              skill1="WordPress"
              skill2="Elementor"
              skill3="Astra"
              skill4="YoastSEO"
              skill5="CSS"
            />
          </div>
        </div>
        {/* button back to home */}
        <div className="row my-3">
          <div className="col-12 text-center">
            <button type="button" className="btn-projects rounded-2 zoom-1" onClick={() => Navigate("/")}>
              <i className="bi bi-arrow-left"></i> Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
