import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../../blog';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  const [data, setData] = useState({});
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!post) return;
    setLoading(true);
    setError(null);
    fetch(post.url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch post');
        return res.text();
      })
      .then(md => {
        const parsed = matter(md);
        setData(parsed.data || {});
        setContent(parsed.content || '');
        setLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setLoading(false);
      });
  }, [post]);

  if (!post) {
    return (
      <div className="max-w-screen-md mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-designColor">Post Not Found</h2>
        <p className="text-gray-400 mb-2">No post found for slug: <span className="font-mono text-designColor">{slug}</span></p>
        <p className="text-gray-400 mb-4">Available slugs: <span className="font-mono text-designColor">{posts.map(p => p.slug).join(', ')}</span></p>
        <Link to="/blog" className="text-designColor hover:underline flex items-center justify-center gap-2"><FaArrowLeft /> Back to Blog</Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-screen-md mx-auto py-16 text-center text-gray-400">Loading post...</div>
    );
  }

  if (error) {
    return (
      <div className="max-w-screen-md mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Error loading post</h2>
        <p className="text-gray-400 mb-4">{error}</p>
        <Link to="/blog" className="text-designColor hover:underline flex items-center justify-center gap-2"><FaArrowLeft /> Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-md mx-auto py-16">
      <Link to="/blog" className="text-designColor hover:underline mb-6 inline-flex items-center gap-2 text-lg font-semibold"><FaArrowLeft /> Back to Blog</Link>
      {data.image && (
        <img src={data.image} alt={data.title || 'Blog post image'} className="w-full h-64 object-cover rounded mb-6" />
      )}
      <h1 className="text-4xl font-bold mb-2 text-designColor">{data.title || 'Untitled Post'}</h1>
      <p className="text-gray-400 text-sm mb-2">{data.date || 'No date'}</p>
      {data.tags && (
        <div className="flex flex-wrap gap-2 mb-6">
          {data.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-designColor bg-opacity-20 text-designColor rounded-md border border-designColor">#{tag}</span>
          ))}
        </div>
      )}
      <div className="prose prose-invert max-w-none text-gray-200 mb-10">
        <ReactMarkdown>{content || 'No content available.'}</ReactMarkdown>
      </div>
      <div className="flex items-center gap-4 mt-10 p-4 bg-[#23272b] rounded-lg shadow">
        <FaUserCircle className="text-4xl text-designColor" />
        <div>
          <div className="font-bold text-lg text-gray-100">Ayodele Lawal</div>
          <div className="text-gray-400 text-sm">Frontend Engineer & Blogger</div>
          <div className="text-gray-400 text-xs mt-1">Sharing insights and tutorials on modern web development.</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 