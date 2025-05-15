"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content,setContent] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/react-form/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, name,content, description }),
      });
      if (response.ok) {
        router.push("/products-db");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-900">
      <h1 className="text-2xl font-bold text-white">Create Product</h1>
    
   
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-96 ">
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2  border rounded"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="text-white">
        Name
        <input
          type="text"
          className="block w-full p-2  border rounded"
          name="price"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2  border rounded"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label className="text-white">
       content
        <textarea
          className="block w-full p-2  border rounded"
          name="description"
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="block w-full p-2 mt-7 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
    </div>
  );
}
