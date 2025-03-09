import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "../redux/productSlice";
import Product from "./Product";

const ProductList = ({ items }) => {
  return (
    <>
      <div
        className={
          "flex flex-wrap flex-column gap-4 item-center justify-center"
        }
      >
        {items.length > 0 && (
          <>
            {items.map((item) => {
              return (
                <Card className={"w-xs"} key={item.id}>
                  <Product item={item} />
                </Card>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default ProductList;
