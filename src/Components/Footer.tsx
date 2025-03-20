import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#6069ac",
        color: "white",
        padding: "10px 20px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          textAlign: "left",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "120%",
              height: "3px",
              backgroundColor: "yellow",
              position: "absolute",
              top: "-16px",
              left: "-10%",
            }}
          ></div>
        </div>

        © 2025 MarketinIA - Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;