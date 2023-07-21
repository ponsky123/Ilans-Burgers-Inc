import React from 'react';
import './Locations.css'; // Assuming you have a CSS file for styling
import { Element } from 'react-scroll';

const Locations = () => {
  const locations = [
    { address: "123 Main St, New York, NY", lat: 40.7128, lon: -74.0060 },
    { address: "456 Park Ave, Los Angeles, CA", lat: 34.0522, lon: -118.2437 },
    { address: "789 Broadway, San Francisco, CA", lat: 37.7749, lon: -122.4194 },
    { address: "1011 Market St, Chicago, IL", lat: 41.8781, lon: -87.6298 },
  ];
  
  const mapboxToken = 'pk.eyJ1IjoiaXBvbnNreSIsImEiOiJjbGtjcWR4bHEwaG1lM2tzNHZsNmpjeW1oIn0.ncgMpcYoKQIyKpogqXejeA';

  return (
    <Element name="locations" className="element">
      <div className="locations-section">
        <h2>Our Locations</h2>
        {locations.map((location, index) => (
          <div key={index} className="location">
            <h3>{location.address}</h3>
            <img src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+000(${location.lon},${location.lat})/${location.lon},${location.lat},14/600x600?access_token=${mapboxToken}`} alt={location.address} />
          </div>
        ))}
      </div>
    </Element>
  );
}

export default Locations;
