'use strict';
module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define('Schedule', {
    StartDate: DataTypes.DATE,
    Duration: DataTypes.INTEGER,
    Repeat: DataTypes.BOOLEAN,
    RepeatForever: DataTypes.BOOLEAN,
    RepeatTimes: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Suspended: DataTypes.BOOLEAN,
    Running: DataTypes.BOOLEAN,
    Complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Schedule.hasMany(models.SchedulePin, {
          onDelete: 'cascade' 
        });
      }
    }
  });
  return Schedule;
};