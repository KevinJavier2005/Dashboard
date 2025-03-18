import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "0dc111d298fc88120c87a6b1d619f43a"; // Tu API Key de OpenWeatherMap
const CITY = "Ciudad de México"; // Cambia la ciudad si lo necesitas

const Humidity: React.FC = () => {
  const [humidity, setHumidity] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHumidity = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=es`
        );
        setHumidity(response.data.main.humidity);
      } catch (err) {
        setError("Error al obtener la humedad");
      } finally {
        setLoading(false);
      }
    };

    fetchHumidity();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.description}>Humedad</h2>
      {humidity !== null && <p style={styles.humidity}>{humidity}%</p>}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: "#ffffff", // Cambié el color del fondo a blanco
    color: "black", // Cambié el color del texto a negro
    padding: "30px", // Ajustando el padding para más espacio
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
  humidity: {
    fontSize: "26px", // Tamaño moderado
    fontWeight: "bold",
    color: "black", // Cambié el color del porcentaje a negro
  },
};

export default Humidity;
