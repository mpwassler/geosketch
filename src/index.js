import React from 'react';
import { createStore, combineReducers } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import './index.css';

import appState from './reducers'
import shapes from './reducers/shapes'
import shapeDetails from './reducers/shapeDetails'

const reducer = combineReducers({
	appState,
	shapes,
	shapeDetails
})

const store = createStore(
   reducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )

// store.dispatch(getLocations())

ReactDOM.render( 
  	<Provider store={store}>
  		<App />
  	</Provider>, 
   	document.getElementById('root')
)