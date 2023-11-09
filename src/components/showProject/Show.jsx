import "./style.css";
import git from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import home from "../../assets/home.png";
import { NavLink } from "react-router-dom";

export function Show(props) {
  return (
    <div className="fullCont">
      <div className="nav">
        <div className="home">
          <NavLink to={"/"}>
            <img src={home} alt="homeIcon" className="iconImg" />
          </NavLink>
        </div>
        <div className="icons">
          <a href="https://github.com/junior-debug">
            <img src={git} alt="gitIcon" className="iconImg" />
          </a>
          <a href="https://www.instagram.com/marzdevelop/">
            <img src={instagram} alt="instaIcon" className="iconImg" />
          </a>
          <a href="https://www.linkedin.com/in/junior-mc/">
            <img src={linkedin} alt="linkdnIcon" className="iconImg" />
          </a>
        </div>
      </div>
      <h1>{props.title}</h1>
      <p className="titleDes">{props.description}</p>
      <div className="imgCont">
        <div className="sectImg">
          <div className="imgProject">
            <img src={props.src0} alt={props.alt0} />
          </div>
          <div className="imgProject">
            <img src={props.src1} alt={props.alt1} />
          </div>
        </div>
        <div className="sectImg">
          <div className="imgProject">
            <img src={props.src2} alt={props.alt2} />
          </div>
          <div className="imgProject">
            <img src={props.src3} alt={props.alt3} />
          </div>
        </div>
      </div>
    </div>
  );
}
