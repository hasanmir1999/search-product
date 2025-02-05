import { model , models , Schema } from "mongoose";


const productSchema = new Schema(
    {
        title: {
            type: String,
        },

        price:{
            type: Number
        },

        description:{
            type: String
        },

        category:{
            type: String
        },

        image:{
            type: String
        },

        rate:{
            type: Number
        }
    }
)

const Product = models.Product || model("Product" , productSchema , "products")

export default Product