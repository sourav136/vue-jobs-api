const express = require('express')
const router = express.Router()
const {
  getAllJobs,
  getJobById,
  createJob,
  deleteJob
} = require('../controllers/jobController')

router.get('/', getAllJobs)         // GET    /api/jobs
router.get('/:id', getJobById)     // GET    /api/jobs/64abc123...
router.post('/', createJob)        // POST   /api/jobs
router.delete('/:id', deleteJob)   // DELETE /api/jobs/64abc123...

module.exports = router