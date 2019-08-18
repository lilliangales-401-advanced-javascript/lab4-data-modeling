'use strict';

const DataModel = require('../file');


class Person extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true, type: 'object'},
      name: { required: true , type: 'string'},
    };
  }
}

module.exports = Person;