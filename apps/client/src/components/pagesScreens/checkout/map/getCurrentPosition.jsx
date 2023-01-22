import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { UseGeoLocation } from "./useGeolocation";
import ButtonC from "../../../ButtonComponeent";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41], //[left/right, top/bottom]
  popupAnchor: [2, -40], //[left/right, top/bottom]
});

function GetCurrentPosition({ setLocalistion, setVisible }) {
  const [map, setMap] = useState(null);

  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const location = UseGeoLocation();

  const ZOOM_LEVEL = 11;

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      map.flyTo(location.coordinates, ZOOM_LEVEL);
    } else {
      alert(location.error.message);
    }
  };

  //    Reverce coordinate alt longt to adress city and country position
  const onReverseCoordinate = async () => {
    if (location.loaded && !location.error) {
      Geocode.setApiKey(process.env.REACT_APP_API_KEY_GEOCODE); // Pour L'API geocoding je doit prendre un abonnement
      Geocode.setLanguage("en");
      Geocode.setLocationType("ROOFTOP");
      Geocode.enableDebug();

      try {
        const res = await Geocode.fromLatLng(
          location.coordinates.lat,
          location.coordinates.lat
        );

        const address = res.results[0].formatted_address;
        let city, state, country;
        for (let i = 0; i < res.results[0].address_components.length; i++) {
          for (
            let j = 0;
            j < res.results[0].address_components[i].types.length;
            j++
          ) {
            switch (res.results[0].address_components[i].types[j]) {
              case "locality":
                city = res.results[0].address_components[i].long_name;
                break;
              case "administrative_area_level_1":
                state = res.results[0].address_components[i].long_name;
                break;
              case "country":
                country = res.results[0].address_components[i].long_name;
                break;
            }
          }
        }

        setLocalistion({
            city:city,
            state:state,
            country:country
        });
        console.log(res);

      } catch (error) {
        console.log(error);
      }

      setVisible(false);
    }
  };

  return (
    <Container>
      <MapContainer
        style={{ height: "500px" }}
        center={center}
        zoom={ZOOM_LEVEL}
        // whenCreated={map =>setMap({ map })}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"
        />

        {location.loaded && !location.error && (
          <Marker
            icon={markerIcon}
            position={[location.coordinates.lat, location.coordinates.lng]}
          ></Marker>
        )}
      </MapContainer>
      <div className="btn">
        <ButtonC type="button" onClick={showMyLocation}>
          Locate me
        </ButtonC>
        <ButtonC type="button" onClick={onReverseCoordinate}>
          save
        </ButtonC>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;

  @media only screen and (max-width: 768px) {
    padding: 0;
  }

  & .btn {
    color: #fff;
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    & > * {
      margin: 0 1rem;
    }
  }
`;

export default GetCurrentPosition;
