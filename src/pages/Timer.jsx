import { Show } from "../components/showProject/Show";
import timer from "../assets/timer/timer0.png";
import timer1 from "../assets/timer/timer1.png";
import timer2 from "../assets/timer/timer2.png";
import timer3 from "../assets/timer/timer3.png";

export function Timer() {
  return (
    <>
      <Show
        title={"Timer"}
        description={
          "Timer es un software para monitorizar el tiempo de sesion de los trabajadores en el area de telecomunicacion de la empresa Prc333 donde sus funcionalidades son el poder monitorear en tiempo real los tiempos de trabajo. "
        }
        src0={timer}
        alt0={"timer"}
        src1={timer2}
        alt1={"timer"}
        src2={timer1}
        alt2={"timer"}
        src3={timer3}
        alt3={"timer"}
      ></Show>
    </>
  );
}
