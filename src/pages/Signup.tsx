import { Link, useNavigate } from "react-router-dom";
import signupImage from './../assets/Features/signupImage.jpg'
import axios from "axios";
import { useState } from "react";
import axiosInstance from "../api/axioInstance";

const SignUp = () => {

  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState("");
  const [errorVisibility,setErrorVisibility] = useState(false);

  const signUpAction = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setErrorVisibility(false);
      const registerUser = await axiosInstance.post('/auth/register', {
        Username: email,
        Password: password,
        roles: role === "admin" ? ["reader", "writer"] : ["reader"]
      });
      if (registerUser.status == 200) {
        alert('User Registered Successfully!');
        navigate('/signin');
      }
    } catch (err : any) {
      console.log(err);
      setError(String(err.response?.data || "Signup failed"));
      setErrorVisibility(true);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f1e9] px-6">

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2 max-w-4xl w-full">


        <div className="hidden md:block">
          <img
            src={signupImage}
            alt="NZ Walks"
            className="h-full w-full object-cover"
          />
        </div>


        <div className="p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Create Account
          </h2>

          <form className="space-y-5" onSubmit={signUpAction}>


            <div>
              <label className="block text-sm font-medium mb-1">
                Select Role
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                onChange={(e) => { setRole(e.target.value) }}
              >
                <option value="">Choose role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>


            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </div>
            {errorVisibility && (
              <>
              <div className="text-red-600">
                {error}
              </div>
              </>
            )}

            <button
              className={`w-full py-3 rounded-lg text-white transition
  ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-700 hover:bg-green-800"}`}
              type="submit"

            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>


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