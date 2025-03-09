import ReusableTable from "@/components/ReusableTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Frown } from "lucide-react";

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto">
      <Card className="m-4">
        <CardContent>
          {cartItems.length > 0 && <ReusableTable data={cartItems} />}
          {cartItems.length === 0 && (
            <div
              className={
                "min-h-50 flex items-center justify-center flex-col gap-4"
              }
            >
              <h3 className="text-3xl text-bold">No Items available</h3>

              <Frown size={72} />

              <Button variant="outline" size="lg">
                <Link to="/">Go to Products</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CartPage;
