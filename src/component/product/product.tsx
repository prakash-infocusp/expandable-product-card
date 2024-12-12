import { ProductData } from "../../api/product-api";
import "./product.css";
import { useState } from "react";
import crossIcon from "../../assets/cross.svg";

const Product = ({ title, description, info }: ProductData) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`product-card ${isExpanded ? "expanded" : ""} `}>
      <img
        className={`cross-icon ${isExpanded ? "expanded" : ""}`}
        src={crossIcon}
        alt="Close"
        onClick={handleToggleExpand}
      />
      <div className={`image-box ${isExpanded ? "expanded" : ""}`}></div>
      <div className={`info-box ${isExpanded ? "expanded" : ""}`}>
        <span className={`product-title ${isExpanded ? "expanded" : ""}`}>
          {title}
        </span>
        <span className={`product-description ${isExpanded ? "expanded" : ""}`}>
          {description}
        </span>
        {isExpanded && (
          <div className="product-info">
            <p>{info}</p>
          </div>
        )}
        <button className="product-button" onClick={handleToggleExpand}>
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Product;
