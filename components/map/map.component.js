import getCenter from 'geolib/es/getCenter';
import { useState } from 'react';
import ReactMapGL,{Marker, Popup} from 'react-map-gl';

const Map = ({searchResults}) => {
    const [selected, setSelected] = useState({})
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates)
    const [viewport, setViewport] = useState({
        width:"100%",
        height:"100%",
        zoom:11,
        latitude: center.latitude,
        longitude: center.longitude,
    })

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/johnlawliet/ckuf72h3o8x8517o46tnc86bo"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport => setViewport(nextViewport))}
        >
        {
            searchResults?.map(res => (
                <div key={res.long}>
                    <Marker
                        longitude={res.long}
                        latitude={res.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p 
                        onClick={() => setSelected(res)} 
                        className="text-2xl cursor-pointer animate-bounce"
                        aria-label="push-pin"
                        role="img"
                        >📌</p>
                    </Marker>

                    {
                        selected.long === res.long && (
                            <Popup
                                onClose={() => setSelected({})}
                                closeOnClick={true}
                                latitude={res.lat}
                                longitude={res.long}
                            >
                            {res.title}
                            </Popup>
                        )
                    }
                </div>
            ))
        }
        </ReactMapGL>
    )
}

export default Map
