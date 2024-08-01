// Banner/BannerTable.jsx
import React from 'react';
import BannerRow from './BannerRow';

const BannerTable = ({ banners, handleEditBanner, handleDeleteBanner }) => {
    const sortedBanners = banners.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div>
            <h3 className="text-xl font-semibold mb-3 text-rose-500">Banners</h3>
            <div className="w-full overflow-x-auto mt-5">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-rose-400">
                        <tr className="w-full border-b">
                            <th className="text-left py-3 px-4 border-r text-white">Banner</th>
                            <th className="text-left py-3 px-4 border-r text-white">Title</th>
                            <th className="text-left py-3 px-4 border-r text-white">Description</th>
                            <th className="text-left py-3 px-4 text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedBanners.map((banner) => (
                            <BannerRow
                                key={banner._id}
                                banner={banner}
                                handleEditBanner={handleEditBanner}
                                handleDeleteBanner={handleDeleteBanner}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BannerTable;
