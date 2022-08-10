'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Deck}) {
      // define association here
      this.belongsTo(Deck, { foreignKey: 'deck_id'})
    }
  }
  Card.init({
    question: DataTypes.TEXT,
    answer: DataTypes.BOOLEAN,
    deck_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,

  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};