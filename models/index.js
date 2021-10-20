const User = require("./User");
const Project = require("./Project");
const Works_Cited = require("./Works-Cited");
const Topic_Sentence = require("./Topic-Sentence");

User.hasMany(Project, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Project.belongsTo(User, {
    foreignKey: "user_id"
});

Project.hasMany(Topic_Sentence, {
    foreignKey: "project_id",
    onDelete: "CASCADE"
});

Topic_Sentence.belongsTo(Project, {
    foreignKey: "project_id"
});

Project.hasMany(Works_Cited, {
    foreignKey: "project_id",
    onDelete: "CASCADE"
});

Works_Cited.belongsTo(Project, {
    foreignKey: "project_id"
});

module.exports = { User, Project, Works_Cited, Topic_Sentence };