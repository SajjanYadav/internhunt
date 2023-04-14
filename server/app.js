const express = require("express")
const cors = require("cors")
const compression = require("compression")

const faangRoute = require("./routes/faang")
const researchRoute = require("./routes/research")
const startupRoute = require("./routes/startup")
const allRoute = require("./routes/all")

const app = express()
app.use(cors())
app.use(compression());

app.use("/", faangRoute)
app.use("/", researchRoute)
app.use("/", startupRoute)
app.use("/", allRoute)

app.listen(8000, () => {
    console.log("listening on 8000")
})