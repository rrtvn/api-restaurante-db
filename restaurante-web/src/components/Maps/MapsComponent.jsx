import React, { useCallback, useState } from 'react';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { API_KEY } from '../../config';

import './MapsComponent.css'

const containerStyle = {
  width: '100%',
  height: '100%'
  
};

const center = {
  lat: 0,
  lng: -180,
};
const position = {
  lat: -33.031963,
  lng: -71.215367,
};

export const  MapsComponent = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    })

    // const [map, setMap] = useState(null)

    const onLoad = useCallback(function callBack(map){
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    // const onUnmount = useCallback(function callBack(map) {
    //     setMap(null)
    // }, [])


  return isLoaded ? (
    <GoogleMap 
        mapContainerStyle={containerStyle}
        center={position}
        zoom={14}
        
    >
    {/* <Marker  onLoad={onLoad} position={position}></Marker> */}
    <></>
    </GoogleMap>
  ) : <></>    
}
