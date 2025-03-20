import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "0dc111d298fc88120c87a6b1d619f43a";
const CITY = "Ciudad de México";

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
          icon: data.weather[0].main.toLowerCase(),
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
    background: "#ffffff",
    color: "black",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "271px",
    height: "171px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  description: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
    textTransform: "uppercase",
  },
  iconContainer: {
    marginTop: "10px",
  },
  icon: {
    width: "100px",
    height: "100px",
  },
};

export default Clima;