import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../services/api.js'

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await API.post('/user/login', formData)
      console.log(response.data);

      localStorage.setItem('token', response.data.token)
      // console.log(localStorage.getItem('token'));

      // console.log('Saved token:', localStorage.getItem('token'));

      const protectedResponse = await API.get('/fetch')
      console.log(protectedResponse.data);

      navigate('/');
    } catch (error) {

      // console.log(error.response?.data || error.message)
      console.log(error);
    }
  }
  return (
   <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl bg-white p-5 shadow-lg sm:p-8"
      >
        <h1 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
          Login
        </h1>


        <label className="mb-1 block font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="mb-4 w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />

        <label className="mb-1 block font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a password"
          required
          minLength={6}
          className="mb-6 w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Login
        </button>

        <p className="mt-5 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/register" className="font-semibold text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login

/* <div>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div> */