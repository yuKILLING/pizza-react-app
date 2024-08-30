import {
  Map,
  Placemark,
  Circle,
  GeolocationControl,
  ObjectManager,
} from "@pbe/react-yandex-maps";
export default function StreetMap() {
  return (
    <div>
      <Map
        defaultState={{
          center: [46.3497, 48.0408],
          zoom: 11,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        width={"1100px"}
        height={"600px"}
      >
        <Placemark defaultGeometry={[46.346382, 48.03078]} />
        <GeolocationControl options={{ float: "left" }} />
        <Circle
          geometry={[[46.3497, 48.0408], 9000]}
          options={{
            draggable: false,
            // fillColor: "#008000",
            fillOpacity: 0.1,
            strokeColor: "#008000",
            strokeOpacity: 0.8,
            strokeWidth: 5,
          }}
        />
      </Map>
    </div>
  );
}
