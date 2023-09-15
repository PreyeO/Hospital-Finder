import React, { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  getLatLng,
  AutocompletePrediction,
} from "react-places-autocomplete";

const MapContainer: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 1.3521,
    lng: 103.8198,
  });
  const [hospitals, setHospitals] = useState<
    google.maps.places.PlaceResult[] | null
  >(null);

  const handleSelect = async (address: string) => {
    setSelectedAddress(address);
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setSelectedLocation(latLng);
      fetchHospitals(latLng.lat, latLng.lng);
    } catch (error) {
      console.error("Error fetching location", error);
    }
  };

  const fetchHospitals = (lat: number, lng: number) => {
    const request: google.maps.places.PlaceSearchRequest = {
      location: new window.google.maps.LatLng(lat, lng),
      radius: 2000,
      keyword: "hospital",
    };

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        if (results) {
          const hospitalResults = results.filter((result) => {
            return result.types?.includes("hospital");
          });
          console.log(results);
          setHospitals(hospitalResults);
        } else {
          setHospitals([]);
        }
      } else {
        setHospitals([]);
      }
    });
  };

  const handleAutocomplete = async (suggestion: AutocompletePrediction) => {
    try {
      const results = await geocodeByAddress(suggestion.description);
      const latLng = await getLatLng(results[0]);
      setSelectedAddress(suggestion.description);
      setSelectedLocation(latLng);
      fetchHospitals(latLng.lat, latLng.lng);
    } catch (error) {
      console.error("Error fetching location", error);
    }
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <PlacesAutocomplete
        value={selectedAddress}
        onChange={setSelectedAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Type a location...",
                autoComplete: "off",
              })}
            />
            <div>
              {loading && <div>Loading...</div>}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };

                return (
                  <div
                    {...getSuggestionItemProps(suggestion)} // Cast suggestion as any
                    style={style}
                    onClick={() => handleAutocomplete(suggestion as any)} // Cast suggestion as any
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <GoogleMap
        mapContainerStyle={{ height: "700px", width: "100%" }}
        center={selectedLocation}
        zoom={15}
        options={{ gestureHandling: "greedy" }}
        onLoad={(map) => {
          map.setOptions({
            minZoom: 10,
          });
        }}
      >
        <Marker position={selectedLocation} />

        {hospitals &&
          hospitals.map(
            (hospital) =>
              hospital.geometry?.location && (
                <Marker
                  key={hospital.place_id}
                  position={{
                    lat: hospital.geometry.location.lat(),
                    lng: hospital.geometry.location.lng(),
                  }}
                  icon={{
                    url: "https://maps.google.com/mapfiles/ms/icons/hospitals.png",
                  }}
                />
              )
          )}
      </GoogleMap>
    </div>
  );
};

export default MapContainer;
