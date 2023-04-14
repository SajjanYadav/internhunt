const axios = require("axios")

exports.get_faang_list = (req, res, next) => {
    axios.get("https://levels.fyi/js/internshipData.json")
       .then(response => {
            const filteredFaang = []
            const filteredData = response.data.filter(internship => internship.company === "Google" || internship.company === "Amazon" || internship.company === "Facebook" || internship.company === "Netflix" || internship.company === "Microsoft" )
            filteredData.map(internship => {
                const title = internship.company
                const desc = internship.loc
                const url = internship.link
                const roles = internship.title
                const stipend = internship.monthlySalary
                filteredFaang.push({
                    title,
                    desc,
                    url,
                    roles,
                    stipend
                })
            })
            res.json(filteredFaang)
       })
       .catch(err => res.send("Error 404"))
}