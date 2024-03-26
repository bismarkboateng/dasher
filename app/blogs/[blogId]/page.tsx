import { doc, getDoc } from "firebase/firestore";
import { database } from "@/lib/firebase";

type BlogDetailProp = {
  params: {
    blogId: string;
  };
};

export default async function BlogDetailPage({
  params: { blogId },
}: BlogDetailProp) {
  const docRef = doc(database, "blogs", blogId);
  const docSnapshot = await getDoc(docRef);

  let document: DetailBlog;

  if (docSnapshot.exists()) {
    document = {
      ...(docSnapshot.data() as DetailBlog),
    };
  } else {
    return <p className="text-white font-normal text-xs">No Blog</p>;
  }

  return (
    <section>
      <article className="pt-10">
        <h1 className="text-white font-bold text-2xl text-center">
          {document.title}
        </h1>

        <p className="text-white mt-10 w-[95%] mx-auto leading-8">{document.content}</p>

        <div className="text-white text-xs ml-2 2xl:ml-10 mt-10">
          Posted on <span className="font-bold">{document.date_posted}</span> By{" "}
          <span className="font-bold">{document.author}</span>
        </div>
      </article>
    </section>
  );
}
