"use client";
import { useState,useEffect} from 'react';
import axios from 'axios';
export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const[name,setName]=useState('');
  const [description,setDescription]=useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const[data,setData]=useState([])
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
   const fetchPosts = () => {
    axios.get('/api/posts')
      .then((res) =>{
        console.log("Fetched posts:", res.data);
        setData(res.data)}) 
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!title || !content) {
      setError('Both fields are required');
      return;
    }
  
    setLoading(true);
    setError(null);
  
    try {
      const method = editMode ? 'PUT' : 'POST';
      const url = editMode ? `/api/posts/${editId}` : '/api/posts';
  
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, title, content, description }),
      });
  
      if (!response.ok) throw new Error('Failed to submit');
  
      // Reset form
      setName('');
      setTitle('');
      setContent('');
      setDescription('');
      setEditMode(false);
      setEditId(null);
      fetchPosts();
      alert(editMode ? 'Post updated!' : 'Post created!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };
  const editPost = (post: any) => {
    setEditMode(true);
    setEditId(post.id);
    setName(post.name);
    setTitle(post.title);
    setContent(post.content);
    setDescription(post.description);
  };
    
  const deletePost = (id: string) => {
    axios.delete(`/api/posts/${id}`)
      .then(() => {
        setData(prev => prev.filter(a => a.id !== id)); // not _id
      })
      .catch(error => console.error('Delete error:', error));
  };
  return (
    <>
<div>
  <style jsx>{`
      .form-control {
          width: 100%;
          padding: 0.5rem;
          margin-top: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 0.25rem;
      }
  `}</style>

  <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
            </label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-control border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
            </label>
            <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="form-control border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
            </label>
            <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="form-control border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
        </div>
        <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
            </label>
            <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="form-control border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
        </div>
        <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
        >
            {loading ?'Creating...' :editMode ?"update post":'Create Post'}
        </button>
          {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
  </div>

  <div className="mt-10 max-w-4xl mx-auto overflow-x-auto">
  <table className="min-w-full table-auto border-collapse border border-gray-300">
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Content</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
        <th colSpan="2" className="border border-gray-300 px-4 py-2 text-left">actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((a: any, index) => (
        <tr key={index} className="hover:bg-gray-50">
          <td className="border border-gray-300 px-4 py-2">{a.name}</td>
          <td className="border border-gray-300 px-4 py-2">{a.title}</td>
          <td className="border border-gray-300 px-4 py-2">{a.content}</td>
          <td className="border border-gray-300 px-4 py-2">{a.description}</td>
          <td className="border border-gray-300 px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded"  onClick={() => editPost(a)}>edit</button></td>
          <td className="border border-gray-300 px-4 py-2"><button className="bg-red-500 text-white px-4 py-2 rounded" onClick={()=>{deletePost(a.id)}}>delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  </div>
  </>
);    
 }