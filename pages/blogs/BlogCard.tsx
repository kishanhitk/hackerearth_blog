import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { DOMElement, useEffect } from "react";
import { useRef } from "react";
import { BlogEntity } from "../../interfaces/Blog";
interface IBlogCardProps {
  blog: BlogEntity;
}
function BlogCard({ blog }: IBlogCardProps) {
  const description = useRef<HTMLDivElement>();
  useEffect(() => {
    description.current.innerHTML = blog.content.slice(0, 300);
  }, []);
  return (
    <div>
      <Heading>{blog.title}</Heading>
      {/* <Text>{blog.content.slice(0, 300)}.......</Text> */}
      <div ref={description}></div>
      <Link href={`blogs/${blog.slug}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
}

export default BlogCard;
