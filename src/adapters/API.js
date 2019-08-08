const endpoint = "http://localhost:3000";
const fixturesUrl = `${endpoint}/test_fixtures`;
const teamsUrl = `${endpoint}/teams`;

// const urls = [
//   fixturesUrl
// ]

const handleServerError = errors => {
  console.error(errors);
  throw errors;
};

const fetchFixtures = () => {
  return fetch(fixturesUrl)
    .then(resp => resp.json())
    .catch(handleServerError);
};

const fetchTeams = () => {
  return fetch(teamsUrl)
    .then(resp => resp.json())
    .catch(handleServerError);
};

// const allData = () => Promise.all(urls.map(url =>
//   fetch(url)
//     .then(resp => resp.json())
//     .catch(handleServerError)
//   )
//   )

export default {
  // allData
  fetchFixtures,
  fetchTeams
};
