/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SliderCard_user$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Slider_allUsers$ref: FragmentReference;
export type Slider_allUsers = {|
  +edges: $ReadOnlyArray<{|
    +node: {|
      +$fragmentRefs: SliderCard_user$ref,
    |},
  |}>,
  +$refType: Slider_allUsers$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Slider_allUsers",
  "type": "UserConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "UserEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "SliderCard_user",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '70aee9c1c9a2371223732faa0bf25818';
module.exports = node;
