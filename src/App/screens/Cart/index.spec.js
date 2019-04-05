/** @format */

import React from 'react';
import { shallow } from 'enzyme';

import { Cart } from '.';

describe('<Cart />', () => {
  test('should render properly', () => {
    const wrapper = shallow(<Cart items={[]} itemsCount={0} total={200} />);
    expect(wrapper).toMatchSnapshot();
  });
});
