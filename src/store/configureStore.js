import { createStore } from 'redux';
import ukCrimeVisualizationApp from '../reducers';

const configureStore = () => {
  const store = createStore(
    ukCrimeVisualizationApp
  );

  return store;
}

export default configureStore;
