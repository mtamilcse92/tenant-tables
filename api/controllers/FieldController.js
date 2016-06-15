/**
 * FieldController
 *
 * @description :: Server-side logic for managing fields
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `FieldController.index()`
   */
  index: function (req, res) {
    Field.find(function (err,indexTenant) {
    if (err) {
      return res.send(err,500);
    }
    res.json({index:indexTenant});
   });
  },


  /**
   * `FieldController.new()`
   */
  new: function (req, res) {
    var id = req.param('field');
    Tenant.findOne(id,function(err,fieldnew){
      if (err) {
        return res.send(err,500);
      }
      console.log(fieldnew);
      res.view({field:fieldnew});
    });
  },


  /**
   * `FieldController.show()`
   */
  show: function (req, res) {
   var id = req.param('id');
    Field.findOne(id).populate('entityType').exec(function (err,showTenant) {
    if (err) {
      return res.send(err,500);
    }
    res.json({show:showTenant});
   });
  },


  /**
   * `FieldController.create()`
   */
  create: function (req, res) {
     var param = req.params.all();
    Field.create(param,function(err,createTenant){
      if (err) {
        return res.send(err,500);
      }
      res.json({create:createTenant});
    });
  },


  /**
   * `FieldController.edit()`
   */
  edit: function (req, res) {
     var id = req.param('id');
    Field.findOne(id,function (err,showTenant) {
    if (err) {
      return res.send(err,500);
    }
    res.json({show:showTenant});
   });
  },


  /**
   * `FieldController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `FieldController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

