import React from 'react'

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white rounded">Login</button>
        </form>
      </div>
    </div>
  )
}
