
const endpoint = 'http://localhost:3000'
const fixturesUrl = `${endpoint}/test_fixtures`
  
  const handleServerError = errors => {
    console.error(errors)
    throw errors
  }

const fetchFixtures = () => {
    return fetch(fixturesUrl)
    .then(resp => resp.json())
    .catch(handleServerError)
}

export default {
    fetchFixtures
}