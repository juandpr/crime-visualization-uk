import crimes from './crimes';
import * as actions from '../actions'

it('should return initial state', () => {
  expect(crimes(undefined, {})).toEqual([]);
});

it('should handle RECEIVE_CRIMES', () => {
  const apiResponse = {
    data: {
      id: 'crimeId'
    }
  }
  const action = actions.receiveCrimes(apiResponse);
  expect(crimes(undefined, action)).toEqual({
    id: 'crimeId'
  });
});

it('should handle CLEAR_TABLE', () => {
  const action = actions.clearTable();
  expect(crimes(undefined, action)).toEqual([]);
});