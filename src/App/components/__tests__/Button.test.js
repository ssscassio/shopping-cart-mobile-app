/**
 * @flow
 * @format
 * */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import Button from '../Button';

describe('<Button />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Button withIcon text="Buy now!" onPress={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one TouchableOpacity component', () => {
    const wrapper = shallow(<Button text="Buy now!" onPress={() => {}} />);
    chaiExpect(wrapper.find(TouchableOpacity)).to.have.length(1);
  });

  it('should have one Text component', () => {
    const wrapper = shallow(<Button text="Buy now!" onPress={() => {}} />);
    chaiExpect(wrapper.find(Text)).to.have.length(1);
  });

  it('should not have one Icon component', () => {
    const wrapper = shallow(<Button text="Buy now!" onPress={() => {}} />);
    chaiExpect(wrapper.find(Icon)).to.have.length(0);
  });

  it('should have one Icon component', () => {
    const wrapper = shallow(<Button withIcon text="Buy now!" onPress={() => {}} />);
    chaiExpect(wrapper.find(Icon)).to.have.length(1);
  });
});
