const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const jobRoutes = require('./routes/jobRoutes')

const app = express()

// CORS — allow Vue dev server and your future deployed Vue URL
const allowedOrigins = [
  'http://localhost:5173',     
  'http://localhost:5174',     
  'https://your-vue-app.vercel.app'   // update this after deploying Vue
]

app.use(cors({ origin: allowedOrigins }))
app.use(express.json())   // lets Express read JSON from request body

// Mount routes
app.use('/api/jobs', jobRoutes)

// Health check route
app.get('/', (req, res) => {
  res.send('Job Board API is running')
})

// Connect to MongoDB, then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    })
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message)
    process.exit(1)
  })