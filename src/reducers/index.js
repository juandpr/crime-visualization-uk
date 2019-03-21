import { combineReducers } from 'redux';
import crimes from './crimes';
import crimeTypes from './crimeTypes';
import forces from './forces';
import months from './months';

const ukCrimeVisualizationApp = combineReducers({
	crimes,
	crimeTypes,
	forces,
	months
});

export default ukCrimeVisualizationApp;