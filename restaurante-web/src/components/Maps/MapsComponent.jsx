import { useCallback, useState } from 'react';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { API_KEY } from '../../config';

const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: -32.9409205,
  lng: -71.4153275
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
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
    >
    <Marker label={"Reserva Añañucas"} onLoad={setMap} position={center}></Marker>
    <></>
    </GoogleMap>
  ) : <></>    
}
