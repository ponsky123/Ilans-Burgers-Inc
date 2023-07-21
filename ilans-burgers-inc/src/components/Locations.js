import React from 'react';
import './Locations.css'; // Assuming you have a CSS file for styling
import { Element } from 'react-scroll';

const Locations = () => {
  const locations = [
    { address: "123 Main St, New York, NY", map: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { address: "456 Park Ave, Los Angeles, CA", map: "/images/map-losangeles.jpg" },
    { address: "789 Broadway, San Francisco, CA", map: "/images/map-sanfrancisco.jpg" },
    { address: "1011 Market St, Chicago, IL", map: "/images/map-chicago.jpg" },
  ];

  return (
    <Element name="locations" className="element">
      <div className="locations-section">
        <h2>Our Locations</h2>
        {locations.map((location, index) => (
          <div key={index} className="location">
            <h3>{location.address}</h3>
            <img src={location.map} alt={location.address} />
          </div>
        ))}
      </div>
    </Element>
  );
}

export default Locations;
