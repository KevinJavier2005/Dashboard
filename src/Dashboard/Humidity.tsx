import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "0dc111d298fc88120c87a6b1d619f43a";
const CITY = "Ciudad de México";

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
  humidity: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "black",
  },
};

export default Humidity;