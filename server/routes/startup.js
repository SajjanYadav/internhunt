const express = require("express")
const router = express.Router()

const startup_controller = require("../controllers/startupController")

router.get("/startups", startup_controller.get_startups)

module.exports = router;