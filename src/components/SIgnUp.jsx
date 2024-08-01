import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { ColorRing } from 'react-loader-spinner'; // Import the spinner component
const apiUrl = import.meta.env.VITE_API_URL;


const SIgnUp = () => {
  const [loading, setLoading] = useState(false); // State to manage loading spinner
  const signInGoogle = async () => {
    console.log('google btn clicked')
    window.location.href = `${apiUrl}/auth/google`; //redirecting user to the server
  }

  const navigator = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await fetch(`${apiUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      console.log(data, 'signup')
      if (res.ok) {
        // uncomment the below statement in order to accept  new signups
        // localStorage.setItem('token', data.authToken);
        Swal.fire({
          title: "Signup Successful!",
          text: "Welcome to Divueens!\n\nEmployees, please contact your administrator for access.\n\nCustomers, feel free to browse our website. Enjoy!\n\nThank you!",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
        });
        console.log('Registered successfully');
        setTimeout(() => {
          window.location.href = "https://divueens-frontend.vercel.app"
        }, 3000); // 2 seconds delay for navigation
        // navigator("/")

      } else {
        Swal.fire({
          text: data.message,
          icon: "warning",
          timer: 1500,
          showConfirmButton: false,
        });
        console.error(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#eee', '#f47e60', '#f8b26a', '#eee', '#849b80']}
          />
        </div>
      )}
      <Navbar />
      <div className="p-4 w-full h-screen rounded flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded "
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="w-full mb-2 bg-rose-500 hover:border-rose-300 border-2 text-white py-2 rounded hover:bg-white hover:text-rose-500">
              Sign Up
            </button>


            <Link className='text-center block hover:underline' to={"/login"}>Already an have an account</Link>

            <span className='text-center block m-3 text-xl'>or</span>

            <button
              type='button'
              onClick={signInGoogle}

              className="w-full py-2 no-underline text-black-400 px-4 hover:text-rose hover:border-rose-400 flex flex-row items-center justify-center gap-2 text-md border-2  rounded-md  focus:outline-none  "
            >
              <FcGoogle /> <span className=''>Sign up with Google</span>
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default SIgnUp;
