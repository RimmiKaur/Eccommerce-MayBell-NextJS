import Link from 'next/link'
import React from 'react'

export default function page() {
  return (

    <>
    <section class="flex-grow">
        <section
          class="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10"
        >
          <h2 class="mx-auto px-5 text-2xl font-bold md:hidden">
            Payment Method
          </h2>
          <section
            class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10"
          >
            <table class="hidden lg:table">
              <thead class="h-16 bg-neutral-100">
                <tr>
                  <th>ADDRESS</th>
                  <th>DELIVERY METHOD</th>
                  <th class="bg-neutral-600 text-white">PAYMENT METHOD</th>
                  <th>ORDER REVIEW</th>
                </tr>
              </thead>
            </table>

            <div class="py-5">
              <form class="flex w-full flex-col gap-3" action="">
                <div class="flex w-full flex-col">
                  <label class="flex" for="name">Payment Card Number</label>
                  <input
                    x-mask="9999 9999 9999 9999"
                    class="w-full border px-4 py-2 lg:w-1/2"
                    placeholder="1223 4568 7644 4839"
                  />
                </div>

                <div class="flex w-full flex-col">
                  <label class="flex" for="name">Card Holder</label>
                  <input
                    class="w-full border px-4 py-2 lg:w-1/2"
                    type="text"
                    placeholder="SARAH JOHNSON"
                  />
                </div>

                <div class="flex items-center gap-5 lg:w-1/2">
                  <div class="flex flex-col">
                    <label class="flex" for="name">Expiry Date</label>

                    <div class="flex w-[150px] items-center gap-1">
                      <input
                        x-mask="99"
                        class="w-1/2 border px-4 py-2 text-center"
                        name=""
                        id=""
                        placeholder="10"
                      />

                      <span>&bsol;</span>

                      <input
                        x-mask="99"
                        class="w-1/2 border px-4 py-2 text-center"
                        name=""
                        id=""
                        placeholder="36"
                      />
                    </div>
                  </div>

                  <div class="flex flex-col w-[60px] lg:w-[110px]">
                    <label class="flex" for="">CVV/CVC</label>
                    <input
                      x-mask="999"
                      class="w-full border py-2 text-center lg:w-1/2"
                      type="password"
                      placeholder="&bull;&bull;&bull;"
                    />
                  </div>
                </div>


                <h2 class="mt-10 text-left text-xl font-medium">
                  Another methods:
                </h2>
                <section
                  class="my-4 grid w-fit grid-cols-3 gap-4 lg:grid-cols-5"
                >
                  <img
                    class="w-[100px] cursor-pointer"
                    src="./assets/images/payment-method-bitcoin.svg"
                    alt="bitcoin icon"
                  />
                  <img
                    class="w-[100px] cursor-pointer"
                    src="./assets/images/payment-method-paypal.svg"
                    alt="paypal icon"
                  />
                  <img
                    class="w-[100px] cursor-pointer"
                    src="./assets/images/payment-method-stripe.svg"
                    alt="stripe icon"
                  />
                  <img
                    class="w-[100px] cursor-pointer"
                    src="./assets/images/payment-method-visa.svg"
                    alt="visa icon"
                  />
                  <img
                    class="w-[100px] cursor-pointer"
                    src="./assets/images/payment-method-mastercard.svg"
                    alt="mastercard icon"
                  />
                </section>
              </form>
            </div>

            <div class="flex w-full items-center justify-between">
              <Link
                href="catalog"
                class="hidden text-sm text-violet-900 lg:block"
                >&larr; Back to the shop</Link>

              <div class="mx-auto flex justify-center gap-2 lg:mx-0">
                <Link
                  href="checkout-delivery"
                  class="bg-purple-900 px-4 py-2 text-white"
                  >Previous step</Link
                >

                <Link href="checkout-review" class="bg-amber-400 px-4 py-2"
                  >Checkout review</Link                >
              </div>
            </div>
          </section>
          

          <section class="mx-auto w-full px-4 md:max-w-[400px]">
            <div class="">
              <div class="border py-5 px-4 shadow-md">
                <p class="font-bold">ORDER SUMMARY</p>

                <div class="flex justify-between border-b py-5">
                  <p>Subtotal</p>
                  <p>$1280</p>
                </div>

                <div class="flex justify-between border-b py-5">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>

                <div class="flex justify-between py-5">
                  <p>Total</p>
                  <p>$1280</p>
                </div>
              </div>
            </div>
          </section>
        </section>

      

        <section
          class="container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row"
        >

          <div
            class="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5"
          >
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6 text-violet-900 lg:mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>

            <div class="ml-6 flex flex-col justify-center">
              <h3 class="text-left text-xs font-bold lg:text-sm">
                Free Delivery
              </h3>
              <p class="text-light text-center text-xs lg:text-left lg:text-sm">
                Orders from $200
              </p>
            </div>
          </div>


          <div
            class="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5"
          >
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6 text-violet-900 lg:mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            </div>

            <div class="ml-6 flex flex-col justify-center">
              <h3 class="text-left text-xs font-bold lg:text-sm">
                Money returns
              </h3>
              <p class="text-light text-left text-xs lg:text-sm">
                30 Days guarantee
              </p>
            </div>
          </div>


          <div
            class="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5"
          >
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6 text-violet-900 lg:mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>

            <div class="ml-6 flex flex-col justify-center">
              <h3 class="text-left text-xs font-bold lg:text-sm">
                24/7 Supports
              </h3>
              <p class="text-light text-left text-xs lg:text-sm">
                Consumer support
              </p>
            </div>
          </div>
        </section>

      </section>

    </>
)
}
