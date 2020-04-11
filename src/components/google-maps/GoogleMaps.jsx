import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 53.350140,
      lng: -6.266155
    },
    zoom: 14,
    marker: { 
        lat: 53.350140, 
        lng: -6.266155
    }
  };

  render() {

    const { center, zoom, marker } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB7TrPWDn7O_URpoL7pX-tzg9uv_6kdlYI' }}
          defaultCenter={center}
          defaultZoom={zoom}
          marker={marker}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps;