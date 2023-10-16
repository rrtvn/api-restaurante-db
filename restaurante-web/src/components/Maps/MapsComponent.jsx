import { useCallback, useState } from 'react';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { API_KEY } from '../../config';

import './MapsComponent.css'

const containerStyle = {
  width: '100%',
  height: '100%'
  
};

const center = {
  lat: -32.9409205,
  lng: -71.4153275,
};

export const  MapsComponent = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callBack(map){
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callBack(map) {
        setMap(null)
    }, [])


  return isLoaded ? (
    <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
        
    >
    <Marker label={"Reserva Añañucas"} onLoad={setMap} onUnmount={onUnmount} position={center}></Marker>
    <></>
    </GoogleMap>
  ) : <></>    
}
