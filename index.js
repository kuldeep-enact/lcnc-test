const express = require('express')
const app = express()
const port = 9900 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World from test app !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
