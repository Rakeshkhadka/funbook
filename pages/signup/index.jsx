import { Main } from "next/document";
import Link from "next/link";
import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { useForm } from "react-hook-form";
export default function Index() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <MainLayout>
      <section className="flex flex-col min-h-screen">
        <main className="flex items-center justify-center flex-1">
          <div className="w-full px-4 py-16 text-center rounded-lg sm:border-2 lg:px-24 lg:max-w-xl sm:max-w-md">
            <h1 className="mb-6 text-3xl font-bold tracking-wider text-gray-600 ">
              Sign Up
            </h1>
            <form action="">
              <div className="py-2">
                <input
                  className="block w-full px-4 py-2 bg-gray-100 border-2 border-gray-100 rounded-lg focus:border-gray-400 focus:outline-none"
                  placeholder="First Name"
                  type="text"
                  {...register("firstname")}
                />
              </div>
              <div className="py-2">
                <input
                  className="block w-full px-4 py-2 bg-gray-100 border-2 border-gray-100 rounded-lg focus:border-gray-400 focus:outline-none"
                  placeholder="Last Name"
                  type="text"
                  name="lname"
                  id="lname"
                />
              </div>
              <div className="py-2">
                <input
                  className="block w-full px-4 py-2 bg-gray-100 border-2 border-gray-100 rounded-lg focus:border-gray-400 focus:outline-none"
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="py-2">
                <input
                  className="block w-full px-4 py-2 bg-gray-100 border-2 border-gray-100 rounded-lg focus:border-gray-400 focus:outline-none"
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <div className="py-2">
                <button
                  className="block w-full px-4 py-2 font-bold tracking-wider text-white bg-gray-600 border-2 rounded-lg hover:bg-gray-700 focus:outline-none"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
            {/* <div className="py-4">
              <a href="#" className="hover:underline hover:text-gray-700">
                Forgot Password
              </a>
            </div> */}
            <div className="mt-6">
              <span>Already a member??</span>
              <Link
                href="/login"
                className="text-gray-600 underline hover:text-gray-800"
              >
                Login
              </Link>
            </div>
          </div>
        </main>
      </section>
    </MainLayout>
  );
}
