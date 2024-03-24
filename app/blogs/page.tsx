import { collection, getDocs } from "firebase/firestore";
import { database } from "@/lib/firebase";
import Link from "next/link"

import BlogCard from "@/components/BlogCard";

export default async function BlogPage() {
  let blogs: Blog[] = [];

  const querySnapshot = await getDocs(collection(database, "blogs"));
  querySnapshot.forEach((doc) => {

    const blogData = {
      id: doc.id,
      ...doc.data(),
    }
    blogs.push(blogData as Blog);
  });

  const content = (
    <section className="h-screen bg-black">
      <h1 className="text-white font-bold text-2xl pt-5
      w-[90%] mx-auto">Blogs</h1>

      <section className="w-[90%] mx-auto mt-5 grid grid-cols-2
      md:grid-cols-3 gap-x-2">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}
          className="">
            <BlogCard
              id={blog.id}
              title={blog.title}
              content={blog.content}
              date_posted={blog.date_posted}
              author={blog.author}
            />
          </Link>
        ))}
      </section>
    </section>
  );

  return content;
}