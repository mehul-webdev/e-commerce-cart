import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteItemFromCartList,
  removeFromCart,
} from "@/redux/cartSlice";

const ReusableTable = ({ data }) => {
  const dispatch = useDispatch();
  const totalPrice = data
    .reduce((acc, curr) => {
      return curr.quantity * curr.price + acc;
    }, 0)
    .toFixed(2);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px] min-w-[200px] max-w-[300px] break-words whitespace-normal">
            Title
          </TableHead>
          <TableHead className="w-[100px] min-w-[100px] md-w-[200px] max-w-[200px] md-max-w-[300px] break-words whitespace-normal">
            Description
          </TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Total Price</TableHead>
          <TableHead className={"text-right"}>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className={"h-[40vh]"}>
        {data.map((ele) => (
          <TableRow key={ele.id}>
            <TableCell className="w-[200px] min-w-[200px] max-w-[300px] break-words whitespace-normal">
              {ele.title}
            </TableCell>
            <TableCell className="w-[500px] min-w-[500px] max-w-[500px] break-words whitespace-normal">
              {ele.description}
            </TableCell>
            <TableCell>{ele.category}</TableCell>
            <TableCell>${ele.price}</TableCell>

            <TableCell>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-10 h-10"
                  onClick={() => dispatch(removeFromCart(ele.id))}
                >
                  -
                </Button>

                <Input
                  type="text"
                  value={ele.quantity}
                  className="w-16 text-center"
                  disabled={true}
                />

                <Button
                  variant="outline"
                  size="xs"
                  className="w-10 h-10"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        ...ele,
                        quantity: 1,
                      })
                    )
                  }
                >
                  +
                </Button>
              </div>
            </TableCell>
            <TableCell>${(ele.quantity * ele.price).toFixed(2)}</TableCell>
            <TableCell className={"text-right"}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => dispatch(deleteItemFromCartList(ele.id))}
              >
                <Trash2 className="text-red-900" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={6}>Total</TableCell>
          <TableCell className="text-right">${totalPrice}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ReusableTable;
