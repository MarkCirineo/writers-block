// Individual pages are for getting the specific data from the database
// Full CRUD operations
const router = require("express").Router();
const { route } = require(".");
const { User, Project, Topic_Sentence, Works_Cited } = require("../../models");

// GET all Topic Sentences
router.get("/", async (req, res) => {
  try {
    const tsData = await Topic_Sentence.findAll();
    res.status(200).json(tsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Topic Sentence by ID
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

// CREATE a new Topic Sentence
router.post("/", async (req, res) => {
  try {
    const tsData = await Topic_Sentence.create({
      sentence: req.body.sentence,
    });
    res.status(200).json(tsData, {
      message: "Your Topic Sentence has been added to the project!",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a Topic Sentence
router.put("/:id", async (req, res) => {
  try {
    const tsData = await Topic_Sentence.update(req.body);
    if (!tsData) {
      res.status(404).json({ message: "No Topic Sentence with this ID" });
    }
    res.status(200).json({ message: "This Topic Sentence has been updated!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//  DELETE a Topic Sentence
router.delete("/:id", async (req, res) => {
  try {
    const tsData = await Topic_Sentence.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tsData) {
      res.status(404).json({ message: "No Topic Sentence with this ID" });
    }
    res.status(200).json({ message: "This Topic Sentence has been deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
