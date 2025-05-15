import { getProducts } from "@/prisma-db";
import { ProductDetail } from "./product-detail";

export type Product = {
  id: string;
  title: string;
  content:string,
  name: string;
  description: string | null;
};

export default async function ProductsPrismaDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);
console.log(products);
  return <ProductDetail products={products} />;
}
