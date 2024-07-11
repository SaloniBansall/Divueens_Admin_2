import React, { useEffect, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
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
        const token = localStorage.getItem('token')
        // console.log(_id, localStorage.getItem('token'),":id")
        fetch(`${apiUrl}/api/delete/${_id}`, {
            method: "delete",
            headers: {
                // 'Content-Type': 'application/json',
                // 'auth-token': localStorage.getItem('token')
                'Authorization': `Bearer ${token}`,
            },

        }).then((res) => {
            res.json().then(data => {
                // setProductList(data)
                if (productList.length > 0) {
                    setProductList(prevProducts => prevProducts.filter(product => product._id !== data._id));
                    console.log(data, "product deleted")
                }
            })
        }).catch(e => { console.log('Error:', e) })
    }

   


    return (

        <>
            <div className="w-full h-full">

                <h2 className='text-2xl  p-4 text-center font-semibold'>List Of Products</h2>

                {/* <div className="flex flex-row items-center px-8 "> */}

                <div className='w-full flex flex-wrap justify-center items-center gap-2 py-2'>
                    {productList?.map((product, index) => (
                        <div key={index} className="max-w-[200px] bg-white border-2 p-4">
                            <h2 className='font-semibold'>{product.name}</h2>
                            {/* <h2>{product.description}</h2> */}
                            <img src={product.imageUrl} alt="" />
                            <span>Rs.{product.price}</span>

                            <div className="mt-2 flex flex-row justify-center  gap-2 border-t-2 p-2">

                                <button onClick={() => { deleteProduct(product._id) }} className='px-2 py-1 hover:bg-white hover:border-2 hover:text-black bg-red-500  text-white rounded'>delete</button>
                                <Link to={`/update/${product._id}`} className='px-2 py-1  hover:bg-white hover:border-2 hover:text-black  bg-pink-500 text-white rounded'>update</Link>
                            </div>
                        </div>
                    ))
                    }
                    <Link to={"/add"} className='text-3xl text-pink-500' ><BsPlusCircle /> </Link>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Product
