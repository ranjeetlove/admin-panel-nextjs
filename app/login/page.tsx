import Link from "next/link";

export default function Login() {
    return (
      <div className="bg-gray-200 flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-md max-w-xs w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">Admin Login</h2>
          <form action="#" method="POST">
              <div className="mb-4">
                  <label  className="block text-gray-700 font-semibold mb-2">Username</label>
                  <input type="text" id="username" name="username" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="Enter your username" required/>
              </div>
              <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Password</label>
                  <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="Enter your password" required/>
              </div>
              <Link href={'admin/dashboard'} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</Link>
          </form>
      </div>
      </div>
    );
  }
  