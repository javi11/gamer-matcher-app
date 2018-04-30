/* global fetch */
import { installRelayDevTools } from 'relay-devtools';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import Expo from 'expo';
import { USER_AUTH_TOKEN } from './constants';
import { API_URL } from './settings';

installRelayDevTools();

async function fetchQuery(operation, variables) {
  const token = await Expo.SecureStore.getItemAsync(USER_AUTH_TOKEN);
  return fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => response.json());
}

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store
});

export default env;
