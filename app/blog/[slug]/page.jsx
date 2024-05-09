import { Suspense } from "react"
import { notFound } from "next/navigation"

import { getBlogPosts } from "@/app/db/blog"
import { CustomMDX } from "@/components/mdx"
import { formatDate } from "@/lib/utils"

const generateMetadata = ({ params }) => {
  let blog = getBlogPosts().find((blog) => blog.slug === params.slug)
  if (!blog) {
    return
  }
  let {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = blog.metadata

  let ogImage = `https://arjunbhujel.com.np/logo.svg`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://arjunbhujel.com.np/blog/${blog.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "player",
      title,
      description,
      images: [ogImage],
    },
  }
}

export async function generateStaticParams() {
  return generateMetadata
}

export default function BlogDetailPage({ params }) {
  const blog = getBlogPosts().find((blog) => blog.slug === params.slug)
  if (!blog) {
    notFound()
  }
  return (
    <section className="content">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.metadata.title,
            datePublished: blog.metadata.publishedAt,
            dateModified: blog.metadata.publishedAt,
            description: blog.metadata.summary,
            image: blog.metadata.image
              ? `https://onurhan.dev${blog.metadata.image}`
              : `https://onurhan.dev/og?title=${blog.metadata.title}`,
            url: `https://onurhan.dev/blog/${blog.slug}`,
            author: {
              "@type": "Person",
              name: "Arjun Bhujel",
            },
          }),
        }}
      />
      <h1 className="content_title">{blog.metadata.title}</h1>
      <div className="content_brief">
        <Suspense fallback={<p className="h-5" />}>
          <p className="content_brief-date">
            {formatDate(blog.metadata.publishedAt)}
          </p>
          <span className="content_brief-line">—</span>
          <p className="content_brief_reading">{blog.readingTime} min read</p>
        </Suspense>
      </div>
      <article className="content_body">
        <CustomMDX source={blog.content} />
      </article>
    </section>
  )
}
