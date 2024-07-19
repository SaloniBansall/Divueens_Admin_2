import React from 'react';
import OrderTable  from './Table';
import { Link, useParams} from 'react-router-dom';

const CustomerDetails = () => {
  const params=useParams()
  if (params === 1)
  {
    return(
      <div className="max-w-md mx-auto min-h-screen bg-gradient-to-r from-rose-400 via-rose-300 to-rose-400">
        <div className='container bg-white align-content-center item-center box-shadow-400'>
          <h1 className='text-4xl p-2 place-content-center font-bold text-gradient-to-r from-green-400 to-blue-400 border border-2 border-dashed size-fit'>Customer Details</h1>
          <h2 className="text-2xl font-bold mb-4">{params.id.details.customerName}</h2>
          <p className="text-gray-600 mb-2">Email: {params.id.details.email}</p>
          <p className="text-gray-600 mb-2">Phone: {params.id.details.phone}</p>
          <p className="text-gray-600 mb-2">Products: {params.id.details.products}</p>
          <Link to={`/orders/${OrderTable.order.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Orders
          </Link>
        </div>
      </div>


    )

  }
}
export const ErrorFallback = () => {
  return (
    
      <div>
          <h1>Oops! Something went wrong.</h1>
      </div>
  );
};

export default CustomerDetails;
