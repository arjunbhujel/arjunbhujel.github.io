import { getBlogPosts } from "../db/blog"
import Container from "@/components/container"
import Separator from "@/components/separator"
import { BlogCard } from "@/components/blogCard"
import { Fragment } from "react"

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on frontend development, design, and more.",
}
export default function Blog() {
  const allBlogs = getBlogPosts()
  return (
    <Container>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((blog, index, array) => (
          <Fragment key={blog.slug}>
            <BlogCard blog={blog} />
            {index !== array.length - 1 && <Separator />}
          </Fragment>
        ))}
    </Container>
  )
}
