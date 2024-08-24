import React from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function StreetMap() {
  const defaultProps = {
    center: {
      lat: 46.3497,
      lng: 48.0408,
    },
    zoom: 13,
  };
  return (
    <div style={{ height: "600px", width: "40%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
