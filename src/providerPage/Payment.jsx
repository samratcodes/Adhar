const Payment = () => {
  return (
    <div className=" max-w-[1800px]">
      {/* current balance section */}
      <div className="inline-block my-12 ml-16 ">
        <div className="flex items-center justify-center gap-44 rounded-lg shadow-md hover:shadow-lg py-8 px-12 bg-white">
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="flex gap-3">
              <div className="h-10 w-10 flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                  alt=""
                />
              </div>
              <h2 className="text-4xl font-semibold ">Hello Sita,</h2>
            </div>
            <p className="italic text-sm">Your available balance</p>
          </div>
          <p className="text-5xl font-bold">Rs.5299</p>
        </div>
      </div>

      <div>
        <section className="mx-auto w-full max-w-8xl px-4 pl-16 pr-32 my-4 shadow-sm">
          {/* transaction history title */}
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex gap-2 justify-center items-center">
              <h2 className="text-3xl font-semibold">Transaction History</h2>
              <p className="mt-1 text-2xl text-gray-700">(29)</p>
            </div>
          </div>

          {/* transaction table section */}
          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                        >
                          <span>Transaction ID</span>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                        >
                          Remarks
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                        >
                          Status
                        </th>
                        <th scope="col" className="px-4 py-3.5">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base font-normal text-gray-900">
                            payment order #324
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base text-gray-900">
                            Rs. 4000
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          27th June
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          medicines
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold leading-5 bg-green-100 text-green-800">
                            Success
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap"></td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base font-normal text-gray-900">
                            payment order #265
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base text-gray-900">
                            Rs. 5800
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          13th May
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          Hospital visit and medicines
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold leading-5 bg-red-100 text-red-800">
                            Pending
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap"></td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base font-normal text-gray-900">
                            payment order #154
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base text-gray-900">
                            Rs. 3800
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          16th Feb
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          Physiotherapy
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold leading-5 bg-green-100 text-green-800">
                            Success
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap"></td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base font-normal text-gray-900">
                            payment order #312
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base text-gray-900">
                            Rs. 9740
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          24th Jan
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          Eye Checkup
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold leading-5 bg-green-100 text-green-800">
                            Success
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base font-normal text-gray-900">
                            payment order #312
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base text-gray-900">Rs. 940</div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          4th Jan
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          CT-scan and other tests
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold leading-5 bg-red-100 text-red-800">
                            Pending
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base font-normal text-gray-900">
                            payment order #412
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-base text-gray-900">
                            Rs. 3740
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          14th Jan
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          Regular Checkup
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold leading-5 bg-green-100 text-green-800">
                            Success
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap"></td>
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
