import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import Layout from '../Layout';

const apiUrl = import.meta.env.VITE_API_URL;

const Banner = () => {
    const [banners, setBanners] = useState([]);
    const [bannerTitle, setbannerTitle] = useState('');
    const [bannerImage, setbannerImage] = useState('');
    const [bannerDescription, setBannerDescription] = useState('');

    const fetchBanners = async () => {
        try {
            const response = await fetch(`${apiUrl}/banner`);
            const data = await response.json();
            console.log(data, 'data')
            setBanners(data);
        } catch (error) {
            console.error('Error fetching banners:', error);
        }
    };

    useEffect(() => {
        // Fetch initial banner data from the backend
        fetchBanners();
    }, []);




    const handleAddBanner = async () => {


        if (bannerTitle && bannerImage) {
            const formData = new FormData();
            formData.append('title', bannerTitle);
            formData.append('description', bannerDescription);
            formData.append('image', bannerImage);

            try {
                const response = await fetch(`${apiUrl}/banner`, {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const newBanner = await response.json();
                    console.log('response recieved', newBanner)
                    setBanners([...banners, newBanner]);
                    fetchBanners()
                    setbannerTitle('');
                    setBannerDescription('');
                    setbannerImage('');
                } else {
                    console.error('Error adding banner:', response.statusText);
                }
            } catch (error) {
                console.error('Error adding banner:', error);
            }
        }
    };



    const handleDeleteBanner = async(_id) => {
        try {
            const response = await fetch(`${apiUrl}/banner/${_id}`, {
              method: 'DELETE',
            });
            if (response.ok) {
                console.log('banner deleted')
              setBanners(banners.filter((banner) => banner._id !== _id));
              
            } else {
              throw new Error('Failed to delete product');
            }
          } catch (error) {
            console.error('Error deleting product:', error);
            // Handle error appropriately (e.g., show error message)
          }
    };

    return (
        <Layout>

            <div className="max-w-4xl mx-auto mt-2 p-5 bg-white shadow-lg border rounded shadow-pink-100 mb-[2rem]">
                <h2 className="text-2xl  mb-5 text-black-500">BANNERS</h2>
                <div className="w-full overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-pink-400">
                            <tr className="w-full border-b">
                                <th className="text-left py-3 px-4 border-r text-white">Banner</th>
                                <th className="text-left py-3 px-4 border-r text-white">Title</th>
                                <th className="text-left py-3 px-4 border-r text-white">Description</th>
                                <th className="text-left py-3 px-4 text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {banners.map((banner, index) => (
                            <tr
                                key={index}
                                className={`hover:shadow-lg transition-shadow duration-300 border-b shadow-pink-200 ${index === banners.length - 1 ? 'hover:shadow-3xl hover:shadow-pink-200' : 'hover:shadow-lg hover:shadow-pink-200'}`}
                            >
                                <td className="py-3 px-4 border-r">
                                    <img
                                        src={banner.imageUrl}
                                        alt="Banner"
                                        className="w-12 h-12 object-cover transition-opacity duration-300 hover:opacity-75"
                                    />
                                </td>
                                <td className="py-3 px-4 border-r">
                                    <span
                                       
                                        
                                       
                                        className="text-pink-500"
                                    >
                                        {banner.title}
                                    </span>
                                </td>
                                <td className="py-3 px-4 border-r">
                                    <span
        
                                        className="text-pink-500 "
                                    >
                                        {banner.description}
                                    </span>
                                </td>
                                <td className="py-3 px-4 flex justify-around">
                                    <button className="text-yellow-400 hover:text-yellow-500">
                                        <FaEdit />
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleDeleteBanner(banner._id)}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-5">
                    <h3 className="text-xl font-semibold mb-3 text-pink-500">Add New Banner</h3>
                    <div className="flex items-center space-x-3">
                        <input
                            type="text"
                            placeholder="Banner title"
                            value={bannerTitle}
                            onChange={(e) => setbannerTitle(e.target.value)}
                            className="px-2 py-1 border-2 rounded  border-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Banner description"
                            value={bannerDescription}
                            onChange={(e) => setBannerDescription(e.target.value)}
                            className="px-2 py-1 border-2 rounded  border-gray-300"
                        />
                        <input
                            // type="text"
                            type="file"
                            name="image"

                            placeholder="Image title"
                            onChange={(e) => setbannerImage(e.target.files[0])}
                            className=""
                        />
                        <button
                            onClick={handleAddBanner}
                            className="px-2 py-2 bg-pink-500 text-white rounded hover:bg-pink-700 flex items-center justify-center"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Banner;


