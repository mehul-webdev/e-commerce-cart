import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "../redux/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const { items, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);

  return (
    <div className="container mx-auto p-6 page-content">
      <ProductList items={items} />
    </div>
  );
};

export default HomePage;
