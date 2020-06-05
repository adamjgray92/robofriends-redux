import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders MainPage', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false
  };

  const wrapper2 = shallow(<MainPage {...mockProps2} />);

  expect(wrapper.instance().filterRobots()).toEqual([]);
  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'John',
    email: 'john@gmail.com'
  }]);
});

it('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false
  };

  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual([]);
});

it('should return loading when isPending is set to true', () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: true
  };

  const wrapper4 = shallow(<MainPage {...mockProps4} />);
  expect(wrapper4.contains(<h1>Loading</h1>)).toEqual(true);
});