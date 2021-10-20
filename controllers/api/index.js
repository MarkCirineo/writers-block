const router = require("express").Router();

const userRoutes = require("./user-routes");
const projectRoutes = require("./project-routes");
const tsRoutes = require("./ts-routes");
const wcRoutes = require("./wc-routes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/ts", tsRoutes);
router.use("/wc", wcRoutes);

module.exports = router;
