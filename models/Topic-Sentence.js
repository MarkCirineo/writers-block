const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Topic_Sentence extends Model {}

Topic_Sentence.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        sentence: {
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
        modelName: "topic_sentence"
    }
);

module.exports = Topic_Sentence;