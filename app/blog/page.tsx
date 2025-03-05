import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog-test',
  description: 'Read',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">blog list</h1>
      <BlogPosts />
    </section>
  )
}
