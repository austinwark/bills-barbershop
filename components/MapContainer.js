import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 42.642907,
         lng: -73.60840
        }}
      >
          <Marker name="Bill's Barber Shop" />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyADSna2_hZJLFY9Zxy5_40Gqcg8u-yF_wY'
})(MapContainer);