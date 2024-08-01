// Banner/BannerForm.jsx
import React from 'react';

const BannerForm = ({ form, setForm, handleSubmit }) => {
    return (
        <div className="mb-5">
            <h3 className="text-xl font-semibold mb-3 text-rose-500">{form.editing ? 'Edit Banner' : 'Add New Banner'}</h3>
            <form onSubmit={handleSubmit} className="flex max-w-[500px] flex-col space-y-3">
                <input
                    type="text"
                    placeholder="Banner title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="px-2 py-1 border-2 rounded border-gray-300"
                />
                <input
                    type="text"
                    placeholder="Banner description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="px-2 py-1 border-2 rounded border-gray-300"
                />
                <input
                    type="file"
                    placeholder="Banner image"
                    onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                    className="border-2 border-gray-300"
                />
                <button
                    type="submit"
                    className="px-2 py-2 bg-rose-500 text-white rounded hover:bg-rose-600"
                >
                    {form.editing ? 'Save' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default BannerForm;
