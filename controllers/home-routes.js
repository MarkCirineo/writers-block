const { Project, User, Topic_Sentence, Works_Cited } = require("../models");
const withAuth = require('../utils/auth');

// Think of this as views - handling rendering Handlebars
const router = require("express").Router();

// TODO: Figure out how to pull out user ID to match with projects from Database
router.get('/', withAuth, async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const userData = await User.findByPk(req.session.user_id, {
        include:[{
          model: Project,
        }]
      });
  
      // Serialize data so the template can read it
      
      let users = userData.get({plain: true});
      let projects = users.projects
      // Pass serialized data and session flag into template
      res.render('dashboard', { 
        projects,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



  router.get("/project", async(req,res)=>{
      res.render("project")

  })


  router.get("/project/:id", async(req,res)=>{
    const projectData = await Project.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Topic_Sentence,
          attributes: ["id","sentence", "project_id"],
        },
        {
          model: Works_Cited,
          attributes: ["id","content", "project_id"],
        },
      ],
    });

    if (!projectData) {
      res.status(404).json({ message: "No project with this ID" });
    }
    const topic = projectData.dataValues.topic_sentences;
    const topics = topic.map((topic) => topic.get({ plain: true }));
    const work = projectData.dataValues.works_citeds;
    const works = work.map((work) => work.get({ plain: true }));
    res.render("project", {projectData, topics, works});
  
  } 

  )
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });
  

module.exports = router;
