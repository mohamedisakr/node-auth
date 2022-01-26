const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({message: 'done'})
})

const port = 3000
app.listen(port, () => console.log(`http://localhost:${port}`))
