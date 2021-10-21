const { Project } = require("../models");

// Think of this as views - handling rendering Handlebars
const router = require("express").Router();


router.get('/', async (req, res) => {
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
  


module.exports = router;
