import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "@/redux/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserThunk());
  }, []);

  return (
    <div className="px-6 py-4 shadow-md flex justify-between items-center bg-white dark:bg-gray-800 fixed w-full z-1">
      <NavLink
        to="/"
        className="text-md mr-2 md-text-xl font-bold dark:text-white"
      >
        🛒 Shopping Cart
      </NavLink>
      <div className="flex items-center gap-2 md:gap-4">
        <NavLink to="/cart">
          <Button
            variant="outline"
            className={"cursor-pointer px-2 py-1 text-xs md:text-md"}
          >
            <ShoppingCart />
            View Cart{" "}
            {cartItems.length > 0 && (
              <span className="bg-green-500 px-[8px] py-[4px] rounded-full text-white">
                {cartItems.length}
              </span>
            )}
          </Button>
        </NavLink>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="border p-2 rounded-full cursor-pointer">
              <User />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mx-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span className="text-bold">Name:</span>
              {user?.name?.firstname} {user?.name?.lastname}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="text-bold">Username:</span> {user?.username}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="text-bold">Email:</span>
              {user?.email}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
