import { Show } from "../components/showProject/Show";
import agri from "../assets/agri/agri1.png";
import agri1 from "../assets/agri/agri2.png";
import agri3 from "../assets/agri/agri3.png";
import agri4 from "../assets/agri/agri4.png";

export function Agricultero() {
  return (
    <div>
      <Show
        title={"El Agricultero"}
        description={
          "Software de agricultura, tu destino completo para todo lo relacionado con el mundo agrícola. Diseñado pensando en agricultores, entusiastas y profesionales del campo, nuestro software ofrece una experiencia única que combina tecnología avanzada con la riqueza de los conocimientos agrícolas. "
        }
        src0={agri}
        alt0={"agricultero"}
        src1={agri1}
        alt1={"agricultero"}
        src2={agri3}
        alt2={"agricultero"}
        src3={agri4}
        alt3={"agricultero"}
      ></Show>
    </div>
  );
}
