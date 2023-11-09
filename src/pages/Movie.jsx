import { Show } from "../components/showProject/Show";
import movie from "../assets/movie/movie1.png";
import movie1 from "../assets/movie/movie2.png";
import movie2 from "../assets/movie/movie3.png";
import movie3 from "../assets/movie/movie4.png";

export function Movie() {
  return (
    <>
      <Show
        title={"Movie Team"}
        description={
          "Movie es una app donde se enlistan peliculas suministradas por Apis donde existen funcionalidades como ver descripcion, puntuar, buscar peliculas atravez de input Search y enlistar las peliculas del Usuario. "
        }
        src0={movie}
        alt0={"moviecultero"}
        src1={movie1}
        alt1={"moviecultero"}
        src2={movie2}
        alt2={"moviecultero"}
        src3={movie3}
        alt3={"agricultero"}
      ></Show>
    </>
  );
}
