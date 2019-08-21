export function makeLayer(geometry) {
	return {
    'id': 'line-animation',
    'type': 'line',
    'source': {
      'type': 'geojson',
      'data': geometry
    },
    'layout': {
	    'line-cap': 'round',
	    'line-join': 'round'
    },
    'paint': {
	    'line-color': '#ed6498',
	    'line-width': 5,
	    'line-opacity': .8
    }
  }
}

export function makeFeatureCollection(features) {	
	return {
		"type": "FeatureCollection",
		features: [features]
	}
}

export function makeFeature(geometry, properties) {
	return {
		"type": "Feature",
		"geometry": {
		  ...geometry
		},
		"properties": {
		  ...properties
		}
	}
}

export function makeLineString(shape) {
	return {
	      "type": "LineString",
	      "coordinates": shape.coordinates
	}
}