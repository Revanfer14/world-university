import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../public/marker.png";

const customMarker = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const CountryMap = ({ lat, lon, name }) => (
  <MapContainer
    center={[lat, lon]}
    zoom={5}
    style={{ width: "100%", height: "100%" }}
    className="rounded-lg shadow-md border border-gray-300"
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={[lat, lon]} icon={customMarker}>
      <Popup>{name}</Popup>
    </Marker>
  </MapContainer>
);

export default CountryMap;
