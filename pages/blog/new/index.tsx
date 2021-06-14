import { Input, Button, useConst } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useContext, useState } from "react";
import { BlogEntity } from "../../../interfaces/Blog";
import BlogContext from "../../../store/blog-context";

function index() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const router = useRouter();
  const blogContext = useContext(BlogContext);
  console.log(blogContext.blogs);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const blog: BlogEntity = {
      title: title,
      content: content,
      slug: title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, ""),
    };
    blogContext.addBlog(blog);
    router.push("/blogs");
  };
  return (
    <div>
      <Link href="/">Home</Link>
      Create New Blog
      <form onSubmit={handleSubmit}>
        <Input value={title} onChange={(e) => settitle(e.target.value)} />
        <Input value={content} onChange={(e) => setcontent(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default index;
