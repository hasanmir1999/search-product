import connectDB from '@/utils/connectDB'
import Product from '@/models/product'

export default async function handler(req , res) {

    // connect to db
    await connectDB()
    // connect to db

    //   http://localhost:3000/api/products?searchkey=searchKey
    
    if(req.method == 'GET'){
        const {searchkey} = req.query  // Get the value of a query string

        let searchedProducts = await Product.find()

        if(!searchkey){
            return res.json(searchedProducts)
        }

        searchedProducts = await Product.find({ title : { $regex: searchkey, $options: 'i' }}) // Search in product titles

        
        if(String(searchedProducts)){
            res.json(searchedProducts)
        }else{
            res.status(404).json({message: "محصول یافت نشد"})
        }
    
    }
    else{
        res.status(405).json({message: 'method not allowed'}) // Method invalidation
    }
    

    //   http://localhost:3000/api/products?searchkey=searchKey
}