const Sidebar = () => {
    return (
      <div style={{ width: "120px", height: "100vh", backgroundColor: "#6069ac", color: "white", padding: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "15px" }}>
            <a href="/dashboard" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
              📊 Dashboard
            </a>
          </li>
          <li style={{ marginTop: "400px" }}>
            <a href="/logout" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
              🚪 Salir
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;