import { useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import BlogContext from "../../store/blog-context";
import { Heading } from "@chakra-ui/react";

function Blog() {
  const blogContext = useContext(BlogContext);
  const router = useRouter();
  const slug = router.query["id"];
  console.log(router.query["id"]);
  const blog = blogContext.blogs.find((b) => b.slug === slug);
  const description = useRef<HTMLDivElement>();
  useEffect(() => {
    description.current.innerHTML = blog.content.slice(0, 300);
  }, []);
  return (
    <div>
      <Heading>{blog?.title}</Heading>
      <div ref={description}></div>
    </div>
  );
}

export default Blog;
