import React, { useContext } from "react";
import BlogContext from "../../store/blog-context";
import BlogCard from "./BlogCard";
function BlogList() {
  const blogContext = useContext(BlogContext);

  return (
    <div>
      {blogContext.blogs.map((blog) => (
        <BlogCard blog={blog} key={blog.slug} />
      ))}
    </div>
  );
}

export default BlogList;
