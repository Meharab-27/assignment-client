
import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 px-4">
      <div className="card bg-white w-full max-w-md mx-auto shadow-2xl border border-gray-200 rounded-3xl overflow-hidden">
        <div className="card-body p-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h1>

          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset space-y-4">

              <div>
                <label className="label text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="label text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                  placeholder="Enter your password"
                />
              </div>

              <div className="text-right">
                <a className="link link-hover text-pink-500 hover:text-pink-700 text-sm">Forgot password?</a>
              </div>

              <button
                className="btn w-full text-white mt-4 rounded-full bg-linear-to-r from-purple-600 to-pink-500 hover:from-pink-600 hover:to-red-700 transition-all py-2 font-semibold"
              >
                Login
              </button>
            </fieldset>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn w-full mt-4 bg-white rounded-full text-black border border-gray-300 hover:bg-gray-50 transition py-2 font-semibold"
          >
            Login with Google
          </button>

          <p className="text-center text-gray-600 mt-6 text-sm">
            New to our website? Please{' '}
            <Link className="text-blue-500 hover:text-blue-700 font-medium" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
