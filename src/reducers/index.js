import { combineReducers } from 'redux';
import crimes from './crimes';
import crimeTypes from './crimeTypes';
import forces from './forces';
import months from './months';
import isFetching from './isFetching';

const ukCrimeVisualizationApp = combineReducers({
	crimes,
	crimeTypes,
	forces,
	months,
	isFetching
});

export default ukCrimeVisualizationApp;