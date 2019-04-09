/**
 * @flow
 * @relayHash 09bff200529c923213426768b863efb3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductItem_item$ref = any;
export type ProductListContainerQueryVariables = {||};
export type ProductListContainerQueryResponse = {|
  +allItems: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: ProductItem_item$ref,
  |}>
|};
export type ProductListContainerQuery = {|
  variables: ProductListContainerQueryVariables,
  response: ProductListContainerQueryResponse,
|};
*/


/*
query ProductListContainerQuery {
  allItems(first: 10) {
    id
    ...ProductItem_item
  }
}

fragment ProductItem_item on Item {
  picture
  price
  title
  available
  description
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProductListContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allItems",
        "storageKey": "allItems(first:10)",
        "args": (v0/*: any*/),
        "concreteType": "Item",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "ProductItem_item",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductListContainerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allItems",
        "storageKey": "allItems(first:10)",
        "args": (v0/*: any*/),
        "concreteType": "Item",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "picture",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "available",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProductListContainerQuery",
    "id": null,
    "text": "query ProductListContainerQuery {\n  allItems(first: 10) {\n    id\n    ...ProductItem_item\n  }\n}\n\nfragment ProductItem_item on Item {\n  picture\n  price\n  title\n  available\n  description\n  id\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c466ee74d0b2dc15ca26872fec874a12';
module.exports = node;
