import { Input, Button, useConst } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useContext, useRef, useState } from "react";
import { BlogEntity } from "../../../interfaces/Blog";
import BlogContext from "../../../store/blog-context";
import SunEditorCore from "suneditor/src/lib/core";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { set } from "lodash";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
function index() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const router = useRouter();
  const blogContext = useContext(BlogContext);
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
  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };
  const handleChange = (contentFromEditor) => {
    setcontent(contentFromEditor);
  };
  return (
    <div>
      <Link href="/">Home</Link>
      Create New Blog
      <form onSubmit={handleSubmit}>
        <Input value={title} onChange={(e) => settitle(e.target.value)} />
        {/* <Input value={content} onChange={(e) => setcontent(e.target.value)} /> */}
        <SunEditor
          getSunEditorInstance={getSunEditorInstance}
          onChange={handleChange}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default index;
