import { useEffect, useState } from "react";
import { fetchProductData, ProductData } from "../../api/product-api";
import { useNavigate, useParams } from "react-router";
import crossIcon from "../../assets/cross.svg";
import "./product.detail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductData().then((data: ProductData[]) => {
      const productDetail = data.find(
        (product) => product.id.toString() === id
      );
      if (productDetail) {
        setProduct(productDetail);
      }
    });
  }, [id]);

  const handleClose = () => {
    navigate("/");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="modal">
      <div className="product-container">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${product.imageUrl})`,
          }}
        >
          <img
            className="cross-icon"
            src={crossIcon}
            alt="Close"
            onClick={handleClose}
          />
        </div>
        <div className="content-container">
          <span className="product-title">{product.title}</span>
          <span className="product-description">{product.description}</span>
          <span className="product-info">{product.info}</span>
          <button className="product-button">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
