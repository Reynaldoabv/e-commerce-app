import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';


const GoogleMaps = () => {

  const [defaultProps] = useState({

    center: {
      lat: 53.350140,
      lng: -6.266155
    },
    zoom: 14,
    marker: { 
        lat: 53.350140, 
        lng: -6.266155
    }
    
  }, [])

    const { center, zoom, marker } = defaultProps;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
          marker={marker}
        >
        </GoogleMapReact>
      </div>
    );
}


export default GoogleMaps;