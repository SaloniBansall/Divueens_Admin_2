import React from 'react';
import { Link } from 'react-router-dom';

const OrderTable = () => {
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
    status: 'Cancelled',
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
      ]
    }
  },
  {
    id: 3,
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
        },]
      }
    }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-400 via-rose-300 to-rose-400 text-white">
      <h1 className='text-4xl p-2 place-content-center font-bold text-gradient-to-r from-green-400 to-blue-400 border border-2 border-dashed size-fit'>Orders</h1>
      <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        <table className="w-full border-separate border border-white text-center">
          <thead className="bg-gradient-to-r from-rose-500 to-orange-500 border border-white">
            <tr className="border border-white">
              <th className="px-4 py-2 border border-white">Order ID</th>
              <th className="px-4 py-2 border border-white">Order Status</th>
              <th className="px-4 py-2 border border-white">Created At</th>
              <th className="px-4 py-2 border border-white">Modified At</th>
              <th className="px-4 py-2 border border-white">View Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-2 border border-white">{order.id}</td>
                <td className="px-4 py-2 border border-white">
                  <select
                    value={order.status}
                    onChange={(e) => console.log(e.target.value)}
                    className={`px-4 py-2 border-none rounded-md ${getStatusColor(order.status)}`}
                  >
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Processing">Processing</option>
                  </select>
                </td>
                <td className="px-4 py-2 border border-white">{order.details.orderDate}</td>
                <td className="px-4 py-2 border border-white">{order.details.modDate}</td>
                <td className="px-4 py-2 border border- bg-white,text-slate-200">
                  <Link
                    to={`/orders/:id}`}
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-rose-500 hover:to-yellow-500 font-bold py-2 px-4 rounded"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
)
}
let getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-gradient-to-r from-green-600 via-green-300 to-green-600';
    case 'Cancelled':
      return 'bg-gradient-to-r from-red-600 via-red-400 to-red-600';
    case 'Processing':
      return 'bg-gradient-to-r from-yellow-400 via-red-200 to-yellow-400';
    default:
      return '';
  }
};

export default OrderTable;