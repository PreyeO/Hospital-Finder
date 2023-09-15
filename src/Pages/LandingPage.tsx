// import GoogleMapReact from "google-map-react";

// const LandingPage = () => {
//   const apiHasLoaded = () => {
//     console.log("Google Maps API has been loaded");
//   };

//   return (
//     <section className="col-8 h-lg">
//       <GoogleMapReact
//         bootstrapURLKeys={{
//           key: "AIzaSyACtjpbUDP_AGhqnP6Jai60cayPeUG2qWU",
//           libraries: ["places", "directions"],
//         }}
//         defaultZoom={15} // Supports DP, e.g 11.5
//         defaultCenter={{ lat: 1.3521, lng: 103.8198 }}
//         yesIWantToUseGoogleMapApiInternals={true}
//         onGoogleApiLoaded={apiHasLoaded}
//       ></GoogleMapReact>
//       <h1>hello world</h1>
//     </section>
//   );
// };

// export default LandingPage;

// src/App.tsx

import React from "react";
import MapContainer from "../Components/Layouts/GoogleMap/MapContainer";
import { LoadScript } from "@react-google-maps/api";

const LandingPage: React.FC = () => {
  const googleMapsApiKey = "AIzaSyACtjpbUDP_AGhqnP6Jai60cayPeUG2qWU";

  return (
    <LoadScript
      googleMapsApiKey={googleMapsApiKey}
      language="en"
      libraries={["places"]} // Add libraries parameter to load Google Maps Places library
    >
      <div>
        <h1>Care Finder</h1>
        <MapContainer />
      </div>
    </LoadScript>
  );
};

export default LandingPage;
