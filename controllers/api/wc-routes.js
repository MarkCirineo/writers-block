// Individual pages are for getting the specific data from the database
// Full CRUD operations
const router = require("express").Router();
const { User, Project, Topic_Sentence, Works_Cited } = require("../../models");

// GET all Works Cited
router.get("/", async (req, res) => {
  try {
    const wcData = await Works_Cited.findAll();
    res.status(200).json(wcData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Works Cited by ID
router.get("/:id", async (req, res) => {
  try {
    const wcData = await Works_Cited.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Project,
          attributes: ["title", "thesis"],
        },
      ],
    });
    if (!wcData) {
      res.status(404).json({ message: "No Work Cited with this ID" });
    }
    res.status(200).json(wcData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new Works Cited
router.post("/", async (req, res) => {
  try {
    const wcData = await Works_Cited.create({
      content: req.body.content,
    });
    res.status(200).json(wcData, {
      message: "Your Work Cited has been added to the project!",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a Works Cited
router.put("/:id", async (req, res) => {
  try {
    const wcData = await Works_Cited.update(req.body);
    if (!wcData) {
      res.status(404).json({ message: "No Work Cited with this ID" });
    }
    res.status(200).json({ message: "This Work Cited has been updated!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a Works Cited
router.delete("/:id", async (req, res) => {
  try {
    const wcData = await Works_Cited.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!wcData) {
      res.status(404).json({ message: "No Work Cited with this ID" });
    }
    res.status(200).json({ message: "This Work Cited has been deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
