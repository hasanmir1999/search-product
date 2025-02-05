import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ProductCard from '@/components/productCard/ProductCard';
import Product from '@/models/product';
import connectDB from '@/utils/connectDB';
import { FaSpinner } from "react-icons/fa";

export default function Home({products}) {

  const [inputData , setInputData] = useState('') // save input data
  const [searchedProducts , setSearchedProducts] = useState(products) // searchedProducts
  const [loading , setLoading] = useState(false)
  

  const searchHandler = async ()=>{
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:3000/api/products/?searchkey=${inputData}`) // search in products
      const data = await res.json()
  
      if(res.status == 404){
        setLoading(false)
        setSearchedProducts([])
        return toast.error('محصولی یافت نشد')  // If no product was found
      }
      setLoading(false)
      setSearchedProducts(data)
    } catch (error) {
      setLoading(false)
      toast.error('خطای سمت سرور')
    }
  }

  return (
    <>
        <Toaster
          position="top-left"
          reverseOrder={false}
        />

      {/* search */}

      <div className={styles.container}>
        <div className={styles.searchForm}>
          <h1>
            نام محصول را وارد کنید
          </h1>
          <input type="text" placeholder='یه چیزی تایپ کن...' onChange={ e => setInputData(e.target.value)} value={inputData} />
          <button onClick={searchHandler}>{ loading ? <FaSpinner className={styles.loading} /> : ''}جستجو</button>
        </div>
      </div>

      {/* search */}

      {/* map show products */}

        <div className={styles.productCardContainer}>
            {
              searchedProducts.length > 0 ? searchedProducts.map(searchedProduct => (
                <ProductCard key={searchedProduct._id} {...searchedProduct}/>
              )) : <p className={styles.noProduct}>محصولی وجود ندارد</p>
            }
        </div>

      {/* map show products */}

    </>
  );
}

export async function getServerSideProps() {
    await connectDB()
    const products = await Product.find().lean()

    return{
      props: {products: JSON.parse(JSON.stringify(products))}
    }
}