// Individual pages are for getting the specific data from the database
// Full CRUD operations
const router = require("express").Router();
const { User, Project, Topic_Sentence, Works_Cited } = require("../../models");

// BASIC CRUD
// GET all users, GET one user, CREATE user, UPDATE user, DELETE user

// GET a list of all users, excluding their passwords
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      include: {
        model: Project,
        attributes: ["title", "thesis"],
      },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a user by ID, including all their projects
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Project,
          attributes: ["title", "thesis", "user_id"],
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
        },
      ],
    });
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(userData);
    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE a user
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json({ message: "User has been udpated!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a user
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json({ message: "User has been deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// User-specific functionality
// Login, Logout, and Create New User

// LOGIN Route
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// LOGOUT Route
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
