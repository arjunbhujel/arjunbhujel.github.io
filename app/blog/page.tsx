import { Fragment } from "react";
import type { Metadata } from "next";

import { getBlogPosts } from "../db/blog";
import Container from "@/components/ui/container";
import Separator from "@/components/ui/separator";
import { BlogCard } from "@/components/ui/blogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on frontend development, design, and more.",
};

export default function Blog() {
  const allBlogs = getBlogPosts();

  return (
    <Container>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((blog, index, array) => (
          <Fragment key={blog.slug}>
            <BlogCard blog={blog} />
            {index !== array.length - 1 && <Separator />}
          </Fragment>
        ))}
    </Container>
  );
}
