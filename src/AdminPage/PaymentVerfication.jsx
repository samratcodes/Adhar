import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaEnvelope, FaUser } from "react-icons/fa";
import SecondaryHeader from "../Components/SecondaryHeader";

const PaymentVerification = () => {
  const users = [
    {
      name: "Mia John",
      email: "mia.john@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=688&h=688&q=100",
      cardNumber: "1234",
      transactionNumber: "TXN123456",
      date: "2024-06-15 14:30",
      amount: "$120.50",
    },
    {
      name: "Arthur Melo",
      email: "arthur.melo@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80",
      cardNumber: "5678",
      transactionNumber: "TXN123457",
      date: "2024-06-14 10:15",
      amount: "$250.00",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100",
      cardNumber: "9012",
      transactionNumber: "TXN123458",
      date: "2024-06-13 08:00",
      amount: "$75.20",
    },
    {
      name: "Amelia Anderson",
      email: "amelia.anderson@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=764&h=764&q=80",
      cardNumber: "3456",
      transactionNumber: "TXN123459",
      date: "2024-06-12 12:45",
      amount: "$180.75",
    },
    {
      name: "Joseph Gonzalez",
      email: "joseph.gonzalez@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80",
      cardNumber: "7890",
      transactionNumber: "TXN123460",
      date: "2024-06-11 16:00",
      amount: "$300.00",
    },
    {
      name: "Olivia Wathan",
      email: "olivia.wathan@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1470&h=1470&q=80",
      cardNumber: "1234",
      transactionNumber: "TXN123461",
      date: "2024-06-10 09:30",
      amount: "$95.00",
    },
    {
      name: "Junior REIS",
      email: "junior.reis@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=687&h=687&q=80",
      cardNumber: "5678",
      transactionNumber: "TXN123462",
      date: "2024-06-09 11:20",
      amount: "$400.00",
    },
  ];

  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <div className="flex w-full justify-center  ">
      <div className="flex w-4/5 justify-center">
        <div className="w-4/5   ">
          <SecondaryHeader header={" Transaction Request"} className={"mb-8"} />

          {selectedUser ? (
            <div>
              <div className="bg-white shadow rounded-lg p-6 ">
                <ul className="space-y-4 grid grid-cols-2 pb-2  justify-between items-center pl-4 border-gray-200 border-b-2">
                  <div className="flex flex-col gap-6 ">
                    <li>
                      <p className="font-semibold text-gray-700 text-xl">
                        Name
                      </p>
                      <p className="text-gray-900 text-lg">
                        {selectedUser.name}
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-gray-700 text-xl">
                        Email Address
                      </p>
                      <p className="text-gray-900 text-lg">
                        {selectedUser.email}
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-gray-700 text-xl">
                        Card Number
                      </p>
                      <p className="text-gray-900 text-lg">
                        **** **** **** {selectedUser.cardNumber}
                      </p>
                    </li>
                  </div>
                  <div className="flex flex-col gap-6">
                    <li>
                      <p className="font-semibold text-gray-700 text-xl">
                        Transaction Number
                      </p>
                      <p className="text-gray-900 text-lg">
                        {selectedUser.transactionNumber}
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-gray-700 text-xl">
                        Date
                      </p>
                      <p className="text-gray-900 text-lg">
                        {selectedUser.date}
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-gray-700 text-xl">
                        Amount
                      </p>
                      <p className="text-gray-900 text-lg">
                        {selectedUser.amount}
                      </p>
                    </li>
                  </div>
                </ul>
                <div className="flex gap-6 items-center">
                  <div className="w-full flex justify-between mt-10 gap-4">
                  <div className="flex justify-start mb-12 gap-6 ">

<button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700 text-xl flex items-center">
  <FaUser className="mr-2 text-base" />
  View Profile
</button>
</div>
                <div className="flex">
                      {/* Approve Button */}
                      <div className="text-center">
                      <button
                        className=" bg-[#009C65] text-white px-6 py-2 rounded mr-2 hover:bg-green-700 text-base flex items-center"
                        title="Approve"
                      >
                        <FaCheck className="mr-2 text-base" />
                        Approve
                      </button>
                      <p className="ml-2 mt-2 text-[10px] text-gray-400">
                        Approve the transaction
                      </p>
                    </div>
                    {/* Decline Button */}
                    <div className="text-center">
                      <button
                        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 text- flex items-center"
                        title="Decline"
                      >
                        <ImCross className="mr-2 text-base" />
                        Decline
                      </button>
                      <p className="ml-2 mt-2 text-[10px] text-gray-400">
                        Decline the transaction
                      </p>
                    </div>
                </div>
                  </div>
                  {/* Additional User Actions */}

                </div>
                {/* Transaction History */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Transaction History
                  </h3>
                  <ul className="space-y-2">
                    {users.slice(0, 3).map((user, index) => (
                      <li key={index} className="bg-gray-100 p-4 rounded-lg">
                        <div className="flex justify-between">
                          <p className="text-gray-700">{user.date}</p>
                          <p className="text-gray-700">{user.amount}</p>
                        </div>
                        <div className="text-gray-500 text-sm">
                          Transaction #{user.transactionNumber} by {user.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <p>Please select a user from the requests list.</p>
          )}
        </div>
        <aside className="flex shadow-2xl bg-white">
          <div className="h-screen overflow-y-auto w-72 py-6">
            <h2 className="px-5 text-2xl font-semibold text-gray-800">
              Requests
            </h2>
            <div className="mt-6 space-y-2">
              {users.map((user, index) => (
                <button
                  key={index}
                  className={`group flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none hover:stroke-white ${
                    selectedUser?.email === user.email ? "bg-gray-100" : ""
                  }`}
                  onClick={() => setSelectedUser(user)}
                >
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src={user.imgSrc}
                    alt={user.name}
                  />
                  <div className="text-left rtl:text-right">
                    <h1 className="text-md font-medium text-gray-700 capitalize group-hover:text-white">
                      {user.name}
                    </h1>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PaymentVerification;
