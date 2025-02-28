import React from 'react';

const Geoportal = () => {
  return (
    <div className="geoportal-container">
      <div style={{ width: '100%', height: '600px' }}>
        <iframe
          src="/20240119webmap/index.html"  // Ruta del archivo index.html
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Mapa interactivo"
        ></iframe>
      </div>
    </div>
  );
};

export default Geoportal;
