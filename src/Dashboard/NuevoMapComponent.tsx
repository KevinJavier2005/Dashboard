import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const MAPBOX_TOKEN = "pk.eyJ1IjoiMjMzOTMzMTMiLCJhIjoiY20yOTJyaWJsMDEzeDJscTRqNWFlcTdiZCJ9.UiuFv_W8224_PzoVtdH5mQ";

const ubicacionesCultivos = [
  { lat: -90.17869520925468, lng: 19.208107721273798, nombre: "Campeche" },
  { lat: -92.9092031387529, lng: 17.001494145000205, nombre: "Chiapas" },
  { lat: -96.83091431863339, lng: 16.73637856540622, nombre: "Oaxaca" },
  { lat: -87.20694453878185, lng: 19.233208158594977, nombre: "Quintana Roo" },
  { lat: -92.60407286951938, lng: 18.29124944528246, nombre: "Tabasco" },
  { lat: -96.1385893081795, lng: 19.17186626718512, nombre: "Veracruz" },
  { lat: -88.88041333772581, lng: 20.188068452233754, nombre: "Yucatán" },
];

const NuevoMapComponent: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const myMap = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const addMarkers = (ubicaciones: { lat: number; lng: number; nombre: string }[]) => {
    if (!myMap.current) return;

    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    ubicaciones.forEach((ubicacion) => {
      console.log(`Agregando marcador en: ${ubicacion.nombre}, Lat: ${ubicacion.lat}, Lng: ${ubicacion.lng}`); // Log para ver las ubicaciones

      const marker = new mapboxgl.Marker()
        .setLngLat([ubicacion.lng, ubicacion.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${ubicacion.nombre}</h3>`))
        .addTo(myMap.current!);

      markersRef.current.push(marker);
    });
  };

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    myMap.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-99.1332, 19.4326],
      zoom: 5,
      attributionControl: false,
    });

    myMap.current.on("load", () => {
      addMarkers(ubicacionesCultivos);
    });

    return () => {
      if (myMap.current) {
        myMap.current.remove();
      }
    };
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Cultivos del Sur | Mapa de Ubicaciones</h2>
      <div ref={mapContainerRef} style={styles.map} />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "10px",
    textAlign: "left",
    textTransform: "capitalize",
  },
  map: {
    width: "100%",
    height: "500px",
    borderRadius: "10px",
  },
};

export default NuevoMapComponent;