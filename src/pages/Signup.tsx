import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f1e9] px-6">

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2 max-w-4xl w-full">

        {/* Left Column - Image */}
        <div className="hidden md:block">
          <img
            src="/images/signup.jpg"
            alt="NZ Walks"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Column - Form */}
        <div className="p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Create Account
          </h2>

          <form className="space-y-5">

            {/* Role Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Role
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="">Choose role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            {/* Email */}
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

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Button */}
            <button
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Sign in link */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-green-700 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default SignUp;