import React from "react";
import git from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import php from "../../assets/technologies/php.svg";
import angular from "../../assets/technologies/angular.svg";
import javascript from "../../assets/technologies/javascript.svg";
import reactIcon from "../../assets/technologies/react.svg";
import vue from "../../assets/technologies/vuejs.svg";
import node from "../../assets/technologies/node.png";
import express from "../../assets/technologies/express.png";
import { IconCard } from "../iconsTec/iconCard";
import { Carrousel } from "../carrousel/Carrousel";
import "./style.css";

export function ManualParallax() {
  const scrollToSection = () => {
    const section = document.querySelector("#seccionDestino");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const phpWidth = {
    width: "100px",
  };

  const angularWidth = {
    width: "90px",
  };

  const javascriptWidth = {
    width: "72px",
  };

  const reactWidth = {
    width: "85px",
  };

  const vueWidth = {
    width: "75px",
  };

  const expressWidth = {
    width: "100px",
  };
  return (
    <>
      <div className="bgimg-1">
        <div className="caption">
          <div className="topCont">
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
          <div className="headerCont">
            <div className="content">
              <div className="name">
                <h1 className="unicStyle">Hola</h1>
                <h1 className="unicStyle">,</h1>
                <h1 className="unicStyle">soy</h1>
              </div>
              <div className="name">
                <h1 className="unicStyle">Junior Martinez</h1>
              </div>
              <div className="bar"></div>
              <p className="paragraphe">Desarrollador Web</p>
            </div>
            <div className="content">
              <button className="butProjects" onClick={scrollToSection}>
                console.log('VerProyectos')
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="seccionDestino" className="section">
        <div className="contTec">
          <h1 className="titleTec">Tecnologias</h1>
        </div>
        <div className="contTec">
          <h1 className="titleTec second">Proyectos</h1>
        </div>
        <div className="iconsTec">
          <IconCard src={php} alt={"phpIcon"} width={phpWidth}></IconCard>
          <IconCard
            src={angular}
            alt={"angularIcon"}
            width={angularWidth}
          ></IconCard>
          <IconCard
            src={javascript}
            alt={"javascriptIcon"}
            width={javascriptWidth}
          ></IconCard>
          <IconCard
            src={reactIcon}
            alt={"reactIcon"}
            width={reactWidth}
          ></IconCard>
          <IconCard src={vue} alt={"vueIcon"} width={vueWidth}></IconCard>
          <IconCard src={node} alt={"nodeIcon"}></IconCard>
          <IconCard
            src={express}
            alt={"expressIcon"}
            width={expressWidth}
          ></IconCard>
        </div>
        <div className="carrousel">
          <div className="positionC">
            <Carrousel></Carrousel>
          </div>
        </div>
      </div>
    </>
  );
}
