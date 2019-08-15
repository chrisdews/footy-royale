const allData = "http://localhost:3000/alldata";
const predictionsUrl = "http://localhost:3000/predictions";
const matchesUrl = "http://localhost:3000/matches";
const leaguesUrl = "http://localhost:3000/leagues";
const usersUrl = "http://localhost:3000/users";
const loginUrl = "http://localhost:3000/login";
const validateUrl = "http://localhost:3000/validate";

const handleServerError = errors => {
  console.error("Error:", errors);
  throw errors;
};

const fetchAllData = () => {
  return fetch(allData, {
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(resp => resp.json())
    .catch(handleServerError);
};

const postPrediction = newPredictionObj =>
  fetch(predictionsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify({ newPredictionObj })
  })
    .then(resp => resp.json())
    .catch(handleServerError);

const submitScore = submitObj =>
  fetch(`${matchesUrl}/${submitObj.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify({ submitObj })
  })
    .then(resp => resp.json())
    .catch(handleServerError);

const updateRound = leagueObj =>
  fetch(`${leaguesUrl}/${leagueObj.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify({ leagueObj })
  })
    .then(resp => resp.json())
    .catch(handleServerError);


const userLogin = newuserObj =>
fetch(loginUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ user: newuserObj })
})
  .then(resp => resp.json())
  .then(data => {
    localStorage.token = data.token;
    return data.user
  })
  .catch(handleServerError);

const userSignUp = newuserObj =>
  fetch(usersUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: newuserObj })
  })
    .then(resp => resp.json())
    .then(data => {
      localStorage.token = data.token;
      return data.user
    })
    .catch(handleServerError);

    const validateUser = () => {
      if (!localStorage.getItem('token')) return Promise.resolve({ error: 'no token' })
  
      return fetch(validateUrl, {
          headers: {
            Authorization: localStorage.token
          }
      }).then(resp => resp.json())
          .then(data => {
              localStorage.setItem('token', data.token)
              return data.user
          })
          .catch(handleServerError)
  }

export default {
  fetchAllData,
  postPrediction,
  submitScore,
  updateRound,
  userSignUp,
  userLogin,
  validateUser
};
