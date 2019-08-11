const allData = "http://localhost:3000/alldata";
const predictionsUrl = "http://localhost:3000/predictions";

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





export default {
  fetchAllData,
  postPrediction
};
