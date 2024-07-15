import React, { useState } from 'react';

function OrdersTable() {
  const orders = [
    {
    id: 1,
    status: 'Completed',
    details: {
      customerName: 'John Doe',
      email: 'abc@gmail.com',
      phone: '9876543321',
      orderDate: '2024-07-13',
      modDate: '2024-07-15',
      total: '$100',
      products: [
        {
          name: 'Product 1',
          quantity: 2,
        },
        {
          name: 'Product 2',
          quantity: 1,
        },
      ],
    },
  },
  {
    id: 2,
    status: 'Processing',
    details: {
      customerName: 'Jane Doe',
      orderDate: '2024-07-12',
      email: 'xyz@gmail.com',
      phone: '9876543321',
      modDate: '2024-07-15',
      total: '$50',
      products: [
        {
          name: 'Product 3',
          quantity: 1,
        },
      ],
    },
  },
  {
    id: 3,
    status: 'Cancelled',
    details: {
      customerName: 'Bob Smith',
      orderDate: '2024-07-11',
      total: '$200',
      email: 'xyz@gmail.com',
      phone: '9876543321',
      modDate: '2024-07-15',
      products: [
        {
          name: 'Product 4',
          quantity: 2,
        },
      ],
    },
  },
]; // your orders data

  const [isOpen, setIsOpen] = useState({}); // initialize an empty object to store the open state of each order


  const handleToggle = (id) => {
    setIsOpen((prevOpen) => ({ ...prevOpen, [id]: !prevOpen[id] }));
  };

  return (
    <div className="container mx-auto p-4 pt-6 leading-3">
      <h1 className="text-3xl font-bold mb-4 m-2">Orders</h1>
      <table className="table-auto w-full mx-auto">
        <thead className="border-spacing-2 mx-full w-full leading-8">
          <tr className="bg-gray-200 border-spacing-2">
            <th className="px-2 py-2 box-content">ID</th>
            <th className="px-2 py-2 box-content">Order Status</th>
            <th className="px-2 py-2 box-content">Created at</th>
            <th className="px-2 py-2 box-content">Modified at</th>
            <th className="px-2 py-2 box-content">Customer Name</th>
            <th className="px-2 py-2 box-content">Phone</th>
            <th className="px-2 py-2 box-content">Total</th>
            <th className="box-content">View Details</th>
          </tr>
        </thead>
        <tbody className="border-spacing-2">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2 mx-30 mn-20">
                <span
                  className={`${order.status === 'Completed' ? 'text-white bg-green-500 p-1 border rounded border-solid border-transparent ' : ''} ${order.status === 'Processing' ? 'text-white bg-yellow-500 p-1 border rounded border-solid border-transparent' : ''} ${order.status === 'Cancelled' ? 'text-white bg-red-500 p-1 border rounded border-solid border-transparent' : ''}`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-4 py-2 text-center">{order.details.orderDate}</td>
              <td className="px-4 py-2 text-center">{order.details.modDate}</td>
              <td className="px-4 py-2 text-center">{order.details.customerName}</td>
              <td className="px-4 py-2 text-center">{order.details.phone}</td>
              <td className="px-4 py-2 text-center">{order.details.total}</td>
              <td className="px-4 py-2 text-center">
                <button
                  className="bg-blue-500 box-border w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleToggle(order.id)}
                >
                  View Details
                </button>
                {isOpen[order.id] && (
                  <div
                    className="absolute bg-white shadow-md py-2 rounded w-full"
                    role="menu"
                  >
                    <div className="px-4 py-2">
                      <h5 className="text-sm text-gray-700">Customer Details</h5>
                      <p className="text-sm text-gray-800">
                        Name: {order.details.customerName}
                      </p>
                      <p className="text-sm text-gray-800">
                        Email: {order.details.email}
                      </p>
                      <p className="text-sm text-gray-800">
                        Phone: {order.details.phone}
                      </p>
                      <p className="text-sm text-gray-800">
                        Products: {order.details.products.map((product) => product.name).join(', ')}
                      </p>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;