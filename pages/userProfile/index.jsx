import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import Post from "../../components/post";

export default function Index() {
  return (
    <MainLayout>
      <div className="grid grid-cols-3">
        <div className="">hello</div>
        <div className="col-span-2 ">
          <Post />
        </div>
      </div>
    </MainLayout>
  );
}
