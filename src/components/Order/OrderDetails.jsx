import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Orders from './Orders';
import Layout from '../Layout';
const OrderDetails = () => {
    const params = useParams()
    console.log(params,': params')

    return (
        <Layout>

           
                <div className='item-center p-4'>
                    <h1 className='text-3xl p-2  font-semibold'>Customer Details</h1>
                    <h2 className="text-2xl font-bold mb-4">{params.id}</h2>
                    <p className="text-gray-600 mb-2">Email: {params.id}</p>
                    <p className="text-gray-600 mb-2">Phone: {params.id}</p>
                    <p className="text-gray-600 mb-2">Products: {params.id}</p>

                </div>
           
        </Layout>


    )

}




export default OrderDetails
