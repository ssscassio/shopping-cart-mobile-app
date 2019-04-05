const wine = {
  id: 'a',
  description:
    'Análise Sensorial: \n Análise Visual: cor rosa com reflexos alaranjados. Análise Olfativa: Frutas vermelhas (morango) Análise Gustativa: seco, corpo médio, excelente acidez, taninos de boa qualidade, com retro-olfato de frutas.',
  price: 200,
  available: 20,
  onCart: 5,
  picture: 'https://winepedia.com.br/wp-content/uploads/2018/03/A%C3%A7%C3%BAcar-1180x517.jpg',
  title: 'Vinho Nederburg Rosé',
};
const products = {
  a: wine,
  b: { ...wine, id: 'b', onCart: Math.floor(Math.random() * 10) + 1 },
  c: { ...wine, id: 'c', onCart: Math.floor(Math.random() * 10) + 1 },
};

const initialState = {
  itens_count: 0,
  total_price: 0,
  items: products,
};

const cart = (state = initialState) => state;

export default cart;
