import Link from "next/link";
import React, { useContext } from "react";
import BlogContext from "../../store/blog-context";
import BlogList from "./BlogList";

function index() {
  const blogContext = useContext(BlogContext);
  return (
    <div>
      <Link href="/">Home</Link>
      Here are my top Blogs.
      <p>I have {blogContext.blogs.length} Blogs</p>
      <BlogList></BlogList>
      <Link href="/blog/new">Create New Blog</Link>
    </div>
  );
}

export default index;
