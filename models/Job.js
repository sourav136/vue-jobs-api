const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String, required: true }
})

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: {
    type: String,
    enum: ['Full-Time', 'Part-Time', 'Remote', 'Contract'],
    required: true
  },
  location: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: String, required: true },
  company: { type: companySchema, required: true }
})

module.exports = mongoose.model('Job', jobSchema)