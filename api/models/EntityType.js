/**
 * EntityType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    entityType : { type: 'string' },

    tenant : { model: 'tenant'},

    type : {model : 'tenant'},

     // fields : { collection : 'field',via : 'field'}

  }
};

