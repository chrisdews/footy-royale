const allData = "http://localhost:3000/alldata";

const handleServerError = errors => {
  console.error(errors);
  throw errors;
};

const fetchAllData = () => {
  return fetch(allData)
    .then(resp => resp.json())
    .catch(handleServerError);
};

export default {
  fetchAllData
};
