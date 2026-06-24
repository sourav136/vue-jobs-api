const Job = require('../models/Job')

// GET /api/jobs — return all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
    res.status(200).json(jobs)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// GET /api/jobs/:id — return one job
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
    if (!job) return res.status(404).json({ message: 'Job not found' })
    res.status(200).json(job)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// POST /api/jobs — create a job
const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body)
    res.status(201).json(job)
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message })
  }
}

// DELETE /api/jobs/:id — delete a job
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id)
    if (!job) return res.status(404).json({ message: 'Job not found' })
    res.status(200).json({ message: 'Job deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

module.exports = { getAllJobs, getJobById, createJob, deleteJob }