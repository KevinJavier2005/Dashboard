import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "0dc111d298fc88120c87a6b1d619f43a";
const CITY = "Ciudad de México"; // Puedes cambiar la ciudad

interface ClimaData {
  description: string;
  icon: string;
}

const Clima: React.FC = () => {
  const [clima, setClima] = useState<ClimaData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClima = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=es`
        );
        const data = response.data;
        setClima({
          description: data.weather[0].description,
          icon: data.weather[0].main.toLowerCase(), // Actualiza para mostrar el ícono según el clima
        });
      } catch (err) {
        setError("Error al obtener el clima");
      } finally {
        setLoading(false);
      }
    };

    fetchClima();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  // Lógica para mostrar el ícono de sol
  const getSolIcon = () => {
    if (clima && (clima.description.includes("soleado") || clima.description.includes("clear") || clima.description.includes("sunny"))) {
      return (
        <img
          src="src/Dashboard/imagen_2025-03-17_230238397-removebg-preview.png"
          alt="Icono de Sol"
          style={styles.icon}
        />
      );
    }
    return (
      <img
        src="src/Dashboard/imagen_2025-03-17_230238397-removebg-preview.png"
        alt="icono del clima"
        style={styles.icon}
      />
    );
  };

  return (
    <div style={styles.container}>
      {clima && (
        <>
          <p style={styles.description}>{clima.description}</p>
          <div style={styles.iconContainer}>{getSolIcon()}</div>
        </>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: "#ffffff", // Cambié el color del fondo a blanco
    color: "black", // Cambié el color del texto a negro
    padding: "30px", // Ajustando el padding para mayor espacio
    borderRadius: "10px",
    textAlign: "center",
    width: "271px", // Ajustando el ancho
    height: "171px", // Ajustando la altura
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Centrado vertical
    alignItems: "center", // Centrado horizontal
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Agregué una sombra para darle más profundidad
  },
  description: {
    fontSize: "20px", // Tamaño moderado
    fontWeight: "bold",
    marginBottom: "8px",
    textTransform: "uppercase",
  },
  iconContainer: {
    marginTop: "10px",
  },
  icon: {
    width: "100px", // Aumenté el tamaño del ícono
    height: "100px", // Aumenté el tamaño del ícono
  },
};

export default Clima;

