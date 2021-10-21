// Individual pages are for getting the specific data from the database
// Full CRUD operations
const router = require("express").Router();
const { User, Project, Topic_Sentence, Works_Cited } = require("../../models");

// TODO: GET all Topic Sentences
router.get("/", async (req, res) => {
  try {
    const tsData = await Topic_Sentence.findAll();
    res.status(200).json(tsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: GET Topic Sentence by ID
router.get("/:id", async (req, res) => {
  try {
    const tsData = await Topic_Sentence.findOne({
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
    if (!tsData) {
      res.status(404).json({ message: "No Topic Sentence with this ID" });
    }
    res.status(200).json(tsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: CREATE a new Topic Sentence

// TODO: UPDATE a Topic Sentence

// TODO: DELETE a Topic Sentence

module.exports = router;
