import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/layout/MainLayout";
import Post from "../../components/Post";

export default function Index() {
  const router = useRouter();
  const { pid } = router.query;
  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://dummyjson.com/posts/${pid}`);
      const mydata = await res.json();
      // console.log(res, mydata);
      setPost(mydata);
    })();
  }, [pid]);
  return (
    <MainLayout>
      <Post post={post} isDetailed={true} />
    </MainLayout>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://dummyjson.com/posts`);

//   const mydata = await res.json();

//   // Pass data to the page via props
//   return { props: {} };
// }

export async function getServerSideProps() {
  return { props: {} };
}
