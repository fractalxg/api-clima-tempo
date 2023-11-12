'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClimateData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClimateData.init({
    today: DataTypes.STRING,
    weatherDay: DataTypes.STRING,
    main_icon: DataTypes.STRING,
    main_temp: DataTypes.STRING,
    city_name: DataTypes.STRING,
    humidity: DataTypes.STRING,
    wind_speed: DataTypes.STRING,
    five_icon_0: DataTypes.STRING,
    five_week_day_0: DataTypes.STRING,
    five_max_temp_0: DataTypes.STRING,
    five_min_temp_0: DataTypes.STRING,
    five_icon_1: DataTypes.STRING,
    five_week_day_1: DataTypes.STRING,
    five_max_temp_1: DataTypes.STRING,
    five_min_temp_1: DataTypes.STRING,
    five_icon_2: DataTypes.STRING,
    five_week_day_2: DataTypes.STRING,
    five_max_temp_2: DataTypes.STRING,
    five_min_temp_2: DataTypes.STRING,
    five_icon_3: DataTypes.STRING,
    five_week_day_3: DataTypes.STRING,
    five_max_temp_3: DataTypes.STRING,
    five_min_temp_3: DataTypes.STRING,
    five_icon_4: DataTypes.STRING,
    five_week_day_4: DataTypes.STRING,
    five_max_temp_4: DataTypes.STRING,
    five_min_temp_4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClimateData',
  });
  return ClimateData;
};