import React from "react";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img
          src="src/Components/367a3-1200px-logo-ut-cancun-bis.png"
          alt="Logo"
          style={styles.logoImage}
        />
      </div>

      <div style={styles.userInfo}>
        <div style={styles.userName}>
          <span style={styles.firstName}>Kevin Javier</span>
          <span style={styles.lastName}>Velázquez Molinero</span>
        </div>

        <div style={styles.separator}></div>

        <div style={styles.userIcon}>
          <img
            src="src/Components/catmilitar vs sonic.exe.png"
            alt="User"
            style={styles.userImage}
          />
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    color: "white",
    width: "100%",
    height: "80px",
    boxSizing: "border-box",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    width: "250px",
    height: "80px",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  userName: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "white",
    fontSize: "14px",
  },
  firstName: {
    fontSize: "14px",
  },
  lastName: {
    fontSize: "14px",
    marginTop: "3px",
  },
  separator: {
    width: "1px",
    height: "50px",
    backgroundColor: "white",
    margin: "0 12px",
  },
  userIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginLeft: "0",
    marginRight: "20px",
  },
  userImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default Header;