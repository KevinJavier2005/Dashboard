import React from "react";
import MapComponent from "./Dashboard/NuevoMapComponent";
import Clima from "./Dashboard/Clima";
import Humidity from "./Dashboard/Humidity";
import Weather from "./Dashboard/Weather";
import IntensidadSol from "./Dashboard/Intensidadsol";

// Componente Header con solo el logo
const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        {/* Imagen del logo local */}
        <img
          src="src/Components/367a3-1200px-logo-ut-cancun-bis.png"
          alt="Logo"
          style={styles.logoImage}
        />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "flex-start", // Alinea el logo a la izquierda
    alignItems: "center", // Centra la imagen verticalmente
    padding: "1rem 2rem",
    color: "white", // Cambié el color a blanco ya que eliminamos el fondo
    width: "100%", // Asegura que el header ocupe el 100% del ancho
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    width: "300px",  // Aumenté el tamaño de la imagen
    height: "100px", // Aumenté el tamaño de la imagen
  },
};

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",  // Se asegura que el header esté arriba
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        gap: "20px",
        justifyContent: "flex-start",  // Coloca todo el contenido desde la parte superior
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#6069ac", // Fondo azul agregado
      }}
    >
      {/* Header con solo el logo alineado a la izquierda */}
      <Header />

      {/* Contenedor principal que agrupa todos los elementos */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Mapa a la izquierda */}
        <div
          style={{
            flex: 1,
            height: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            width: "90%",
          }}
        >
          <MapComponent />
        </div>

        {/* Contenedor de Sensores y Clima a la derecha */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            height: "100%",
            maxHeight: "90vh", // Limita la altura para que el contenido no se oculte
            overflowY: "auto", // Permite desplazamiento si hay más contenido
            marginTop: "50px",
          }}
        >
          {/* Weather y Humidity en la misma fila */}
          <div style={{ display: "flex", gap: "20px", width: "100%" }}>
            <div style={{ flex: 1 }}>
              <Weather />
            </div>
            <div style={{ flex: 1 }}>
              <Humidity />
            </div>
          </div>

          {/* Clima e Intensidad del Sol en la misma fila */}
          <div style={{ display: "flex", gap: "20px", width: "100%" }}>
            <div style={{ flex: 1 }}>
              <Clima />
            </div>
            <div style={{ flex: 1 }}>
              <IntensidadSol />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
