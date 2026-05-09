"use client";
import { MapContainer, TileLayer, Circle, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const iconViolet = L.divIcon({
  html: `<div style="width:14px;height:14px;background:#8308D4;border-radius:50%;border:2px solid white;"></div>`,
  className: "",
  iconAnchor: [7, 7],
});

const iconBleu = L.divIcon({
  html: `<div style="width:14px;height:14px;background:#3B82F6;border-radius:50%;border:2px solid white;"></div>`,
  className: "",
  iconAnchor: [7, 7],
});

const test = [[50.799999, 1.6]];

export default function MapView({
  location,
  distance,
}: {
  location: [number, number];
  distance: number | null;
}) {
  return (
    <MapContainer
      center={location}
      zoom={10}
      className="w-full h-full rounded-xl"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Marker de la recherche */}
      <Marker position={location} icon={iconBleu} />

      {/* .Map pour afficher tout les markers des postes */}
      {test.map((point, i) => (
        <Marker
          key={i}
          position={point as [number, number]}
          icon={iconViolet}
          eventHandlers={{
            click: () => console.log("Marker cliqué :", point),
          }}
        />
      ))}

      {/* Cercle de distance */}
      {distance && (
        <Circle
          center={location}
          radius={distance * 1000}
          pathOptions={{
            color: "#8308D4",
            fillColor: "#8308D4",
            fillOpacity: 0.1,
          }}
        />
      )}
    </MapContainer>
  );
}
