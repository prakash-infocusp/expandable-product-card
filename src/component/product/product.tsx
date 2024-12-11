import { useNavigate } from "react-router";
import { ProductData } from "../../api/product-api";
import "./product.css";

const Product = ({ id, title, description, imageUrl }: ProductData) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="product-card"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
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
