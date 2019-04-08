const BASE_URL = 'https://shopping-cart-jusbrasil-server.herokuapp.com/';

const returnArrayPromise = response => {
  if (response.data) {
    return response.data;
  }
  return [];
};

/**
 * Fetch all items on database at once
 *
 * @returns Promise from fetch
 */
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

/**
 * Fetch next 10 items on database after offset value
 *
 * @param {number} offset
 * @returns Promise from fetch
 */
function getItemsWithOffset(offset: number) {
  const url = 'graphql';
  const query = `
    query {
      allItems(first:10, offset:${offset}){
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
  getItemsWithOffset,
};
