'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Deck}) {
      this.belongsTo(User, { foreignKey: 'user_id'});
      this.belongsTo(Deck, { foreignKey: 'deck_id'});
      // define association here
    }
  }
  Round.init({
    user_id: DataTypes.INTEGER,
    deck_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};