'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hero.init({
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    realName: {
      field: 'real_name',
      type: DataTypes.STRING,
      allowNull: false
    },
    originDescription: {
      field: 'origin_description',
      type: DataTypes.STRING
    },
    superpower: {
      type: DataTypes.STRING,
      allowNull: false
    },
    catchPhrase: {
      field: 'catch_phrase',
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    gender: {
      type: DataTypes.STRING
    },
    birthday: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    }
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes',
    underscored: true
  });
  return Hero;
};