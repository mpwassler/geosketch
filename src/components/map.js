import React, { useState, useRef, useLayoutEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { makeFeature, makeFeatureCollection, makeLineString, makeLayer } from '../model/geojson'

const geojsonLineLayer = compose(
    makeFeatureCollection,
    makeFeature,
    makeLineString
)

const addMapLayer = (map, geometry) => {
  map.addLayer(makeLayer(geojsonLineLayer(geometry)))
}

const clearMap = (map) => {
  const id = 'line-animation'
  if(map.getLayer(id)) {
    map.removeLayer(id)
    map.removeSource(id)
  }
}

const Map = ({ 
  editing, 
  dispatch,
  shapeDetails  
}) => {
  const mapEl = useRef(null);
  const [map, setMap] = useState(null) 
  const [mapLoaded, setMapLoaded] = useState(false)    
  if(map) {
    if(mapLoaded) {
      const source = map.getSource('line-animation')
      if(source) {
        source.setData(geojsonLineLayer(shapeDetails))
      } else {
        addMapLayer(map, shapeDetails)

      }
    }
    
  }

  useLayoutEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWl0Y2hlbCIsImEiOiJjamJreXhjcHk0Z25kMzNtcmxqbzg4aXljIn0.7Nj9EE6iR3oWGe69UFwfNQ';
    const map = new mapboxgl.Map({
      container: mapEl.current,
      style: 'mapbox://styles/mapbox/streets-v9'
    })
    setMap(map)

    map.on('load', () => { setMapLoaded(true) })
    var clicks = 0
    map.on('click', ({lngLat, point, target}) => {
      console.log('MAP_POINT_CLICK ', editing())       
                
      if(editing()) {
        dispatch({
          type: 'MAP_POINT_CLICK',
          point: {
            ...point,
            ...lngLat
          }
        })                          
      }
    })
  }, []); 
  
  return (
    <div ref={mapEl} className="map"></div>
  )
}

const mapStateToProps = (store) => ({
   editing: () => {return store.getState().appState.editing},
   shapeDetails: store.shapeDetails

})


export default connect(mapStateToProps)(Map)