import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

const centerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = () => {
  const [opacity, setOpacity] = useState(1);

  const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpacity(parseFloat(event.target.value));
  };

  return (
    <div style={{ position: "relative", width: "900px", height: "500px" }}>
      <MapContainer
        center={[10.743603, 106.699219]}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <TileLayer
          url="/quan72023/{z}/{x}/{y}.png"
          tms={true}
          opacity={opacity}
        />

        <Marker position={[10.743603, 106.699219]} icon={centerIcon}>
          <Popup>Vị trí trung tâm</Popup>
        </Marker>
      </MapContainer>

      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "rgba(255, 255, 255, 0.9)",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          width: "200px",
          zIndex: 1000,
        }}
      >
        <label
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            display: "block",
            marginBottom: "6px",
          }}
        >
          Độ mờ: {Math.round(opacity * 100)}%
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={opacity}
          onChange={handleOpacityChange}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default MapComponent;
