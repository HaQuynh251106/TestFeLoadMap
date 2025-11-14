import { MapContainer, TileLayer, LayersControl, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css'; 
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapComponent() {
  const position = [10.732237, 106.732600];
  const zoomLevel = 13; 
;
  const localTileUrl = "/quan72023-MAPBOX/quan72023/{z}/{x}/{y}.png";

  return (
    <div className="map-wrapper"> 
      <MapContainer 
        center={position} 
        zoom={zoomLevel} 
        style={{ height: '100%', width: '100%' }}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Bản đồ nền (OpenStreetMap)">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.Overlay checked name="Dữ liệu Quận 7 (Offline)">
            <TileLayer
              url={localTileUrl} 
              attribution="Dữ liệu offline Quận 7"
              minZoom={12} 
              maxZoom={16} 
              tms={false}
            />
          </LayersControl.Overlay>
        </LayersControl>

        <Marker position={position}>
          <Popup>
            Đây là vị trí bạn đã chọn. <br /> 
            Tọa độ: {position[0]}, {position[1]}
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
}

export default MapComponent;