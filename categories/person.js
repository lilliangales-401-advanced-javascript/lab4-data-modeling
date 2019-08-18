'use strict';

const DataModel = require('../file');

class Categories extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true, type: 'object'},
      name: { required: true , type: 'string'},
    };
  }
}

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true, type: 'object'},
      name: { required: true , type: 'string'},
    };
  }
}

module.exports = Categories;