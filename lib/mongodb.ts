import mongoose from 'mongoose'

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL ?? '')
    console.log('Connected to DB')
  } catch (error) {
    console.log(error)
  }
}

export default connectToMongoDB
