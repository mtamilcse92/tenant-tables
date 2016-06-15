/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  'get /tenants':{
    controller : 'tenant',
    action : 'index'
  },

  'get /tenants/new':{
    controller : 'tenant',
    action : 'new'
  },

  'get /tenants/:id':{
    controller : 'tenant',
    action : 'show'
  },

  'post /tenants':{
    controller : 'tenant',
    action : 'create'
  },

  'get /tenants/:id/edit':{
    controller : 'tenant',
    action : 'edit'
  },

  'post /tenants/:id':{
    controller : 'tenant',
    action : 'update'
  },

  'get /tenants/:id/delete':{
    controller : 'tenant',
    action : 'destroy'
  },
// 
 'get /types':{
    controller : 'entityType',
    action : 'index'
  },

  'get /types/new':{
    controller : 'entityType',
    action : 'new'
  },

  'get /types/:id':{
    controller : 'entityType',
    action : 'show'
  },

  'post /types':{
    controller : 'entityType',
    action : 'create'
  },

  'get /types/:id/edit':{
    controller : 'entityType',
    action : 'edit'
  },

  'post /types/:id':{
    controller : 'entityType',
    action : 'update'
  },

  'get /types/:id/delete':{
    controller : 'entityType',
    action : 'destroy'
  },
  // 
   'get /fields':{
    controller : 'field',
    action : 'index'
  },

  'get /fields/new':{
    controller : 'field',
    action : 'new'
  },

  'get /fields/:id':{
    controller : 'field',
    action : 'show'
  },

  'post /fields':{
    controller : 'field',
    action : 'create'
  },

  'get /fields/:id/edit':{
    controller : 'field',
    action : 'edit'
  },

  'post /fields/:id':{
    controller : 'field',
    action : 'update'
  },

  'get /fields/:id/delete':{
    controller : 'field',
    action : 'destroy'
  },
};
