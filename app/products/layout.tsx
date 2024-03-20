type ProductLayoutType = {
    children: React.ReactNode;
}

export const metadata = {
  title: "All Products"
}

export default function ProductsLayout({ children }: ProductLayoutType) {
  return (
    <>
     {children}
    </>
  )
}
