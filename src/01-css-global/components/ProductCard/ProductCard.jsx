import Button from "../Button/Button";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart}) {
    return (
        <div className="product-card" tabIndex={0} aria-label={`Produto ${product.title}`}>
            <div className="image-wrapper">
                <img src={product.image} alt={product.title} loading="lazy" />
                <span className="product-tag">{product.tag}</span>
            </div>
            <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">R$ {product.price}</p>
                <p className="product-rating">{"★".repeat(product.rating)}</p>
                <Button variant="solid" onClick={onAddToCart}>Adicionar</Button>
            </div>
        </div>
    );
}

export default ProductCard