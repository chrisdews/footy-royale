const base_url = process.env.REACT_APP_DEV
  ? "http://localhost:3000"
  : "https://footy-royale-backend.herokuapp.com";

const allData = `${base_url}/alldata`;
const predictionsUrl = `${base_url}/predictions`;
const matchesUrl = `${base_url}/matches`;
const leaguesUrl = `${base_url}/leagues`;
const usersUrl = `${base_url}/users`;
const loginUrl = `${base_url}/login`;
const validateUrl = `${base_url}/validate`;

const jsonify = res => {
  if (res.ok) {
    return res.json();
  } else {
    try {
      return res.json().then(data => {
        throw data.errors;
      });
    } catch (e) {
      throw ["Oops something went wrong"];
    }
  }
};

const handleServerError = errors => {
  if (errors.toString() == "SyntaxError: Unexpected end of JSON input") {
    throw ["Oops something went wrong"];
  }
  throw errors;
};

const fetchFPL = () => {
  return fetch("https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/fixtures/?event=1", {
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(jsonify)
    .catch(handleServerError);
};

const fetchAllData = () => {
  return fetch(allData, {
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(jsonify)
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
    .then(jsonify)
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
    .then(jsonify)
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
    .then(jsonify)
    .catch(handleServerError);

const handleUser = data => {
  if (data.token) {
    localStorage.token = data.token;
  }
  return data.user;
};

const userLogin = newuserObj =>
  fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: newuserObj })
  })
    .then(jsonify)
    .then(handleUser)
    .catch(handleServerError);

const userSignUp = newuserObj =>
  fetch(usersUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: newuserObj })
  })
    .then(jsonify)
    .then(handleUser)
    .catch(handleServerError);

const validateUser = () => {
  if (
    !localStorage.getItem("token") ||
    localStorage.getItem("token") == "undefined"
  )
    return Promise.reject();

  return fetch(validateUrl, {
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(jsonify)
    .then(handleUser)
    .catch(handleServerError);
};

const clearToken = () => localStorage.removeItem("token");

export default {
  fetchAllData,
  postPrediction,
  submitScore,
  updateRound,
  userSignUp,
  userLogin,
  validateUser,
  clearToken,
  fetchFPL
};
