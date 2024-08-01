// Banner/BannerRow.jsx
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const BannerRow = ({ banner, handleEditBanner, handleDeleteBanner }) => {
    return (
        <tr className="hover:shadow-lg transition-shadow duration-300 border-b shadow-rose-300 hover:shadow-3xl hover:shadow-pink-200">
            <td className="py-3 px-4 border-r">
                <img
                    src={banner.imageUrl}
                    alt="Banner"
                    className="w-12 h-12 object-cover transition-opacity duration-300 hover:opacity-75"
                />
            </td>
            <td className="py-3 px-4 border-r">
                <span className="text-rose-500">{banner.title}</span>
            </td>
            <td className="py-3 px-4 border-r">
                <span className="text-rose-500">{banner.description}</span>
            </td>
            <td className="py-3 px-4 flex justify-around">
                <button
                    className="text-yellow-400 hover:text-yellow-500"
                    onClick={() => handleEditBanner(banner)}
                >
                    <FaEdit />
                </button>
                <button
                    className="text-rose-400 hover:text-rose-500"
                    onClick={() => handleDeleteBanner(banner._id)}
                >
                    <FaTrashAlt />
                </button>
            </td>
        </tr>
    );
};

export default BannerRow;
