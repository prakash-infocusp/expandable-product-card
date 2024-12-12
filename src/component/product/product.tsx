import { useNavigate } from "react-router";
import { ProductData } from "../../api/product-api";
import "./product.css";

const Product = ({ id, title, description }: ProductData) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${id}`);

    if (!document.startViewTransition) {
      navigate(`/product/${id}`);
      return;
    }

    document.startViewTransition(() => {
      navigate(`/product/${id}`);
    });
  };

  return (
    <div className="product-card">
      <div className="info-box">
        <span className="product-title">{title}</span>
        <span className="product-description">{description}</span>
        <button
          className="product-button"
          onClick={() => {
            handleNavigate();
          }}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Product;
