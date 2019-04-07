/**
 * Test Suite for CartItem Component
 *
 * @flow
 * @format
 * */
import React from 'react';
import { shallow } from 'enzyme';

import { CartItem } from '../CartItem';

const item = {
  id: 'a',
  description:
    'Análise Sensorial: \n Análise Visual: cor rosa com reflexos alaranjados. Análise Olfativa: Frutas vermelhas (morango) Análise Gustativa: seco, corpo médio, excelente acidez, taninos de boa qualidade, com retro-olfato de frutas.',
  price: 200,
  onCart: 1,
  available: 20,
  picture: 'https://cdn.awsli.com.br/600x700/365/365010/produto/13341816/fe9a59131b.jpg',
  title: 'Vinho Nederburg Rosé',
};

describe('<CartItem />', () => {
  test('should render properly', () => {
    const wrapper = shallow(
      <CartItem item={item} addOne={() => {}} removeOne={() => {}} removeItem={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
