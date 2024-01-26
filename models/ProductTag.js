const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true
      },
    
    product_id: {
      type:DataTypes.INTEGER
    /*missing bit here is reference to product model ID*/
      },
    tag_id: {
      type:DataTypes.INTEGER,
    /*missing bit here is reference to tag model ID*/
      }






  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
