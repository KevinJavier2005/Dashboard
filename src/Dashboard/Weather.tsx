import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "0dc111d298fc88120c87a6b1d619f43a";
const CITY = "Ciudad de México";

interface WeatherData {
  temp: number;
  icon: string;
}

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=es`
        );
        const data = response.data;
        setWeather({
          temp: data.main.temp,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        });
      } catch (err) {
        setError("Error al obtener el clima");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.description}>Temperatura</h2>
      {weather && (
        <>
          <p style={styles.temp}>{weather.temp}°C</p>
        </>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: "white", // Cambio a fondo blanco
    color: "black", // Cambiar color de texto a negro para contraste
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
    width: "250px",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  temp: {
    fontSize: "30px",
    fontWeight: "bold",
  },
};

export default Weather;
