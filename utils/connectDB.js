import mongoose from 'mongoose'
export default async function connectDB() {
    try{
        if(mongoose.connections[0].readystate) return
        await mongoose.connect('mongodb://localhost:27017/simple-products')
        console.log('connect to db successfully')
    }catch(err){
        console.log(err)
    }
}
