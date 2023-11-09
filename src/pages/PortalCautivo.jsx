import { Show } from "../components/showProject/Show";
import portal from "../assets/portal/portalC.png";

export function Portal() {
  return (
    <>
      <Show
        title={"Portal Cautivo"}
        description={
          "Portal Cautivo es un Software donde su funcionalidad es seder acceso a internet en diferentes aeropuertos atravez de un formulario, utilizando librerias de terceros suministradas por empresa especializada en wifi. "
        }
        src0={portal}
        alt0={"portal"}
      ></Show>
    </>
  );
}
