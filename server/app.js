require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()

// db connection & server start
mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('db connected')

    const PORT = process.env.PORT || 5000

    app.listen(PORT)
    console.log(`server started on port ${PORT}`)
    console.log(`go to http://localhost:${PORT}/ for development`)
  })

// middleware
app.use(express.json())

// routes
app.use('/api/quizzes', require('./routes/quizRoutes'))
