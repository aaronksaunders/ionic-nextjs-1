export default function handler(req, res) {
  const { query, method, body } = req;
  console.log("body", body);
  console.log("method", method);
  console.log("query", query);
  console.log();
  const resp = {
    name: JSON.parse(body).name,
    loggedIn: new Date(),
  };
  res.status(200).json(resp);
}
