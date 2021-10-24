const router = require("express").Router();

const userRoutes = require("./user-routes");
const projectRoutes = require("./project-routes");
const tsRoutes = require("./ts-routes");
const wcRoutes = require("./wc-routes");
const researchRoutes = require("./research")

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/ts", tsRoutes);
router.use("/wc", wcRoutes);
router.use("/research", researchRoutes)

module.exports = router;
