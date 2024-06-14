

const Payment = () => {
  return (
    <div>
      {/* current balance section */}
      <div className=" inline-block my-12 ml-16">
        <div className="flex items-center justify-center gap-44 rounded-lg shadow-lg py-8 px-12">
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="flex gap-3">
              <div class="h-10 w-10 flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                  alt=""
                />
              </div>
              <h2 className=" text-4xl font-semibold ">Hello User,</h2>
            </div>
            <p className=" italic text-sm">Your available balance</p>
          </div>
          <p className=" text-5xl font-bold">$599</p>
        </div>
      </div>

      <div>
        <section class="mx-auto w-full max-w-8xl px-4 pl-16 pr-32 my-4 shadow-sm">
          {/* transaction history title */}
          <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex gap-2 justify-center items-center">
              <h2 class="text-3xl font-semibold">Transaction History</h2>
              <p class="mt-1 text-2xl text-gray-700">(29)</p>
            </div>
          </div>

          {/* transaction table section */}
          <div class="mt-6 flex flex-col">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200 table-auto">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                        >
                          <span>Transaction ID</span>
                        </th>
                        <th
                          scope="col"
                          class="px-12 py-3.5 text-left text-lg font-semibold text-gray-700"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                        >
                          Remarks
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                        >
                          Status
                        </th>
                        <th scope="col" class="relative px-4 py-3.5">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td class="whitespace-nowrap px-4 py-4">
                          <div class="flex items-center">
                            <div class="ml-4">
                              <div class=" text-base font-normal text-gray-900">
                                payment order #324
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-12 py-4">
                          <div class="text-base text-gray-900 ">Rs. 4000</div>
                        </td>

                        <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          27th June
                        </td>
                        <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          medicines
                        </td>
                        <td class="whitespace-nowrap px-4 py-4">
                          <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Success
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td class="whitespace-nowrap px-4 py-4">
                          <div class="flex items-center">
                            <div class="ml-4">
                              <div class=" text-base font-normal text-gray-900">
                                payment order #265
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-12 py-4">
                          <div class="text-base text-gray-900 ">Rs. 5800</div>
                        </td>

                        <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          13th May
                        </td>

                        <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          Lorem, ipsum dolor.
                        </td>
                        <td class="whitespace-nowrap px-4 py-4">
                          <span class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                            Pending
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td class="whitespace-nowrap px-4 py-4">
                          <div class="flex items-center">
                            <div class="ml-4">
                              <div class=" text-base font-normal text-gray-900">
                                payment order #154
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-12 py-4">
                          <div class="text-base text-gray-900 ">Rs. 3800</div>
                        </td>

                        <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          16th Feb
                        </td>

                        <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          Lorem, ipsum.
                        </td>
                        <td class="whitespace-nowrap px-4 py-4">
                          <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Success
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td class="whitespace-nowrap px-4 py-4">
                          <div class="flex items-center">
                            <div class="ml-4">
                              <div class=" text-base font-normal text-gray-900">
                                payment order #312
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-12 py-4">
                          <div class="text-base text-gray-900 ">Rs. 9740</div>
                        </td>

                        <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          24th Jan
                        </td>

                        <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          treatment
                        </td>
                        <td class="whitespace-nowrap px-4 py-4">
                          <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Success
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
