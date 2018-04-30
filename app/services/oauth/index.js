/* global fetch */
import { AsyncStorage } from 'react-native';
import settings from '../../config/settings';
import { SESSION_KEY } from '../../config/constants';

async function login(email, password) {
  const response = await fetch(`${settings.API_URL}/oauth2/token`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: email, password, grant_type: 'password' })
  });
  const body = await response.json();

  if (body.statusCode > 300) {
    throw body;
  }

  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(body));

  return body;
}

export { login };
