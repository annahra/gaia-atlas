import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { environment } from "../../.env.development.local";
import "./Map.css";

mapboxgl.accessToken = environment.mapbox.accessToken;

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null); // Reference to the map container

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-79.999732, 40.4374],
      zoom: 11,
    });

    return () => {
      map.remove(); // Cleanup the map when the component is unmounted
    };
  }, []);

  return <div ref={mapContainerRef} className="map-container" />;
};

export default Map;
