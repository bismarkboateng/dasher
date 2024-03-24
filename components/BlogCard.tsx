

export default function BlogCard(props: Blog) {
  return (
    <section className="text-white bg-[#141A29] p-2 rounded-md
    border border-[#2c2c2c] mt-2 2xl:py-5">
     <h1 className="text-white text-lg truncate font-bold">{props.title}</h1>
     <p className="mt-3 h-[60%] overflow-hidden truncate">
      {props.content}
     </p>
     <div className="mt-4 text-xs">
        By <span>{props.author}</span>
     </div>
    </section>
  )
}