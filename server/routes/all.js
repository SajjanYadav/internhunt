const express = require("express")
const router = express.Router()

const all_controller = require("../controllers/allController")

router.get("/", all_controller.get_all_internships)

module.exports = router;