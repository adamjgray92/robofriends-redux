import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CounterButton from './CounterButton';

it('should render CounterButton component', () => {
  const mockColour = 'red';
  expect(shallow(<CounterButton color={mockColour} />)).toMatchSnapshot();
});

it('should increment by 1 when clicked', () => {
  const mockColour = 'red';
  const wrapper = shallow(<CounterButton color={mockColour} />);

  wrapper.find('[id="counter"]').simulate('click');

  expect(wrapper.state()).toEqual({ count: 1 });
})