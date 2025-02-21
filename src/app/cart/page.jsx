"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateCartMinus, updateCartPlus } from '../change-password/Store/CartSlice';

export default function CartPage() {
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cartItems = useSelector((cartData) => cartData.cart.cartItems);

  // Calculate Total Amount
  const [totalAmount, setTotalAmount] = useState(0);

  console.log("sdasdasdd", cartItems);
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, [cartItems]);

  return (
    <>
      {/* Breadcrumb Navigation */}
      <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
        <ul className="flex items-center">
          <li className="cursor-pointer">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </Link>
          </li>
          <li>
            <span className="mx-2 text-gray-500">&gt;</span>
          </li>
          <li className="text-gray-500">Cart ({cartItems.length})</li>
        </ul>
      </nav>

      {/* Cart Items Section */}
      <section className="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10">

        {/* Cart Table for Desktop */}
        <section className="hidden md:grid grid-cols-1 gap-3 px-5 pb-10">
          <table className="table-fixed w-full">
            <thead className="h-16 bg-neutral-100">
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="h-[100px] border-b">
                  <td className="align-middle">
                    <div className="flex">
                      <img
                        className="w-[90px]"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="ml-3 flex flex-col justify-center">
                        <p className="text-xl font-bold">{item.name}</p>
                        <p className="text-sm text-gray-400">Size: XL</p>
                      </div>
                    </div>
                  </td>
                  <td className="mx-auto text-center">${item.price}</td>
                  <td className="align-middle">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => dispatch(updateCartMinus(item.id))}
                        className="flex h-8 w-8 items-center justify-center border duration-100 hover:bg-neutral-100"
                      >
                        &minus;
                      </button>
                      <div className="flex h-8 w-8 items-center justify-center border-t border-b">
                        {item.quantity}
                      </div>
                      <button
                        onClick={() => dispatch(updateCartPlus(item.id))}
                        className="flex h-8 w-8 items-center justify-center border duration-100 hover:bg-neutral-100"
                      >
                        &#43;
                      </button>
                    </div>
                  </td>
                  <td className="mx-auto text-center">${item.quantity * item.price}</td>
                  <td className="align-middle">
                    <svg
                      onClick={() => dispatch(removeItem(item.id))}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="m-0 h-5 w-5 cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Order Summary Section */}
        <section className="mx-auto w-full px-4 md:max-w-[400px]">
          <div className="border py-5 px-4 shadow-md">
            <p className="font-bold">ORDER SUMMARY</p>

            <div className="flex justify-between border-b py-5">
              <p>Subtotal</p>
              <p>${totalAmount}</p>
            </div>

            <div className="flex justify-between border-b py-5">
              <p>Shipping</p>
              <p>Free</p>
            </div>

            <div className="flex justify-between py-5 font-bold">
              <p>Total</p>
              <p>${totalAmount}</p>
            </div>

            <Link href="/checkout-address">
              <button className="w-full bg-violet-900 px-5 py-2 text-white">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}
