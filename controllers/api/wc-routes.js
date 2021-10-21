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

// TODO: CREATE a new Works Cited

// TODO: UPDATE a Works Cited

// TODO: DELETE a Works Cited

module.exports = router;
