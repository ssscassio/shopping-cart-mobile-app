/**
 * @flow
 * @relayHash f81cadbc53f8a2d4f3bd5055997d5683
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +allItems: ?$ReadOnlyArray<?{|
    +id: string
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/

/*
query AppQuery {
  allItems(first: 10) {
    id
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
    {
      kind: 'LinkedField',
      alias: null,
      name: 'allItems',
      storageKey: 'allItems(first:10)',
      args: [
        {
          kind: 'Literal',
          name: 'first',
          value: 10,
          type: 'Int',
        },
      ],
      concreteType: 'Item',
      plural: true,
      selections: [
        {
          kind: 'ScalarField',
          alias: null,
          name: 'id',
          args: null,
          storageKey: null,
        },
      ],
    },
  ];
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'AppQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: [],
      selections: v0 /*: any*/,
    },
    operation: {
      kind: 'Operation',
      name: 'AppQuery',
      argumentDefinitions: [],
      selections: v0 /*: any*/,
    },
    params: {
      operationKind: 'query',
      name: 'AppQuery',
      id: null,
      text: 'query AppQuery {\n  allItems(first: 10) {\n    id\n  }\n}\n',
      metadata: {},
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '476ae010a80f1fe4021f5cbe2e1b5b77';
module.exports = node;
