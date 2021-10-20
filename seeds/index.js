const sequelize = require("../config/connection");
const { User, Project, Topic_Sentence, Works_Cited  } = require("../models");

const userData = require("./userData.json");
const projectData = require("./projectData.json");
const topicSentenceData = require("./topicSentenceData.json");
const worksCitedData = require("./worksCitedData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Project.bulkCreate(projectData, {
        individualHooks: true,
        returning: true,
    });

    await Topic_Sentence.bulkCreate(topicSentenceData, {
        individualHooks: true,
        returning: true,
    });

    await Works_Cited.bulkCreate(worksCitedData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();