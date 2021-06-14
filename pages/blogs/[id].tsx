import { useContext } from "react";
import { useRouter } from "next/router";
import BlogContext from "../../store/blog-context";
import { Heading } from "@chakra-ui/react";

function Blog() {
  const blogContext = useContext(BlogContext);
  const router = useRouter();
  const slug = router.query["id"];
  console.log(router.query["id"]);
  const blog = blogContext.blogs.find((b) => b.slug === slug);
  return (
    <div>
      <Heading>{blog?.title}</Heading>
      <Heading>{blog?.content}</Heading>
    </div>
  );
}

export default Blog;
