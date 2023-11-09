import React from "react";
import "../iconsTec/style.css"; // Asegúrate de que la ruta del archivo de estilos sea correcta

// Definición del componente IconCard
export function IconCard(props) {
  return (
    <div className="icon-container">
      <img src={props.src} alt={props.alt} className="icon" />
    </div>
  );
}
