

function makeFeatureCollection(features) {
	return {
		"type": "FeatureCollection",
		features
	}
}

function makeFeature(geometry, properties) {
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
