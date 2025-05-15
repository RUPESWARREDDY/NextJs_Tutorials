import { addProduct } from "@/prisma-db";

export async function POST(request: Request) {
  const body = await request.json();
  const { title, name,content, description } = body;
  const product = await addProduct(title, name,content, description);
  return new Response(JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  });
}
