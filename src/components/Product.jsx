import React, { useState } from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const [numberOfItems, setNumberOfItems] = useState("1");

  function handleSelectNumberOfItems(e) {
    setNumberOfItems(`${e}`);
  }

  function handleAddToCart(item) {
    dispatch(
      addToCart({
        ...item,
        quantity: Number(numberOfItems),
      })
    );
    toast("Item added to cart", {
      action: {
        label: "Close",
        onClick: () => {},
      },
    });
    setNumberOfItems("1");
  }

  return (
    <>
      <CardHeader>
        <CardTitle>{item?.title.slice(0, 30)}...</CardTitle>
        <CardDescription>{item?.description.slice(0, 100)}...</CardDescription>
      </CardHeader>
      <CardContent className={"h-[250px] flex items-center justify-center"}>
        <img
          src={item?.image}
          alt="Card Image"
          className="w-[200px] h-[200px]"
        />
      </CardContent>
      <hr className="w-full" />
      <CardFooter
        className={"flex flex-nowrap gap-2 items-center justify-between"}
      >
        <Select
          onValueChange={handleSelectNumberOfItems}
          defaultValue={"1"}
          value={numberOfItems}
        >
          <SelectTrigger className="w-[60px]">
            <SelectValue value={String(numberOfItems)} />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 10 }, (_, i) => i).map((ele, index) => {
              return (
                <SelectItem value={`${ele}`} key={`${index}`}>
                  {`${ele}`}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <Button onClick={() => handleAddToCart(item)}>
          <Plus /> Add to cart
        </Button>
      </CardFooter>
    </>
  );
};

export default Product;
