const initState = {
	loading: true,
	shape_type: null,
	guid: null,
	geoJSON: null,
	coordinates: []
}

export default (state = initState, action) => {
	switch(action.type) {
	case 'CREATE_SHAPE':
		return {
			...state,
			shape_type: action.shape_type
		}
	case 'MAP_POINT_CLICK':
		const { lat, lng, x, y } = action.point
		
		return {
			...state,
			coordinates: [...state.coordinates, [lng, lat]] 
			// geoJSON: 
		}				

		
	default:
		return state

	}

}