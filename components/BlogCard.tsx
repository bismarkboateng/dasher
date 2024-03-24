

export default function BlogCard(props: Blog) {
  return (
    <section className="text-white bg-[#141A29] p-2 rounded-md
    border border-[#2c2c2c]">
     <h1 className="text-white text-lg truncate">{props.title}</h1>
     <p className="mt-3 h-[60%] overflow-hidden">
      {props.content}
     </p>
     <div className="mt-3">
        By <span>{props.author}</span>
     </div>
    </section>
  )
}