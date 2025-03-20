import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "0dc111d298fc88120c87a6b1d619f43a";

const IntensidadSol: React.FC = () => {
  const [intensidad, setIntensidad] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [aproximado, setAproximado] = useState<number | null>(null);
  const [estimado, setEstimado] = useState<number>(Math.random() * 11);
  useEffect(() => {
    const fetchIntensidadSol = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=19.4326&lon=-99.1332&appid=${API_KEY}&exclude=hourly,daily&units=metric&lang=es`
        );
        const uvIndex = response.data.current.uvi;
        setIntensidad(uvIndex);

        const randomFactor = (Math.random() - 0.5) * 0.5;
        setAproximado(parseFloat((uvIndex + randomFactor).toFixed(1)));
      } catch (err) {
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
    background: "white",
    color: "black",
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
  estimado: {
    fontSize: "25px",
    fontWeight: "bold",
    color: "black",
    marginTop: "10px",
  },
  aproximado: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "black",
    marginTop: "5px",
  },
  intensidad: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "black",
    marginTop: "15px",
  },
  info: {
    fontSize: "16px",
    marginTop: "15px",
  },
  intensidadBar: {
    width: "100%",
    height: "12px",
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