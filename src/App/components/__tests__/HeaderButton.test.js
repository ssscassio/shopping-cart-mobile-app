/**
 * Test Suite for HeaderButton Component
 *
 * @flow
 * @format
 * */
import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import { HeaderButton, Total, Badge } from '../HeaderButton';

describe('<HeaderButton />', () => {
  test('should render properly', () => {
    const wrapper = shallow(
      <HeaderButton iconName="shopping-cart" onPress={jest.fn()} badge={5} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should show Total', () => {
    const wrapper = shallow(
      <HeaderButton showTotal iconName="shopping-cart" onPress={jest.fn()} />
    );
    chaiExpect(wrapper.find(Total)).to.have.length(1);
  });

  test('should not show Total', () => {
    const wrapper = shallow(<HeaderButton iconName="shopping-cart" onPress={jest.fn()} />);
    chaiExpect(wrapper.find(Total)).to.have.length(0);
  });

  test('should not have Badge', () => {
    const wrapper = shallow(<HeaderButton iconName="shopping-cart" onPress={jest.fn()} />);
    chaiExpect(wrapper.find(Badge)).to.have.length(0);
  });

  test('should not have Badge - 2', () => {
    const wrapper = shallow(
      <HeaderButton iconName="shopping-cart" badge={0} onPress={jest.fn()} />
    );
    chaiExpect(wrapper.find(Badge)).to.have.length(0);
  });

  test('should have Badge', () => {
    const wrapper = shallow(
      <HeaderButton iconName="shopping-cart" badge={5} onPress={jest.fn()} />
    );
    chaiExpect(wrapper.find(Badge)).to.have.length(1);
  });
});
