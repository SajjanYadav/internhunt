require('dotenv').config();

const researchEndpoint = `${process.env.API_ENDPOINT}/research`;
const faangEndpoint = `${process.env.API_ENDPOINT}/faang`;
const startupsEndpoint = `${process.env.API_ENDPOINT}/startups`;

exports.get_all_internships = async (req, res, next) => {
  try {

    const researchResponse = await fetch(researchEndpoint);
    const researchData = await researchResponse.json();

    const faangResponse = await fetch(faangEndpoint);
    const faangData = await faangResponse.json();

    const startupsResponse = await fetch(startupsEndpoint);
    const startupsData = await startupsResponse.json();

    const allInternships = [...researchData, ...faangData, ...startupsData]
    
    res.json(allInternships);
  } catch(err) {
      console.log(err)
  }
}