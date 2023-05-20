import Image from "next/image";
import Link from "next/link";
import styles from './productCard.module.scss'
import productPic from "@/../public/images/elektrosamokat-tribe-zulu-black-1-500x500.jpg";
import CartButton from "../ui/buttons/cartButton/cartButton";
import { AiOutlineHeart } from "react-icons/ai";
import WishListButton from "../ui/wishListButton/wishListButton";
import SailButton from "../ui/buttons/sailButton.jsx/sailButton";


// props = {
// id,
//    category,
//    title,
//    price,
//    discount,
//    label,
//    addCart
//    addWishList
// }
let scooter = {
   id: 323,
   name: 'Razor a2',
}

const ProductCard = () => {
   return (
      <div className={styles.card}>
         <div className={styles.wrapper}>
            <Link href={`/product/${scooter.id}`}>
               <Image src={productPic} width={180} height={180} alt="Карточка товара" />
            </Link>
            <div>
               <Link href={`/product/${scooter.id}`}>
                  <h6>Электросамокат</h6>
                  <p>Electric Scooter 1S Черный</p>
               </Link>
               <span className={styles.label}>Новинка</span>
               <div className={styles.priceContainer}>
                  <span className={styles.price}>25 900 р. </span>
                  <span className={styles.discount}>34 900 р.</span>
               </div>
               <div className={styles.oneClick}>
                  <WishListButton />
               </div>
               <div className={styles.buttonsWrapper}>
                  <CartButton />
                  <SailButton value={'купить в 1 клик'} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductCard;