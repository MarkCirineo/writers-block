// Individual pages are for getting the specific data from the database
// Full CRUD operations
const router = require("express").Router();
const { route } = require(".");
const { User, Project, Topic_Sentence, Works_Cited } = require("../../models");

// GET a list of all projects
router.get("/", async (req, res) => {
  try {
    const projectData = await Project.findAll();
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a project by ID
router.get("/:id", async (req, res) => {
  try {
    const projectData = await Project.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Topic_Sentence,
          attributes: ["sentence", "project_id"],
        },
        {
          model: Works_Cited,
          attributes: ["content", "project_id"],
        },
      ],
    });
    if (!projectData) {
      res.status(404).json({ message: "No project with this ID" });
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new project
router.post("/", async (req, res) => {
  try {
    const projectData = await Project.create({
      title: req.body.title,
      thesis: req.body.thesis,
      user_id: req.session.user_id,
    });
    res.status(200).json({
      message: "Your project has been added to the database!",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a project
router.put("/:id", async (req, res) => {
  try {
    const projectData = await Project.update(req.body);
    if (!projectData) {
      res.status(404).json({ message: "No project with this ID" });
    }
    res.status(200).json({ message: "This project has been updated!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a project
router.delete("/:id", async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!projectData) {
      res.status(404).json({ message: "No project with this ID" });
    }
    res.status(200).json({ message: "This project has been deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
