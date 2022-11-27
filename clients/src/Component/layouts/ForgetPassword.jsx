import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios  from "axios";

function ForgetPassword() {
  const history = useNavigate();

  const [user, setUser] = useState({
    email: "",
  });

  //handle inputs
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  //send request
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/users/forgotpassword/", {
        email: user.email
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  //handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //http Request
    sendRequest().then(() => history("/emailsent"));
  };

  return (
    <div className="flex flex-col align-middle justify-center h-[90vh]">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto">
        <form className="space-y-6" method="Post" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
            Enter your email to reset Password
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Reset 
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;