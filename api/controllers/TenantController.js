/**
 * TenantController
 *
 * @description :: Server-side logic for managing tenants
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TenantController.index()`
   */
  index: function (req, res) {
     Tenant.find(function (err,indexTenant) {
    if (err) {
      return res.send(err,500);
    }
    res.json({index:indexTenant});
   });
  },


  /**
   * `TenantController.new()`
   */
  new: function (req, res) {
     res.view();
  },


  /**
   * `TenantController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    Tenant.findOne(id).populate('entityTypes').populate('fields').exec(function (err,showTenant) {
    if (err) {
      return res.send(err,500);
    }
    res.json({show:showTenant});
   });
  },


  /**
   * `TenantController.create()`
   */
  create: function (req, res) {
    var param = req.params.all();
    Tenant.create(param,function(err,createTenant){
      if (err) {
        return res.send(err,500);
      }
      res.json({create:createTenant});
    });
  },


  /**
   * `TenantController.edit()`
   */
  edit: function (req, res) {
     var id = req.param('id');
    Tenant.findOne(id,function (err,showTenant) {
    if (err) {
      return res.send(err,500);
    }
    res.view({show:showTenant});
   });
  },


  /**
   * `TenantController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `TenantController.destroy()`
   */
  destroy: function (req, res) {
     var id = req.param('id');
    Tenant.destroy(id,function (err,showTenant) {
    if (err) {
      return res.send(err,500);
    }
    res.json({show:showTenant});
   });
  }
};

