'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClimateData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      today: {
        type: Sequelize.STRING
      },
      weatherDay: {
        type: Sequelize.STRING
      },
      main_icon: {
        type: Sequelize.STRING
      },
      main_temp: {
        type: Sequelize.STRING
      },
      city_name: {
        type: Sequelize.STRING
      },
      humidity: {
        type: Sequelize.STRING
      },
      wind_speed: {
        type: Sequelize.STRING
      },
      five_icon_0: {
        type: Sequelize.STRING
      },
      five_week_day_0: {
        type: Sequelize.STRING
      },
      five_max_temp_0: {
        type: Sequelize.STRING
      },
      five_min_temp_0: {
        type: Sequelize.STRING
      },
      five_icon_1: {
        type: Sequelize.STRING
      },
      five_week_day_1: {
        type: Sequelize.STRING
      },
      five_max_temp_1: {
        type: Sequelize.STRING
      },
      five_min_temp_1: {
        type: Sequelize.STRING
      },
      five_icon_2: {
        type: Sequelize.STRING
      },
      five_week_day_2: {
        type: Sequelize.STRING
      },
      five_max_temp_2: {
        type: Sequelize.STRING
      },
      five_min_temp_2: {
        type: Sequelize.STRING
      },
      five_icon_3: {
        type: Sequelize.STRING
      },
      five_week_day_3: {
        type: Sequelize.STRING
      },
      five_max_temp_3: {
        type: Sequelize.STRING
      },
      five_min_temp_3: {
        type: Sequelize.STRING
      },
      five_icon_4: {
        type: Sequelize.STRING
      },
      five_week_day_4: {
        type: Sequelize.STRING
      },
      five_max_temp_4: {
        type: Sequelize.STRING
      },
      five_min_temp_4: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ClimateData');
  }
};