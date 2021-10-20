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
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
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