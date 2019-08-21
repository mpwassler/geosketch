import React, { useState, useRef, useLayoutEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { makeFeature, makeFeatureCollection, makeLineString, makeLayer } from '../model/geojson'

const geojsonLineLayer = compose(
    makeLayer,
    makeFeatureCollection,
    makeFeature,
    makeLineString
)

const addMapLayer = (map, geometry) => {
  map.addLayer(geojsonLineLayer(geometry))
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
      clearMap(map)
      addMapLayer(map, shapeDetails)
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
      console.log('MAP_POINT_CLICK ', clicks++)            
      dispatch({
        type: 'MAP_POINT_CLICK',
        point: {
          ...point,
          ...lngLat
        }
      })                  
    })
  }, []); 
  
  return (
    <div ref={mapEl} className="map"></div>
  )
}

const mapStateToProps = ({appState, shapeDetails}) => ({
   editing: appState.editing,
   shapeDetails
})


export default connect(mapStateToProps)(Map)