import "../css/CardProject.css";

const CardProject = (props) => {
  return (
    <div className="row wrapper-project-row">
      <div className="col wrapper-project">
        <img src={props.img} className="w-100 rounded-1 " />
        <div className="detail-project">
          <a href={props.link} target="_blank">
            <h5 className="heading-project mt-3">{props.title}</h5>
          </a>
          <div className="desc-project">
            <p className="text-light">{props.desc}</p>
          </div>
          <div className="wrapper-stack">
            <span className="techStack">{props.skill1}</span>
            <span className="techStack">{props.skill2}</span>
            <span className="techStack">{props.skill3}</span>
            <span className="techStack">{props.skill4}</span>
            <span className="techStack">{props.skill5}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
