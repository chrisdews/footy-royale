const allData = "http://localhost:3000/alldata";
const predictionsUrl = "http://localhost:3000/predictions";
const matchesUrl = "http://localhost:3000/matches";
const leaguesUrl = "http://localhost:3000/leagues"

const handleServerError = errors => {
  console.error('Error:', errors);
  throw errors;
};

const fetchAllData = () => {
  return fetch(allData)
    .then(resp => resp.json())
    .catch(handleServerError);
};

const postPrediction = (newPredictionObj) => fetch(predictionsUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ newPredictionObj })

  }
)
.then(resp => resp.json())
.catch(handleServerError)

const submitScore = (submitObj) => fetch(matchesUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ submitObj })

  }
)
.then(resp => resp.json())
.catch(handleServerError)

const updateRound = (leagueObj) => fetch(leaguesUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ leagueObj })
  }
)
.then(resp => resp.json())
.catch(handleServerError)




export default {
  fetchAllData,
  postPrediction,
  submitScore,
  updateRound
};
