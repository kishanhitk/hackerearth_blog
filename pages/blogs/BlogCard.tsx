import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BlogEntity } from "../../interfaces/Blog";
interface IBlogCardProps {
  blog: BlogEntity;
}
function BlogCard({ blog }: IBlogCardProps) {
  return (
    <div>
      <Heading>{blog.title}</Heading>
      <Text>{blog.content.slice(0, 300)}.......</Text>
      <Link href={`blogs/${blog.slug}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
}

export default BlogCard;
