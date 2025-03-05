import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        h1 title
      </h1>
      <p className="mb-4">
        {`个人简介`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
