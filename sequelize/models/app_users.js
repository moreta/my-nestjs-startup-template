/* eslint-disable */

"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class app_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  app_users.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      acceptTermsAndConditions: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "app_users",
    },
  )
  return app_users
}
