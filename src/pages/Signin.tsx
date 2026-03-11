import { Link, useNavigate } from "react-router-dom";
import signin from '../assets/Features/signin.jpg'
import React, { isValidElement, useState } from "react";
import axios from "axios";

const SignIn = () => {

  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password,setPassword] = useState("");  
  const [error,setError] = useState("");
  const [errorVisibility,setErrorVisibility] = useState(false);

  const [token,setToken] = useState("");

  const signinAction = async (e:React.FormEvent) =>{
    e.preventDefault();
    try {
      setLoading(true);
      const isUserValid = await axios.post('https://nzwalksbackend.runasp.net/api/auth/login',{
        username : email,
        password
      });

      if(isUserValid.status == 200){
        setToken(isUserValid.data?.jwt);
        console.log(token);
        navigate('/Home');
      }
      
    } catch (err:any) {

      console.log(err);
      setError(String(err.response?.data || "Signup failed"));
      setErrorVisibility(true);
      
    }finally{
      setLoading(false);
    }
  }

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

          <form className="space-y-5" onSubmit={signinAction}>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                onChange={(e)=>{setEmail(e.target.value)}}
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
                onChange={(e)=>{setPassword(e.target.value)}}
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