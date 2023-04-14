const researchEndpoint = 'http://localhost:8000/research';
const faangEndpoint = 'http://localhost:8000/faang';
const startupsEndpoint = 'http://localhost:8000/startups';

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