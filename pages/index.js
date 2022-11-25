import { useState } from "react";
import { useSelector } from "react-redux";
import MainLayout from "../components/layout/MainLayout";
import Post from "../components/Post";
import Login from "./login";
import post from "./post";

export default function Home({ posts=[] }) {
  const is_auth = useSelector((state) => state.authData.is_authenticated);
  return (
    <>
      {is_auth ? (
        <MainLayout>
          {posts.map((post) => (
            <Post post={post} isDetailed={false} />
          ))}
        </MainLayout>
      ) : (
        <Login />
      )}
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/posts`);
  console.log(res)
    const mydata = await res.json();
    return { props: { posts: mydata.posts } };
  

  // Pass data to the page via props
}
