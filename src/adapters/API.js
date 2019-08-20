
const base_url = 'https://footy-royale-backend.herokuapp.com'
// const base_url = 'http://localhost:3000'

const allData = `${base_url}/alldata`
const predictionsUrl = `${base_url}/predictions`;
const matchesUrl = `${base_url}/matches`;
const leaguesUrl = `${base_url}/leagues`;
const usersUrl = `${base_url}/users`;
const loginUrl = `${base_url}/login`;
const validateUrl = `${base_url}/validate`;

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

  const clearToken = () => localStorage.removeItem('token')


export default {
  fetchAllData,
  postPrediction,
  submitScore,
  updateRound,
  userSignUp,
  userLogin,
  validateUser,
  clearToken
};
