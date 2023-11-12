import React, { useState, useEffect } from "react";
import "../iconsTec/style.css";

// Definición del componente IconCard
export function IconCard(props) {
  const [jumping, setJumping] = useState(false);

  useEffect(() => {
    const jumpInterval = setInterval(() => {
      setJumping(true);

      // Después de un tiempo, dejar de saltar
      setTimeout(() => {
        setJumping(false);
      }, 300);
    }, calculateRandomDelay()); // El intervalo ahora es un valor aleatorio

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearInterval(jumpInterval);
  }, []); // El segundo argumento del useEffect es un array vacío para asegurar que el efecto se ejecute solo una vez al montar el componente

  const calculateRandomDelay = () => {
    return Math.random() * 25000; // Cambia el rango según tus necesidades
  };

  const jumpClass = jumping ? "jump" : ""; // Agrega la clase "jump" cuando está saltando

  return (
    <div className={`icon-container ${jumpClass}`}>
      <img src={props.src} alt={props.alt} style={props.width} />
    </div>
  );
}
