import { Show } from "../components/showProject/Show";
import asis0 from "../assets/asistance/asis0.png";
import asis1 from "../assets/asistance/asis1.png";
import asis2 from "../assets/asistance/asis2.png";
import asis3 from "../assets/asistance/asis3.png";

export function Asistance() {
  return (
    <div>
      <Show
        title={"Asistencia"}
        description={
          "Asistencia un software desarrollado con el objetivo de llevar la asistencia y el pago de nomina de la empresa prc333, cuenta con caracterizticas como ingreso y egreso de personal en archivos masivos, entre muchas mas funciones internos que hacen eficientemente un trabajo que es delicado para la empresa."
        }
        src0={asis0}
        alt0={"asistance"}
        src1={asis2}
        alt1={"asistance"}
        src2={asis1}
        alt2={"asistance"}
        src3={asis3}
        alt3={"asistance"}
      ></Show>
    </div>
  );
}
