import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts"

import { salesPerProduct } from "@/lib/data"


export default function SalePerProductGraph() {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="total_sales"
            startAngle={180}
            endAngle={0}
            data={salesPerProduct}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
  )
}
