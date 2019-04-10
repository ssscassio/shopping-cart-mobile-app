/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductItem_item$ref: FragmentReference;
export type ProductItem_item = {|
  +picture: ?string,
  +price: ?number,
  +title: ?string,
  +available: ?number,
  +description: ?string,
  +id: string,
  +$refType: ProductItem_item$ref,
|};
*/

const node /*: ReaderFragment*/ = {
  kind: 'Fragment',
  name: 'ProductItem_item',
  type: 'Item',
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: 'ScalarField',
      alias: null,
      name: 'picture',
      args: null,
      storageKey: null,
    },
    {
      kind: 'ScalarField',
      alias: null,
      name: 'price',
      args: null,
      storageKey: null,
    },
    {
      kind: 'ScalarField',
      alias: null,
      name: 'title',
      args: null,
      storageKey: null,
    },
    {
      kind: 'ScalarField',
      alias: null,
      name: 'available',
      args: null,
      storageKey: null,
    },
    {
      kind: 'ScalarField',
      alias: null,
      name: 'description',
      args: null,
      storageKey: null,
    },
    {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
  ],
};
// prettier-ignore
(node/*: any*/).hash = 'c5a9256903ca860703e9fc5fce8a2075';
module.exports = node;
