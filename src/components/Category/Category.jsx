import React, { useState } from 'react';
import { FaEdit, FaTrash, FaList, FaPlus, FaTrashAlt } from 'react-icons/fa'; // Import FaList and FaPlus icons
import Layout from '../Layout';

const initialCategories = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' },
  { id: 4, name: 'Category 4' },
  { id: 5, name: 'Category 5' },
  { id: 6, name: 'Category 6' },
  { id: 7, name: 'Category 7' },
  { id: 8, name: 'Category 8' },
  { id: 9, name: 'Category 9' },
  { id: 10, name: 'Category 10' },
  { id: 11, name: 'Category 11' },
  // Add more categories as needed
];

const Category = () => {

    const [categories, setCategories] = useState(initialCategories);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [editCategoryId, setEditCategoryId] = useState(null);
    const [editCategoryName, setEditCategoryName] = useState('');
  
    const handleAddCategory = () => {
      setShowForm(true);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (newCategoryName.trim() === '') return;
      const newCategory = {
        id: categories.length + 1,
        name: newCategoryName
      };
      setCategories([...categories, newCategory]);
      setNewCategoryName('');
      setShowForm(false);
    };
  
    const handleDeleteCategory = (id) => {
      setCategories(categories.filter(category => category.id !== id));
    };
  
    const handleEditCategory = (id, name) => {
      setEditCategoryId(id);
      setEditCategoryName(name);
    };
  
    const handleEditFormSubmit = (e) => {
      e.preventDefault();
      if (editCategoryName.trim() === '') return;
      setCategories(categories.map(category =>
        category.id === editCategoryId ? { ...category, name: editCategoryName } : category
      ));
      setEditCategoryId(null);
      setEditCategoryName('');
    };

  return (
    <>
       <Layout>

<div className="container mx-auto px-12 mt-[1rem] mb-[1rem]">
  <div className="flex items-center mb-4">
    <FaList className="text-2xl text-pink-500 mr-2" />
    <h2 className="text-2xl text-black-500">CATEGORIES</h2>
    <button
      onClick={handleAddCategory}
      className="ml-auto flex items-center bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-500 focus:outline-none"
    >
      <FaPlus className="mr-2" />
      Add Category
    </button>
  </div>
  {showForm && (
    <form onSubmit={handleFormSubmit} className="mb-4">
      <input
        type="text"
        value={newCategoryName}
        onChange={(e) => setNewCategoryName(e.target.value)}
        placeholder="Enter category name"
        className="px-4 py-2 border rounded-md mr-2"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-400"
      >
        Add
      </button>
    </form>
  )}
  <div className="bg-white shadow-md rounded-lg my-6">
    {/* Header Row */}
    <div className="flex items-center bg-pink-400 px-4 py-2">
      <div className="w-1/12 text-center text-white">S.No</div> {/* Serial number column */}
      <div className="w-5/12 px-4 text-white">NAME</div>
      <div className="w-5/12 flex justify-end text-white">ACTIONS</div>
    </div>

    {/* Category Rows */}
    {categories.map((category, index) => (
      <div key={category.id} className="flex items-center border-b border-gray-200 hover:shadow-lg hover:shadow-pink-100">
        <div className="w-1/12 text-center px-4 py-2 text-gray-500">{index + 1}</div> {/* Display index + 1 for S.No */}
        <div className="w-5/12 px-4 py-2 text-gray-500">
          {editCategoryId === category.id ? (
            <form onSubmit={handleEditFormSubmit} className="flex items-center">
              <input
                type="text"
                value={editCategoryName}
                onChange={(e) => setEditCategoryName(e.target.value)}
                className="px-2 py-1 border rounded-md"
              />
              <button type="submit" className="ml-2 bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-pink-400">
                Save
              </button>
            </form>
          ) : (
            category.name
          )}
        </div>
        <div className="w-5/12 flex justify-end px-4 py-2 space-x-4">
          <button
            className="text-yellow-400 mr-4"
            onClick={() => handleEditCategory(category.id, category.name)}
          >
            <FaEdit />
          </button>
          <button
            className="text-red-500"
            onClick={() => handleDeleteCategory(category.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
</Layout>
    </>
  )
}

export default Category


