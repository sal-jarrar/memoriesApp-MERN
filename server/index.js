import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import postRoute from './routs/posts.js'

const PORT = process.env.PORT || 5000

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb' }))
app.use('/posts', postRoute)

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
})
