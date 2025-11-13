
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const Registration = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value.trim();
    const photoURL = event.target.photoURL.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    // Password validation
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.", { id: "create-user" });
      return;
    }
    if (!uppercaseRegex.test(password)) {
      toast.error("Password must include at least one uppercase letter.", { id: "create-user" });
      return;
    }
    if (!lowercaseRegex.test(password)) {
      toast.error("Password must include at least one lowercase letter.", { id: "create-user" });
      return;
    }

    setLoading(true);
    createUser(email, password)
      .then(() => {
        updateUserProfile(displayName, photoURL);
        toast.success("User created successfully!", { id: "create-user" });
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        toast.error(error.message, { id: "create-user" });
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleSignIn = () => {
    toast.loading("Signing in with Google...", { id: "create-user" });
    signInWithGoogle()
      .then(() => {
        toast.success("User signed in successfully!", { id: "create-user" });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, { id: "create-user" });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="card bg-white w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-sm shadow-2xl rounded-2xl p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              placeholder="Name"
              className="input w-full rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="input w-full rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input w-full rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input w-full rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <p className="text-xs text-gray-400 mt-1">
              Password must be at least 6 characters, include one uppercase and one lowercase letter.
            </p>
          </div>
          <div className="text-right">
            <Link to="#" className="link link-hover text-sm text-gray-500">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-full text-white font-semibold mt-2 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-linear-to-r from-purple-600 to-pink-500"
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 rounded-full text-black border border-gray-300 mt-4 bg-white font-semibold"
        >
          Login with Google
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500 hover:text-blue-700 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;



