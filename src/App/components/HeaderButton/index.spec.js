/** @format */

import React from 'react';
import { shallow } from 'enzyme';

import { HeaderButton } from '.';

describe('<HeaderButton />', () => {
  test('should render properly', () => {
    const wrapper = shallow(<HeaderButton iconName="shopping-cart" onPress={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
