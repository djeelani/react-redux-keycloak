import axios from 'axios';

export function addItem(text) {
  return { type: 'ADD_ITEM', text };
}

export function serviceCall() {
  return function(dispatch) {
    const token = sessionStorage.kctoken;
    axios({
      method: 'GET',
      url: `http://localhost:3001/users`,
      headers: {
        Authorization: 'bearer '+token,
      },
    })
      .then(function(response) {
        if (typeof response.data.error === 'undefined') {
          console.log('response.data ==>' + response.data);
        } else {
          const error = 'No User Found';
          console.log('error ==>' + error);
        }
      })
      .catch(function(error) {
        if (
          error !== undefined &&
          error.response !== undefined &&
          error.response.status === 400
        ) {
          const message = 'No User Found';
          console.log('message ==>' + message);
        } else {
          const message = 'Service is unavailable please try after some time';
          console.log('message ==>' + message);
        }
      });
  };
} 
