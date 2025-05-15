"use client";

import { FormState, createProduct } from "@/actions/products";
import { Submit } from "@/components/submit";
import { useActionState } from "react";

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction] = useActionState(createProduct, initialState);

  return (
    <>
    <h1 className="text-2xl font-bold text-center">
    Create a new product
  </h1>
    <div className="flex items-center justify-center h-screen bg-gray-800">
    
  
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="text-white">
        Name
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="name"
          />
        </label>
        {state.errors.name && (
          <p className="text-red-500">{state.errors.name}</p>
        )}
      </div>
      <div>
        <label className="text-white">
         content
          <textarea
            className="block w-full p-2 text-black border rounded"
            name="content"
          />
        </label>
        {state.errors.content && (
          <p className="text-red-500">{state.errors.content}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded"
            name="description"
          />
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      {/* <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        Submit
      </button> */}
      <Submit />
    </form>
    </div>
    </>
  );
}
