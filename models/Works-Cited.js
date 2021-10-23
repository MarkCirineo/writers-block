const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Works_Cited extends Model {}

Works_Cited.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author_first: {
      type: DataTypes.TEXT,
    },
    author_last: {
      type: DataTypes.TEXT,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ver_ed: {
      type: DataTypes.TEXT,
    },
    publisher: {
      type: DataTypes.TEXT,
    },
    publication_date: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "project",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "works_cited",
  }
);

module.exports = Works_Cited;
