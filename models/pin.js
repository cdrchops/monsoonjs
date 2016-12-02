'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pin = sequelize.define('Pin', {
    GpioPin: DataTypes.INTEGER,
    PinActive: DataTypes.BOOLEAN,
    PinRunnin: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Pin;
};