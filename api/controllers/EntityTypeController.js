/**
 * EntityTypeController
 *
 * @description :: Server-side logic for managing entitytypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `EntityTypeController.index()`
   */
  index: function (req, res) {
    EntityType.find(function (err,indexTenant) {
    if (err) {
      return res.send(err,500);
    }
    res.json({index:indexTenant});
   });
  },


  /**
   * `EntityTypeController.new()`
   */
  new: function (req, res) {
    var id = req.param('type');
    Tenant.findOne(id,function(err,typenew){
      if (err) {
        return res.send(err,500);
      }
      console.log(typenew);
      res.view({type:typenew});
    });
  },


  /**
   * `EntityTypeController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    EntityType.findOne(id).populate('fields').exec(function (err,showTenant) {
    if (err) {
      return res.send(err,500);
    }
    res.json({show:showTenant});
   });
  },


  /**
   * `EntityTypeController.create()`
   */
  create: function (req, res) {
     var param = req.params.all();
    EntityType.create(param,function(err,createTenant){
      if (err) {
        return res.send(err,500);
      }
      res.json({create:createTenant});
    });
  },


  /**
   * `EntityTypeController.edit()`
   */
  edit: function (req, res) {
    var id = req.param('id');
    Tenant.findOne(id,function (err,showTenant) {
    if (err) {
      return res.send(err,500);
    }
    res.json({show:showTenant});
   });
  },


  /**
   * `EntityTypeController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `EntityTypeController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

