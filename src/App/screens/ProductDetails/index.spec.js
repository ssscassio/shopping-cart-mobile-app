/** @format */

import React from 'react';
import { shallow } from 'enzyme';

import ProductDetails from '.';

const wine = {
  id: 'a',
  description:
    'Análise Sensorial: \n Análise Visual: cor rosa com reflexos alaranjados. Análise Olfativa: Frutas vermelhas (morango) Análise Gustativa: seco, corpo médio, excelente acidez, taninos de boa qualidade, com retro-olfato de frutas.',
  value: 200,
  qtd: 20,
  picture: 'https://cdn.awsli.com.br/600x700/365/365010/produto/13341816/fe9a59131b.jpg',
  title: 'Vinho Nederburg Rosé',
};

const navigation = {
  navigate: jest.fn(),
  getParam: jest.fn(() => wine),
};

describe('<ProductDetails />', () => {
  test('should render properly', () => {
    const wrapper = shallow(<ProductDetails navigation={navigation} />);
    expect(wrapper).toMatchSnapshot();
  });
});
