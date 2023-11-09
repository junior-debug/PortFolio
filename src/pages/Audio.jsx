import { Show } from "../components/showProject/Show";
import audio0 from "../assets/bankAudio/audio0.png";
import audio1 from "../assets/bankAudio/audio1.png";
import audio2 from "../assets/bankAudio/audio2.png";

export function Audio() {
  return (
    <>
      <Show
        title={"Banco de Audio"}
        description={
          "Banco de Audio es un sistema de Almacenamiento de audios donde el objetivo es contar con los multiples audios que se reciben dia tras dia en Prc333 con la finalidad de tener constancia de ventas y facturaciones de servicios en la empresa tanto evidencia de soportes que brindan dia tras dia. "
        }
        src0={audio0}
        alt0={"Audio"}
        src1={audio1}
        alt1={"Audio"}
        src2={audio2}
        alt2={"Audio"}
      ></Show>
    </>
  );
}
