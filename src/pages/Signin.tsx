import { Link } from "react-router-dom";
import signin from '../assets/Features/signin.jpg'

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f1e9] px-6">

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2 max-w-4xl w-full">

    
        <div className="hidden md:block">
          <img
            src={signin}
            alt="NZ Walks"
            className="h-full w-full object-cover"
          />
        </div>

      
        <div className="p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Sign In
          </h2>

          <form className="space-y-5">

         
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

         
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

        
            <button
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
            >
              Sign In
            </button>

          </form>

          <p className="text-sm text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-green-700 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default SignIn;