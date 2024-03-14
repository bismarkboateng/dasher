import { collection, getDocs } from "firebase/firestore";
import { database } from "@/lib/firebase";
import TableHead from "@/components/TableHead"
import RenderProductForm from "@/components/RenderProductForm";

export default async function Products() {
  let products = [];
  

  const querySnapshot = await getDocs(collection(database, "products"));
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  const thStyles = "text-left py-1"

  return (
    <section className="relative w-full bg-black h-screen text-white">
      <RenderProductForm />
      <TableHead />
      <section className="min-w-[500px] overflow-x-hidden h-[40vh]">
        <table className="border-collapse text-base ml-3 w-full h-full">
          <thead className="mb-2">
            <tr>
              <th className={thStyles}>Name</th>
              <th className={thStyles}>Brand</th>
              <th className={thStyles}>Quantity</th>
              <th className={thStyles}>Size</th>
              <th className={thStyles}>Price</th>
              <th className={thStyles}>Color</th>
            </tr>
          </thead>
          <tbody> 
            {products.map((product) => (
              <tr key={product.product_name} className="border-b border-[#ccc]">
                <td className="text-base text-left">{product.product_name}</td>
                <td className={thStyles}>{product.brand}</td>
                <td className={thStyles}>{product.quantity}</td>
                <td className={thStyles}>{product.size}</td>
                <td className={thStyles}>{product.price}</td>
                <td className={thStyles}>{product.color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}
