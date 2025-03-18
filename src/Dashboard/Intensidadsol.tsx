import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "0dc111d298fc88120c87a6b1d619f43a";

const IntensidadSol: React.FC = () => {
  const [intensidad, setIntensidad] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [aproximado, setAproximado] = useState<number | null>(null);
  const [estimado, setEstimado] = useState<number>(Math.random() * 11); // Genera un valor estimado entre 0 y 11

  useEffect(() => {
    const fetchIntensidadSol = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=19.4326&lon=-99.1332&appid=${API_KEY}&exclude=hourly,daily&units=metric&lang=es`
        );
        const uvIndex = response.data.current.uvi;
        setIntensidad(uvIndex);
        
        // Genera un número aproximado sumando o restando hasta 0.5
        const randomFactor = (Math.random() - 0.5) * 0.5;
        setAproximado(parseFloat((uvIndex + randomFactor).toFixed(1)));
      } catch (err) {
        // No se mostrará ningún mensaje de error
      } finally {
        setLoading(false);
      }
    };

    fetchIntensidadSol();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.description}>Intensidad del Sol</h2>
      <h2 style={styles.estimado}>{estimado.toFixed(1)}</h2>
      {aproximado !== null && (
        <p style={styles.aproximado}>Aprox: {aproximado}</p>
      )}
      {intensidad !== null && (
        <div>
          <p style={styles.intensidad}>Índice UV: {intensidad}</p>
          <p style={styles.info}>
            El índice UV indica la intensidad de la radiación ultravioleta.
          </p>
          <div style={styles.intensidadBar}>
            <div
              style={{
                ...styles.intensidadMeter,
                width: `${(intensidad / 11) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: "white", // Fondo blanco
    color: "black", // Color de texto negro
    padding: "40px", // Aumentando el padding para más espacio
    borderRadius: "10px",
    textAlign: "center",
    width: "250px", // Aumentando el ancho
    height: "150px", // Aumentando la altura
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Centrado vertical
    alignItems: "center", // Centrado horizontal
  },
  description: {
    fontSize: "20px", // Aumentando el tamaño de la descripción
    fontWeight: "bold",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  estimado: {
    fontSize: "25px", // Aumentando el tamaño del estimado
    fontWeight: "bold",
    color: "black", // Números de color negro
    marginTop: "10px",
  },
  aproximado: {
    fontSize: "22px", // Aumentando el tamaño de la aproximación
    fontWeight: "bold",
    color: "black", // Números de color negro
    marginTop: "5px",
  },
  intensidad: {
    fontSize: "30px", // Aumentando el tamaño del índice UV
    fontWeight: "bold",
    color: "black", // Números de color negro
    marginTop: "15px",
  },
  info: {
    fontSize: "16px", // Aumentando el tamaño del texto informativo
    marginTop: "15px",
  },
  intensidadBar: {
    width: "100%",
    height: "12px", // Aumentando la altura de la barra de intensidad
    background: "#555",
    borderRadius: "5px",
    marginTop: "15px",
  },
  intensidadMeter: {
    height: "100%",
    borderRadius: "5px",
    background: "#FFDD00",
  },
};

export default IntensidadSol;


