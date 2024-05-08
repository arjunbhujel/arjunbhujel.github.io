import Link from "next/link"
import { getBlogPosts } from "../db/content"
import "@/styles/blogPage.css"

export const metadata = {
  title: "Blog",
  description: "Writing on Economics, Politics, Design, and many more.",
}

export default function BlogPage() {
  let allBlogs = getBlogPosts()

  return (
    <section>
      <h1 className="blog_heading">read my blog</h1>

      <div className="article">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="post_link"
              href={`/blog/${post.slug}`}
            >
              <div className="post">
                <div className="detail">
                  <p className="post_title">{post.metadata.title}</p>
                  <p className="post_time">{post.readingTime} min read</p>
                </div>
                <div className="line"></div>
                <div className="date">
                  <p className="post_date">{post.metadata.publishedAt}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  )
}
