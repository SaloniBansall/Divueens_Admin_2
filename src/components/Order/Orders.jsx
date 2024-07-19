import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout';

const Orders = () => {
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
    
    // bg-gradient-to-r from-rose-400 via-rose-300 to-rose-400
      return (
        <Layout>

        <div className="min-h-screen text-black">
          <div className="container mx-auto px-4 py-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className='text-3xl mb-2 place-content-center'>ORDERS</h2>
            <table className="w-full border-separate border border-white text-center">
              <thead className="bg-pink-300 border border-white">
                <tr className="border border-white">
                  <th className="px-4 py-2 ">Order ID</th>
                  <th className="px-4 py-2 ">Order Status</th>
                  <th className="px-4 py-2 ">Created At</th>
                  <th className="px-4 py-2 ">Modified At</th>
                  <th className="px-4 py-2 ">Details</th>
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
                        className={`px-4 py-2 bg-inherit hover:border-pink-300 hover:border rounded-md`}
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
                        to={`/orders/${order.id}`}
                        className="hover:border-pink-500 border-2 border-pink-300 text-pink-500 font-md py-2 px-4 rounded"
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
    </Layout>
    )
    }
    let getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-400';
                case 'Cancelled':
                    return 'bg-red-400';
        case 'Processing':
            return 'bg-yellow-400';
            default:
                return '';
            }
        };


export default Orders
