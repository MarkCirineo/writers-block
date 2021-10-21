const { Project } = require("../models");
const withAuth = require('../utils/auth');

// Think of this as views - handling rendering Handlebars
const router = require("express").Router();

// router.get("/",withAuth, (req,res)=>{
//   res.render("homepage")
// })


router.get('/', withAuth, async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const projectData = await Project.findAll();
  
      // Serialize data so the template can read it
      const projects = projectData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('dashboard', { 
        projects
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



  router.get("/project", async(req,res)=>{
      res.render("project")

  })
  
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
