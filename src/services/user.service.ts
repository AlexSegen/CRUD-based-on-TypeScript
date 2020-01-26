import UIkit from 'uikit';
import config from './api.config';

const RESOURCE_NAME = '/users';

const get = async () => {
  try {
    
    const response = await fetch(config.server.api + RESOURCE_NAME);

    if (response.ok) {
      const data = await response.json();
      return data
    }
    // Raise an exception to reject the promise and trigger the outer .catch() handler.
    // By default, an error response status (4xx, 5xx) does NOT cause the promise to reject!
    throw Error(response.statusText);

  } catch (e) {
    UIkit.notification(`Error: ${e.message}`);
    console.log(e.message);
  }

}

const post = async (payload) => {
  try {
    const response = await fetch(config.server.api + RESOURCE_NAME, {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data
    }

    throw Error(response.statusText);

  } catch (e) {
    UIkit.notification(`Error: ${e.message}`);
    console.log(e.message);
  }
}

const put = async (payload) => {
  try {
    const response = await fetch(`${config.server.api}${ RESOURCE_NAME}/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data
    }

    throw Error(response.statusText);

  } catch (e) {
    UIkit.notification(`Error: ${e.message}`);
    console.log(e.message);
  }
}

const remove = async (identifier) => {
  try {
    const response = await fetch(`${config.server.api}${ RESOURCE_NAME}/${identifier}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      const data = await response.json();
      return data
    }

    throw Error(response.statusText);
  } catch (e) {
    UIkit.notification(`Error: ${e.message}`);
    console.log(e.message);
  }

}
export default {
  get,
  post,
  remove,
  put
};