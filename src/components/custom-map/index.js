import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// Custom map styling (example for dark mode)
const mapStyles = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#212121' }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#212121' }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#3d3d3d' }],
  },
];

function CustomMap() {
  const mapContainerStyle = {
    width: '100%',
    height: '500px',
  };

  const center = {
    lat: 51.512538, // Latitude for the location
    lng: -0.129511, // Longitude for the location
  };

  return (
    <LoadScript googleMapsApiKey="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0369407147477!2d-0.12951072327174065!3d51.51253827181455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cd07b8f52b%3A0x637fa6323b3a21fe!2s12%20Upper%20St%20Martin&#39;s%20Ln%2C%20London%20WC2H%209FB%2C%20UK!5e0!3m2!1sen!2sin!4v1727850936761!5m2!1sen!2sin">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        options={{ styles: mapStyles }} // Apply the custom styles here
      />
    </LoadScript>
  );
}

export default CustomMap;
