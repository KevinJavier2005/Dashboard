import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        {/* Imagen local de la carpeta public */}
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
    display: 'flex',
    justifyContent: 'flex-start',  // Alinea el logo a la izquierda
    alignItems: 'center',          // Centra la imagen verticalmente
    padding: '1rem 2rem',
    color: 'white',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '50px',  // Ajusta el tamaño de la imagen según sea necesario
    height: '50px',
  },
};

export default Header;
