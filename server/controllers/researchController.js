const axios = require('axios')
const cheerio = require("cheerio")

exports.get_research_list = (req, res, next) => {
    const link = "https://github.com/himahuja/Research-Internships-for-Undergraduates#this-is-a-non-exhaustive-list-of-opportunities-available-to-undergraduate-students-many-of-these-positions-are-only-focussed-towards-indian-students"

const filteredData = []

axios(link)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const internships = []

        $("li", html).each(function() {
            const title = $(this).text()
            const desc = ""
            const url = $(this).find("a").attr("href")
            const roles = "Research Intern"
            const stipend = "Data Unavailable"
            internships.push({
                title,
                desc,
                url,
                roles,
                stipend
            })
        })

        for (let i = 0; i < internships.length; i++) {
            if (!internships[i].title.includes('\n') && internships[i].title !== "Terms" && internships[i].title !== "Privacy" && internships[i].title !== "Security" && internships[i].title !== "Status" && internships[i].title !== "Docs" && internships[i].title !== "Contact GitHub" && internships[i].title !== "Pricing" && internships[i].title !== "API" && internships[i].title !== "Training" && internships[i].title !== "Blog" && internships[i].title !== "About" && internships[i].title !== "Explore" && internships[i].title !== "For" && internships[i].desc !== "By Solution" && internships[i].title !== "Case Studies" && internships[i].title !== "Repositories" && internships[i].url !== undefined) {
              filteredData.push(internships[i]);
            }
        }
        res.json(filteredData)
    }).catch(err => console.log(err))
}