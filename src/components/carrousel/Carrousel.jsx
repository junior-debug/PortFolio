// Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardProject } from "../cardProjects/CardProjects";
import agricultero from "../../assets/agricultero.png";
import ankara from "../../assets/ankara.png";
import xatoxi from "../../assets/xatoxi.png";
import ipglobal from "../../assets/ipglobal.png";
import ital from "../../assets/italLogo.png";
import anka from "../../assets/logo.webp";
import agriIcon from "../../assets/blanco-sinfondo.png";
import cinema from "../../assets/cinema.png";
import asistance from "../../assets/asisMockup.png";
import audio from "../../assets/audioMockup.png";
import prc from "../../assets/logo_prc.png";
import timer from "../../assets/timerMockup.png";
import bulk from "../../assets/bulkMockup.png";
import portal from "../../assets/portalMockup.png";
import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Carrousel() {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
    >
      <SwiperSlide>
        <CardProject
          typeBut={"1"}
          src={xatoxi}
          alt={"xatoxi"}
          project={ital}
          projectAlt={"italcambio"}
          projectLink={"https://www.xatoxi.app/"}
        ></CardProject>
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          typeBut={"1"}
          src={ankara}
          alt={"ankara"}
          project={anka}
          projectAlt={"ankara"}
          projectLink={"https://www.ankaravenezuela.com/"}
        ></CardProject>
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          typeBut={"0"}
          src={agricultero}
          alt={"agricultero"}
          project={agriIcon}
          projectAlt={"agriIcon"}
          projectRoute={"/agricultero"}
        ></CardProject>
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          typeBut={"0"}
          src={ipglobal}
          alt={"ipglobal"}
          project={cinema}
          projectAlt={"cinema"}
          projectRoute={"/movie"}
        ></CardProject>
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          typeBut={"0"}
          src={asistance}
          alt={"asistance"}
          project={prc}
          projectAlt={"prc"}
          projectRoute={"/asistance"}
        ></CardProject>
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          typeBut={"0"}
          src={audio}
          alt={"audio"}
          project={prc}
          projectAlt={"prc"}
          projectRoute={"/audio"}
        ></CardProject>
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          typeBut={"0"}
          src={timer}
          alt={"timer"}
          project={prc}
          projectAlt={"prc"}
          projectRoute={"/timer"}
        ></CardProject>
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          typeBut={"0"}
          src={bulk}
          alt={"bulk"}
          project={prc}
          projectAlt={"prc"}
          projectRoute={"/bulkSales"}
        ></CardProject>
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          typeBut={"0"}
          src={portal}
          alt={"portalCautivo"}
          project={prc}
          projectAlt={"prc"}
          projectRoute={"/portalCautivo"}
        ></CardProject>
      </SwiperSlide>
    </Swiper>
  );
}
