import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../cardProjects/style.css";

export function CardProject(props) {
  const [isHovered, setIsHovered] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className={`contSlice ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overlay">
        <img src={props.project} alt={props.projectAlt} className="imgLogo" />
        {props.typeBut == "1" ? (
          <a href={props.projectLink} target="_blank">
            <button className="but">visitar</button>
          </a>
        ) : (
          <NavLink to={props.projectRoute}>
            <button className="but" onClick={scrollToTop}>
              visitar
            </button>
          </NavLink>
        )}
      </div>
      {/* Elemento de superposición */}
      <div className="contImg">
        <img className="imgMockup" src={props.src} alt={props.alt} />
      </div>
    </div>
  );
}
