const BASE_URL = 'https://shopping-cart-jusbrasil-server.herokuapp.com/';

const returnArrayPromise = response => {
  if (response.data) {
    return response.data;
  }
  return [];
};

function getAllItems() {
  const url = 'graphql';
  const query = `
    query {
      allItems{
        id
        title
        price
        picture
        description
        available
      }
    }
  `;
  return fetch(BASE_URL + url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })
    .then(res => res.json())
    .then(returnArrayPromise);
}

export default {
  getAllItems,
};
