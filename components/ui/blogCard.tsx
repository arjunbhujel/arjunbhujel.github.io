import Link from "next/link"

import "@/styles/ui/blogCard.css"

export const BlogCard = ({ blog }) => {
  return (
    <>
      <article className="blogCard">
        <div className="blogCard_headText">
          <h3 className="blogCard_head">
            <Link href={`/blog/${blog.slug}`}>{blog.metadata.title}</Link>
          </h3>
          <p className="blogCard_summary">{blog.metadata.summary}</p>
        </div>
        <footer className="blogCard_foot">
          <time>
            {new Date(blog.metadata.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>·</span>
          <span className="blogCard_readingTime">
            {blog.readingTime} MIN READ
          </span>
        </footer>
      </article>
    </>
  )
}
