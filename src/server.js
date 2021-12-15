const server = require('express')();

server.all("/", (req, res) => {
  res.send("Bot is running!")
})
server.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});
const PORT = process.env.PORT || 3000;
function keepAlive() {
  server.listen(PORT, () => {
    console.log("Server is ready.")
  })
}

module.exports = keepAlive