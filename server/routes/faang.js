const express = require("express")
const router = express.Router()

const faang_controller = require("../controllers/faangController")

router.get("/faang", faang_controller.get_faang_list)

module.exports = router;