const { Project, User } = require("../models");
const withAuth = require('../utils/auth');

// Think of this as views - handling rendering Handlebars
const router = require("express").Router();

// router.get("/",withAuth, (req,res)=>{
//   res.render("homepage")
// })

// TODO: Figure out how to pull out user ID to match with projects from Database
router.get('/', withAuth, async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const UserData = await User.findByPk(req.session.user_id, {
        include:[{
          model: Project,
        }]
      });
  
      // Serialize data so the template can read it
      
      let projects = UserData.get({plain: true});
      projects = projects.projects

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
