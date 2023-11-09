import React from "react";
import git from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import php from "../../assets/php.png";
import angular from "../../assets/angular.png";
import javascript from "../../assets/javascript.png";
import reactIcon from "../../assets/react.png";
import vue from "../../assets/vuejs.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
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
                <h1>Hola</h1>
                <h1 className="unicStyle">,</h1>
                <h1 className="unicStyle">soy</h1>
              </div>
              <div className="name">
                <h1>Junior Martinez</h1>
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
          <h1 className="titleTec">Tecnologias y Proyectos</h1>
        </div>
        <div className="iconsTec">
          <IconCard src={php} alt={"phpIcon"}></IconCard>
          <IconCard src={angular} alt={"angularIcon"}></IconCard>
          <IconCard src={javascript} alt={"javascriptIcon"}></IconCard>
          <IconCard src={reactIcon} alt={"reactIcon"}></IconCard>
          <IconCard src={vue} alt={"vueIcon"}></IconCard>
          <IconCard src={node} alt={"nodeIcon"}></IconCard>
          <IconCard src={express} alt={"expressIcon"}></IconCard>
        </div>
        <div className="carrousel">
          <Carrousel></Carrousel>
        </div>
      </div>
    </>
  );
}
