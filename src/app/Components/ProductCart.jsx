"use client";

import Link from 'next/link';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css';

// Destructure props properly
export default function ProductCart({ v, cartItems, setCartItems }) {

  const addToCart = (value) => {
    // Check if product already in cart
    var checkProduct = cartItems.filter((item) => item.id === value.id);

    if (checkProduct.length === 0) {
      var productInfo = {
        id: value.id,
        name: value.name,
        price: value.price,
        image: value.image,
        quantity: 1,
      };

      console.log("wedsdwedsddd", productInfo);

      var data = [productInfo, ...cartItems];

      setCartItems(data);
      localStorage.setItem('cartItems', JSON.stringify(data));
      toast.success('Product added to cart');
    } else {
      // Increase quantity if already in cart
      var data = cartItems.map((item) => {
        if (item.id === value.id) {
          item.quantity += 1;
        }
        return item;
      });

      setCartItems(data);
      localStorage.setItem('cartItems', JSON.stringify(data));
    }
  };

  return (
    <>
      <div className="flex flex-col">
        {/* Product Image Section */}
        <ToastContainer/>
        <div className="relative flex">
          <img
            className="h-[150px] object-cover"
            src={v.multiple_images[1]}
            alt={v.name}
          />
          <div className="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100">
            <Link
              href={`/product-overview/${v.id}`}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </Link>
            <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </span>
          </div>

          <div className="absolute right-1 mt-3 flex items-center justify-center bg-amber-400">
            <p className="px-2 py-2 text-sm">- {v.discount_percentage}% OFF</p>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <p className="mt-2">{v.name}</p>
          <p className="font-medium text-violet-900">
            ${v.price}
            <span className="text-sm text-gray-500 line-through">$500.00</span>
          </p>

          {/* Rating Section */}
          <div className="flex items-center">
            {Array.from({ length: 4 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 text-gray-200"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-gray-400">(38)</p>
          </div>

          {/* Add to Cart Button */}
          <div>
            <button
              className="my-5 h-10 w-full bg-violet-900 text-white"
              onClick={() => addToCart(v)} // Pass product to addToCart
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
