import React from "react";

const PaymentVerfication = () => {
  return (
    <>
      <div className=" pl-16">
        <div className="flex ">
          <div className=" w-full">
            <h2 className=" text-3xl font-semibold">Transaction Request</h2>
            <div>
              <div>
                <ul>
                  <li>Email Address</li>
                  <li>Card number</li>
                  <li>Trasaction NUmber</li>
                  <li>date</li>
                  <li>amount</li>
                </ul>
              </div>
              <div class="flex justify-start">
                <button class="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-700">
                  Approve
                </button>
                <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                  Decline
                </button>
              </div>
            </div>
          </div>
          <aside class="flex shadow-2xl py-8">
            <div class="h-screen overflow-y-auto bg-white w-72 ">
              <h2 class="px-5 text-2xl font-medium text-gray-800">Users</h2>

              <div class="mt-6 space-y-4">
                <button class="group flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none hover:stroke-white">
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                    alt=""
                  />

                  <div class="text-left rtl:text-right">
                    <h1 class="text-sm font-medium text-gray-700 capitalize group-hover:text-white">
                      Mia John
                    </h1>
                  </div>
                </button>

                <button class="group flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none hover:stroke-white">
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80"
                    alt=""
                  />
                  <div class="text-left rtl:text-right">
                    <h1 class="text-sm font-medium text-gray-700 capitalize group-hover:text-white">
                      arthur melo
                    </h1>
                  </div>
                </button>

                <button class="flex items-center w-full px-5 py-2 transition-colors duration-200 bg-gray-100 dark:bg-gray-800 gap-x-2 focus:outline-none">
                  <div class="relative">
                    <img
                      class="object-cover w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
                      alt=""
                    />
                  </div>

                  <div class="text-left rtl:text-right">
                    <h1 class="text-sm font-medium text-gray-700 capitalize dark:text-white">
                      Jane Doe
                    </h1>
                  </div>
                </button>

                <button class="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=80"
                    alt=""
                  />

                  <div class="text-left rtl:text-right">
                    <h1 class="text-sm font-medium text-gray-700 capitalize ">
                      Amelia. Anderson
                    </h1>
                  </div>
                </button>

                <button class="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80"
                    alt=""
                  />

                  <div class="text-left rtl:text-right">
                    <h1 class="text-sm font-medium text-gray-700 capitalize ">
                      Joseph Gonzalez
                    </h1>
                  </div>
                </button>

                <button class="flex items-center w-full px-5 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <div class="relative">
                    <img
                      class="object-cover w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&h=1470&q=80"
                      alt=""
                    />
                  </div>

                  <div class="text-left rtl:text-right">
                    <h1 class="text-sm font-medium text-gray-700 capitalize ">
                      Olivia Wathan
                    </h1>
                  </div>
                </button>

                <button class="flex items-center w-full px-5 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <div class="relative">
                    <img
                      class="object-cover w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80"
                      alt=""
                    />
                  </div>

                  <div class="text-left rtl:text-right">
                    <h1 class="text-sm font-medium text-gray-700 capitalize ">
                      Junior REIS
                    </h1>
                  </div>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default PaymentVerfication;
