'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cards.init({
    name: DataTypes.STRING,
    energy: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'cards',
  });
  return cards;
};