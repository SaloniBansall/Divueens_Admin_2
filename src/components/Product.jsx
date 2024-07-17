import React, { useEffect, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import Layout from './Layout';
const apiUrl = import.meta.env.VITE_API_URL;


const Product = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/api/products`).then((res) => {
            res.json().then(data => {
                setProductList(data)
                console.log(data, "products list")
            })
        }).catch(e => { console.log('Error:', e) })
    }, [])

    // deleteProduct
    const deleteProduct = (_id) => {
        console.log('id: vite', _id)
        const token = localStorage.getItem('token')
        fetch(`${apiUrl}/api/delete/${_id}`, {
            method: "delete",
            headers: {
                'Authorization': `Bearer ${token}`,
            },

        }).then((res) => {
            res.json().then(data => {
                if (productList.length > 0) {
                    setProductList(prevProducts => prevProducts.filter(product => product._id !== _id));
                    console.log(data._id, "product deleted")
                }
            })
        }).catch(e => { console.log('Error:', e) })
    }




    return (

        <Layout>
            <div className="w-full h-full">

                <h2 className='text-2xl  p-4 text-center font-semibold'>LIST OF PRODUCTS</h2>

                <div className='w-full flex flex-wrap justify-center items-center gap-2 py-2'>
                    {productList?.map((product, index) => (
                        <div key={index} className="max-w-[200px] bg-white border-2 p-4">
                            <h2 className='font-semibold'>{product.name}</h2>
                            {/* <h2>{product.description}</h2> */}
                            <img src={product.imageUrl} alt="" />
                            <span>Rs.{product.price}</span>

                            <div className="mt-2 flex flex-row justify-around gap-2 border-t-2 p-2">

                                <Link to={`/update/${product._id}`} className='hover:text-yellow-600 text-yellow-400'> <FaEdit /> </Link>
                                <button onClick={() => { deleteProduct(product._id) }} className='hover:text-red-600  text-red-500 '> <FaTrashAlt /> </button>
                            </div>
                        </div>
                    ))
                    }
                    <Link to={"/add"} className='text-3xl text-pink-400' ><BsPlusCircle /> </Link>
                </div>
            </div>
        </Layout>
    )
}

export default Product
