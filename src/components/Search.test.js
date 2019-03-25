import Search from './Search';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should validate form as VALID', () => {
  const props = {
    crimes: [],
    crimeTypes: [],
    forces: [],
    months: [],
    receiveCrimeTypes:jest.fn(),
    receiveForces:jest.fn(),
    receiveMonths:jest.fn(),
    requestCrimes:jest.fn(),
    receiveCrimes:jest.fn(),
    receiveCrimesError: jest.fn(),
    isFetching: false
  }
  const component = shallow(<Search {...props} />);
  expect(component.instance().isFormValid('test', 'test', 'test')).toBe(true);
});

it('should validate form as INVALID', () => {
  const props = {
    crimes: [],
    crimeTypes: [],
    forces: [],
    months: [],
    receiveCrimeTypes:jest.fn(),
    receiveForces:jest.fn(),
    receiveMonths:jest.fn(),
    requestCrimes:jest.fn(),
    receiveCrimes:jest.fn(),
    receiveCrimesError: jest.fn(),
    isFetching: false
  }
  const component = shallow(<Search {...props} />);
  expect( component.instance().isFormValid('test', 'test', '')).toBe(false);
});
