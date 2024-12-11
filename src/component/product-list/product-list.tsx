import { useEffect, useState } from "react";
import { fetchProductData, ProductData } from "../../api/product-api";
import "./product-list.css";
import Product from "../product/product";

const ProductList = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    fetchProductData().then((data: ProductData[]) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <Product {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
