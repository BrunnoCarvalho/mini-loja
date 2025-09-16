import Button from "../Button/Button";
import styles from "./ProductCard.module.css";

function ProductCard({ product, onAddToCart}) {
    return (
        <div className={styles.productCard} tabIndex={0} aria-label={`Produto ${product.title}`}>
            <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.title} loading="lazy" />
                <span className={styles.productTag}>{product.tag}</span>
            </div>
            <div className={styles.productContent}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>R$ {product.price}</p>
                <p className={styles.productRating}>{"★".repeat(product.rating)}</p>
                <Button variant="solid" onClick={onAddToCart}>Adicionar</Button>
            </div>
        </div>
    );
}

export default ProductCard