/**
 * @flow
 * @relayHash 7a9414d67d8098c4d1c3455b04b1c617
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Slider_allUsers$ref = any;
export type HomeQueryVariables = {| |};
export type HomeQueryResponse = {|
  +userConnection: ?{|
    +$fragmentRefs: Slider_allUsers$ref,
  |},
|};
*/


/*
query HomeQuery {
  userConnection {
    ...Slider_allUsers
  }
}

fragment Slider_allUsers on UserConnection {
  edges {
    node {
      ...SliderCard_user
      id
    }
  }
}

fragment SliderCard_user on User {
  id
  name
  email
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomeQuery",
  "id": null,
  "text": "query HomeQuery {\n  userConnection {\n    ...Slider_allUsers\n  }\n}\n\nfragment Slider_allUsers on UserConnection {\n  edges {\n    node {\n      ...SliderCard_user\n      id\n    }\n  }\n}\n\nfragment SliderCard_user on User {\n  id\n  name\n  email\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userConnection",
        "storageKey": null,
        "args": null,
        "concreteType": "UserConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Slider_allUsers",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userConnection",
        "storageKey": null,
        "args": null,
        "concreteType": "UserConnection",
        "plural": false,
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "email",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
(node/*: any*/).hash = '5271bdf22895eb9021e729c40fd8e0e3';
module.exports = node;
