/* eslint-disable import/first */
require('babel-core/register');
require('babel-polyfill');
import axios from 'axios';

class APIClient {

  constructor(config) {

    this.config = config;

  }

  async get(uri, params) {
    const url = this.config.base_url + uri;
    const headers = APIClient.headers();

    try {

      const result = await axios.get(url, {params, headers});

      return APIClient.handleResponse(result);
    } catch (error) {

      return APIClient.handleResponse(error.response);
    }
  }

  static handleResponse(response) {

    const ret = {

      data: response && response.data || null,
      success: response && response.status >= 200 && response.status < 300 ||
        false,
    };

    if (!ret.success) {
      console.log(ret);
    }

    return ret;

  }

  static headers() {

    return {};

  }

}

export default APIClient;
