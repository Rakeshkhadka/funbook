import Link from "next/link";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setAuthentication, setUser } from "../redux/reducers/authReducer";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const notify = () => toast("LOGGED IN SUCCESSFULLY!");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        // expiresInMins: 60, // optional
      }),
    })
    const userData = await res.json()
    // console.log(await res.json())
    if(res.status===400){
      return toast("Invalid Username or Password")
    }
    else if(res.status===200){
      dispatch(setAuthentication(true))
      dispatch(setUser(userData))
      notify()
      router.push(`/`);
    }
  };
  //   const navigate = useNavigate();
  return (
    <div>
      <section class="min-h-screen flex flex-col">
        <main class="flex-1 flex items-center justify-center">
          <div class="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <h1 class=" mb-6 font-bold text-gray-600 text-3xl tracking-wider">
              Log In
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="py-2">
                <input
                  class="block w-full border-2 border-gray-100 focus:border-gray-400 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
                  placeholder="username"
                  {...register("username")}
                />
              </div>
              <div class="py-2">
                <input
                  type="password"
                  class="block w-full border-2 border-gray-100 focus:border-gray-400 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>
              <div class="py-2">
                <button

                  class="block w-full border-2 px-4 py-2 rounded-lg bg-gray-600 text-white font-bold tracking-wider hover:bg-gray-700 focus:outline-none"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <div class="mt-6">
              <span>Don't have an account?</span>

              <Link
                href="/signup"
                className="text-gray-600 underline hover:text-gray-800"
              >
                Create One
              </Link>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
