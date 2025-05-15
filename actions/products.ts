"use server";

import { addProduct, updateProduct, deleteProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type Errors = {
  title?: string;
  name?: string;
  content?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export async function createProduct(prevState: FormState, formData: FormData) {
  const title = formData.get("title") as string;
  const name = formData.get("name") as string;
  const content = formData.get("content") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!name) {
    errors.name = "name is required";
  }
  if (!content) {
    errors.name = "content is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProduct(title, name,content, description);
  redirect("/products-db");
}

export async function editProduct(   
  id: string,
  prevState: FormState,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const name = formData.get("name") as string;
  const content = formData.get("content") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!name) {
    errors.name = "name is required";
  }
  if (!content) {
    errors.name = "content is required";
  }


  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await updateProduct(id, title, content,name, description);
  redirect("/products-db");
}

export async function removeProduct(id: string) {
  await deleteProduct(id);
  revalidatePath("/products-db");
}
