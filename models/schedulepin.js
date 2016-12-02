'use strict';
module.exports = function(sequelize, DataTypes) {
  var SchedulePin = sequelize.define('SchedulePin', {
    Pin: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        SchedulePin.belongsTo(models.Schedule);
      }
    }
  });
  return SchedulePin;
};