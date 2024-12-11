import { useEffect, useState } from "react";
import { fetchProductData, ProductData } from "../../api/product-api";
import "./product-list.css";
import Product from "../product/product";
import Skeleton from "../skeleton/skeleton";

const ProductList = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProductData().then((data: ProductData[]) => {
        setProducts(data);
        setIsLoading(false);
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="product-list">
      {isLoading ? (
        <div className="skeleton-container">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-item">
            <Product {...product} />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
