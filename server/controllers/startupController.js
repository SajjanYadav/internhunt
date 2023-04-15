const startups = require("../database/startupdb").startupData;
const axios = require("axios");

exports.get_startups = (req, res, next) => {
  const filteredStartups = [];
  startups.map((startup) => {
    const title = startup.name;
    const desc = startup.description;
    const url = startup.hiring_jobs_url;
    const roles = startup.jobs.map((job) => job.title);
    const stipend = startup.jobs.map((job) => job.pretty_salary_range)[0];
    filteredStartups.push({
      title,
      desc,
      url,
      roles,
      stipend,
    });
  });
  axios.get("https://levels.fyi/js/internshipData.json").then((response) => {
    const filteredData = response.data.filter(
      (internship) =>
        internship.company !== "Google" ||
        internship.company !== "Amazon" ||
        internship.company !== "Facebook" ||
        internship.company !== "Netflix" ||
        internship.company !== "Microsoft"
    );
    startupList = [];
    filteredData.map((startup) => {
      const title = startup.company;
      const desc = startup.loc;
      const url = startup.link;
      const roles = startup.title;
      const stipend = startup.monthlySalary;
      startupList.push({
        title,
        desc,
        url,
        roles,
        stipend,
      });
    });
    const startupInternships = [...filteredStartups, ...startupList];
    res.json(startupInternships);
  });
};
