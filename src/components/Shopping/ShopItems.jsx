import React, { useEffect, useState } from 'react'
import { FaEdit, FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../Layout';
const apiUrl = import.meta.env.VITE_API_URL;

const ShopItems = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/api/products`).then((res) => {
            res.json().then(data => {
                setProductList(data)
                console.log(data, "products list")
            })
        }).catch(e => { console.log('Error:', e) })
    }, [])
    return (
        <Layout>
            <div className="w-full h-full">

                <h2 className='text-2xl p-4 text-center font-semibold'>Proceed to Payment (testing-section for users)</h2>

                <div className='w-full flex flex-wrap justify-center items-center gap-4 py-4'>
                    {productList?.map((product, index) => (
                        <div key={index} className="max-w-[200px] bg-white border rounded-lg shadow-md p-4 transition duration-300 hover:shadow-lg">
                            <h2 className='font-semibold text-lg mb-2'>{product.name}</h2>
                            <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover mb-2 rounded-md" />
                            <span className='block text-lg font-semibold text-gray-800 mb-2'>Rs.{product.price}</span>

                            <button onClick={() => { /* Add your buy functionality here */ }} className='w-full bg-pink-400 text-white py-2 rounded-md flex justify-center items-center gap-2 hover:bg-white hover:text-pink-400 transition duration-300'>
                                <FaShoppingCart />
                                Buy
                            </button>
                        </div>
                    ))}

                </div>
            </div>
        </Layout>
    )
}

export default ShopItems
