import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import img1 from "../public/assets/1.jpg";
import { useRouter } from "next/router";

export default function Post({ post, isDetailed }) {
  const router = useRouter();
  const [user, setUser] = useState("Loading");

  console.log("isDetailed??", isDetailed, Boolean(isDetailed));
  const handlePostClick = () => {
    router.push(`/post/${post.id}`);
  };
  // const getUserName = (uid) => {
  //   (async () => {
  //     const res = await fetch(`https://dummyjson.com/users/${uid}`);
  //     if (res.status == 200) {
  //       const mydata = await res.json();
  //       console.log(res, "name:", mydata.firstName);
  //       setUser(mydata.firstName + " " + mydata.lastName);
  //     }
  //   })();
  //   return user;
  // };
  return (
    <section onClick={handlePostClick}>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4 mt-4 rounded-lg shadow dark:bg-dark-second dark:text-dark-txt">
          <div className="col-span-2">
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Image
                    src={img1}
                    alt="Profile picture"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="absolute right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full top-3/4"></span>
                </div>
                <div>
                  <div className="font-semibold">
                    {getUserName(post.userId)}
                  </div>
                  <span className="text-sm text-gray-500">38m</span>
                </div>
              </div>
              <div className="grid w-8 h-8 text-xl text-gray-500 rounded-full cursor-pointer place-items-center hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third">
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
            {/* <!-- END POST AUTHOR -->

                    <!-- POST CONTENT --> */}

            <div className="px-4 py-2 font-bold text-justify uppercase">
              {post.title}
            </div>
            {isDetailed ? <div>{post.body}</div> : null}
            {/* <!-- END POST CONTENT -->

                    <!-- POST IMAGE --> */}
            <div className="py-2">
              <Image src={img1} alt="Post image" className="h-96" />
            </div>
            {/* <!-- END POST IMAGE -->

                    <!-- POST REACT --> */}
            <div className="px-4 py-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-row-reverse items-center">
                  <span className="ml-2 text-gray-500 dark:text-dark-txt">
                    {post.reactions}
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- END POST REACT -->

                    <!-- POST ACTION --> */}
            <div className="px-4 py-2">
              <div className="py-1 border border-l-0 border-r-0 border-gray-200 dark:border-dark-third">
                <div className="flex space-x-2">
                  <div className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt">
                    <i className="bx bx-like"></i>
                    <span className="text-sm font-semibold">Like</span>
                  </div>
                  <div className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt">
                    <i className="bx bx-comment"></i>
                    <span className="text-sm font-semibold">Comment</span>
                  </div>
                  <div className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt">
                    <i className="bx bx-share bx-flip-horizontal"></i>
                    <span className="text-sm font-semibold">Share</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END POST ACTION -->

                    <!-- LIST COMMENT --> */}
          </div>
          <div className="px-4 py-2">
            {/* <!-- COMMENT --> */}
            <div className="flex space-x-2">
              <Image
                src={img1}
                alt="Profile picture"
                className="rounded-full w-9 h-9"
              />
              <div>
                <div className="p-2 text-sm bg-gray-100 dark:bg-dark-third rounded-2xl">
                  <span className="block font-semibold">John Doe</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
                <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                  <span className="font-semibold cursor-pointer">Like</span>
                  <span>.</span>
                  <span className="font-semibold cursor-pointer">Reply</span>
                  <span>.</span>
                  10m
                </div>
                {/* <!-- COMMENT --> */}
                <div className="flex space-x-2">
                  <Image
                    src={img1}
                    alt="Profile picture"
                    className="rounded-full w-9 h-9"
                  />
                  <div>
                    <div className="p-2 text-sm bg-gray-100 dark:bg-dark-third rounded-2xl">
                      <span className="block font-semibold">John Doe</span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
                      <span>.</span>
                      <span className="font-semibold cursor-pointer">
                        Reply
                      </span>
                      <span>.</span>
                      10m
                    </div>
                  </div>
                </div>
                {/* <!-- END COMMENT --> */}
              </div>
            </div>
            {/* <!-- END COMMENT -->
                        <!-- COMMENT --> */}
            <div className="flex space-x-2">
              <Image
                src={img1}
                alt="Profile picture"
                className="rounded-full w-9 h-9"
              />
              <div>
                <div className="p-2 text-sm bg-gray-100 dark:bg-dark-third rounded-2xl">
                  <span className="block font-semibold">John Doe</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                    voluptate ipsa animi corrupti unde, voluptatibus expedita
                    suscipit, itaque, laudantium accusantium aspernatur officia
                    repellendus nihil mollitia soluta distinctio praesentium
                    nulla eos?
                  </span>
                </div>
                <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                  <span className="font-semibold cursor-pointer">Like</span>
                  <span>.</span>
                  <span className="font-semibold cursor-pointer">Reply</span>
                  <span>.</span>
                  10m
                </div>
                {/* <!-- COMMENT --> */}
                <div className="flex space-x-2">
                  <Image
                    src={img1}
                    alt="Profile picture"
                    className="rounded-full w-9 h-9"
                  />
                  <div>
                    <div className="p-2 text-sm bg-gray-100 dark:bg-dark-third rounded-2xl">
                      <span className="block font-semibold">John Doe</span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
                      <span>.</span>
                      <span className="font-semibold cursor-pointer">
                        Reply
                      </span>
                      <span>.</span>
                      10m
                    </div>
                  </div>
                </div>
                {/* <!-- END COMMENT --> */}
              </div>
            </div>
            <div className="px-4 py-2">
              <div className="flex space-x-2">
                <Image
                  src={img1}
                  alt="Profile picture"
                  className="rounded-full w-9 h-9"
                />
                <div className="flex items-center justify-between flex-1 px-3 bg-gray-100 rounded-full dark:bg-dark-third">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="flex-1 bg-transparent outline-none"
                  />
                  <div className="flex items-center justify-center space-x-0">
                    <span className="grid text-xl text-gray-500 rounded-full cursor-pointer w-7 h-7 place-items-center hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-second">
                      <i className="bx bx-smile"></i>
                    </span>
                    <span className="grid text-xl text-gray-500 rounded-full cursor-pointer w-7 h-7 place-items-center hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-second">
                      <i className="bx bx-camera"></i>
                    </span>
                    <span className="grid text-xl text-gray-500 rounded-full cursor-pointer w-7 h-7 place-items-center hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-second">
                      <i className="bx bxs-file-gif"></i>
                    </span>
                    <span className="grid text-xl text-gray-500 rounded-full cursor-pointer w-7 h-7 place-items-center hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-second">
                      <i className="bx bx-happy-heart-eyes"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END COMMENT FORM --> */}
            {/* <!-- END COMMENT --> */}
          </div>
          {/* <!-- END LIST COMMENT -->*/}
        </div>
      </div>
    </section>
  );
}
