'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Card, Round}) {
      // define association here
      this.hasMany(Card, { foreignKey: 'deck_id' });
      this.hasMany(Round, { foreignKey: 'deck_id'});
    }
  }
  Deck.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};