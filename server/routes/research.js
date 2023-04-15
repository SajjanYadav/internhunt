const express = require("express")
const router = express.Router()

const research_controller = require("../controllers/researchController")

router.get("/research", research_controller.get_research_list)

module.exports = router;
