import Image from "next/image";
import styles from "../../styles/Product.module.css";

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Product;
