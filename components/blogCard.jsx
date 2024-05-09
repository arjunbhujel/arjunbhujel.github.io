import Link from "next/link"

export const BlogCard = ({ blog }) => {
  return (
    <>
      <article className="blogCard">
        <header>
          <h3 className="blogCard-head">
            <Link href={`/blog/${blog.slug}`}>{blog.metadata.title}</Link>
          </h3>
          <p className="blogCard-summary">{blog.metadata.summary}</p>
        </header>
        <footer className="blogCard-foot">
          <time>
            {new Date(blog.metadata.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>·</span>
          <span className="blogCard-readingTime">
            {blog.readingTime} MIN READ
          </span>
        </footer>
      </article>
    </>
  )
}
