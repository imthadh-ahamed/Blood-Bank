"use client";

import { useState } from "react";
import Link from "next/link";
import { LuDroplets } from "react-icons/lu";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function Home() {
  const [isSignup, setIsSignup] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter(); // Initialize useRouter

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    // Add more validations as needed
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle successful form submission
      setIsDialogOpen(true);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    toggleForm();
  };

  const handleNavigation = () => {
    setIsDialogOpen(false);
    toggleForm();
    router.push("/pages/home"); // Redirect to home page
  };

  return (
    <>
      <header className="flex h-14 items-center justify-between border-b bg-background px-6 shadow-sm">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold"
          prefetch={false}
        >
          <LuDroplets className="h-6 w-6 text-red-700" />
          <span className="text-primary">Blood Bank</span>
        </Link>
      </header>

      <main className="flex min-h-screen justify-center items-center">
        <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
          {isSignup ? (
            <>
              <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
              <p className="text-center text-gray-600">
                Create a new account to access the Blood Bank.
              </p>
              <form className="space-y-4" onSubmit={handleSignup}>
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="p-2 border rounded-md"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="p-2 border rounded-md"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="p-2 border rounded-md"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-red-600 text-white rounded-md"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-center text-sm text-gray-600">
                Already have an account?
                <button
                  onClick={toggleForm}
                  className="text-blue-600 hover:underline ml-1"
                >
                  Sign In
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-center">Sign In</h2>
              <p className="text-center text-gray-600">
                Enter your credentials to access your account.
              </p>
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="p-2 border rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="p-2 border rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-red-600 text-white rounded-md"
                  onClick={handleNavigation}
                >
                  Sign In
                </button>
              </form>
              <p className="text-center text-sm text-gray-600">
                Don't have an account?
                <button
                  onClick={toggleForm}
                  className="text-blue-600 hover:underline ml-1"
                >
                  Sign Up
                </button>
              </p>
            </>
          )}
        </div>
      </main>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Account Created Successfully!
            </h3>
            <p className="mb-4">You can now sign in with your new account.</p>
            <div className="flex justify-center">
              <button
                className="py-2 px-4 bg-red-600 text-white rounded-md"
                onClick={handleDialogClose}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
