import APIClient from './APIClient';

const config = require('./development');

let client = new APIClient(config);

class APICategory {
  constructor() {
    this.client = client;
  }
}

export default APICategory;
