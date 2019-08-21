const initState = {
	loading: false,	
	editing: false
}

export default (state = initState, action) => {
	switch(action.type) {
	case 'CREATE_SHAPE':
		return {
			...state,
			editing: true
		}
	
	default:
		return state

	}

}