/**
 * @flow
 */
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

/**
 * Defines a function that fetches the result of an operation
 * and returns its results as a Promise
 *
 * @param {*} operation
 * @param {*} variables
 * @returns
 */
function fetchQuery(operation, variables) {
  return fetch('https://shopping-cart-jusbrasil-server.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json());
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

const store = new Store(new RecordSource());

export { store };
const environment = new Environment({
  network,
  store,
});

export default environment;
