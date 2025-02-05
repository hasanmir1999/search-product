import styles from './ProductCard.module.css'
import { FaStar } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

export default function ProductCard({title , price , description , category , image , rate}){
    return(
        <>
            <div className={styles.card}>
                    <div className={styles.info}>
                        <LuInfo />
                        <div className={styles.desc}>
                            {description}
                        </div>
                    </div>

                <div className={styles.imgContainer}>
                    <img src={image} alt="product-img" />
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.titlePrice}>
                        <h5>{title}</h5>
                        <p>{price}تومان</p>
                    </div>
                    <div className={styles.rate}>
                        {rate}<FaStar />
                    </div>
                </div>
            </div>
        </>
    )
}