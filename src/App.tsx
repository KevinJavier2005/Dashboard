import React from "react";
import Sidebar from "./Components/sidebar";
import MapComponent from "./Dashboard/NuevoMapComponent";
import Clima from "./Dashboard/Clima";
import Humidity from "./Dashboard/Humidity";
import Weather from "./Dashboard/Weather";
import IntensidadSol from "./Dashboard/Intensidadsol";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw", backgroundColor: "#6069ac", overflow: "hidden" }}>
      
      <Header />

      <div style={{ display: "flex", flex: 1, overflow: "hidden", height: "calc(100vh - 60px)" }}> 
        <Sidebar />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px", justifyContent: "flex-start", alignItems: "center", overflow: "hidden" }}>
          
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", flex: 1 }}>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", width: "90%" }}>
              <MapComponent />
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", height: "100%", maxHeight: "90vh", marginTop: "50px" }}>
              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                <div style={{ flex: 1 }}>
                  <Weather />
                </div>
                <div style={{ flex: 1 }}>
                  <Humidity />
                </div>
              </div>

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

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;