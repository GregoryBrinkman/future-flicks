const fetch = require("node-fetch");
const apiKey = "77ce29e1";
const apiUrl = "http://www.omdbapi.com";

module.exports = async function search(ctx) {
  const { search } = ctx.request.query;
  if (!search) ctx.throw(400, 'search query required');

  const fetchString = `${apiUrl}/?s=${search}&apikey=${apiKey}`;

  return fetch(fetchString)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      ctx.body = { results };
      ctx.status = 200;
    });
};
