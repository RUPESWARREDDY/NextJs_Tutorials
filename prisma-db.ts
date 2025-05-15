import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const seedProducts = async () => {
//   const count = await prisma.post.count();
//   if (count === 0) {
//     await prisma.post.createMany({
//       data: [
//         {name:"eswar", title: "Product 1",description: "Description 1" ,content:"content1" },
//         {name:"eswar", title: "Product 2",description: "Description 2" ,content:"content2"},
//         {name:"eswar", title: "Product 3", description: "Description 3",content:"content3" },
//       ],
//     });
//   }
// };
// seedProducts();

export async function getProducts(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.post.findMany();
}

export async function getProduct(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.post.findUnique({
    where: { id },
  });
}

export async function addProduct(
  title: string,
  name: string,
  description: string,
  content: string

) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.post.create({
    data: { title, name, description,content},
  });
}

export async function updateProduct(
  id: string,
  title: string,
  name:string,
  content:string,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.post.update({
    where: { id },
    data: { title,content,name, description },
  });
}

export async function deleteProduct(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.post.delete({
    where: { id },
  });
}
