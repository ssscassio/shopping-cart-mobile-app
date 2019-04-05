const wine = {
  id: 'a',
  description:
    'Análise Sensorial: \n Análise Visual: cor rosa com reflexos alaranjados. Análise Olfativa: Frutas vermelhas (morango) Análise Gustativa: seco, corpo médio, excelente acidez, taninos de boa qualidade, com retro-olfato de frutas.',
  value: 200,
  available: 20,
  onCart: 5,
  picture: 'https://cdn.awsli.com.br/600x700/365/365010/produto/13341816/fe9a59131b.jpg',
  title: 'Vinho Nederburg Rosé',
};
const products = {
  a: wine,
  b: { ...wine, id: 'b', onCart: Math.floor(Math.random() * 10) + 1 },
  c: { ...wine, id: 'c', onCart: Math.floor(Math.random() * 10) + 1 },
};

const initialState = {
  itens_count: 0,
  total_value: 0,
  items: products,
};

const cart = (state = initialState) => state;

export default cart;
