import React, { useEffect, useState } from 'react';
import { posts } from '../../blog';
import matter from 'gray-matter';
import { Link } from 'react-router-dom';
import { FaRegSadTear } from 'react-icons/fa';

function getAllTags(parsedPosts) {
  const tagSet = new Set();
  parsedPosts.forEach(post => {
    if (post.data.tags && Array.isArray(post.data.tags)) {
      post.data.tags.forEach(tag => tagSet.add(tag));
    }
  });
  return Array.from(tagSet);
}

function getExcerpt(content, description) {
  if (description) return description;
  const plain = content.replace(/[#*_`>\-\n]/g, '').trim();
  return plain.length > 200 ? plain.slice(0, 200) + '...' : plain;
}

const BlogHome = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [search, setSearch] = useState('');
  const [parsedPosts, setParsedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    Promise.all(
      posts.map(post =>
        fetch(post.url)
          .then(res => {
            if (!res.ok) throw new Error('Failed to fetch ' + post.url);
            return res.text();
          })
          .then(md => {
            const parsed = matter(md);
            return {
              slug: post.slug,
              data: parsed.data || {},
              content: parsed.content || '',
            };
          })
      )
    )
      .then(setParsedPosts)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const allTags = getAllTags(parsedPosts);

  const filteredPosts = parsedPosts.filter(post => {
    const { data, content } = post;
    const matchesTag = selectedTag === 'all' || (data.tags && data.tags.includes(selectedTag));
    const titleMatch = data.title ? data.title.toLowerCase().includes(search.toLowerCase()) : false;
    const descMatch = data.description ? data.description.toLowerCase().includes(search.toLowerCase()) : false;
    const contentMatch = content ? content.toLowerCase().includes(search.toLowerCase()) : false;
    const matchesSearch = titleMatch || descMatch || contentMatch;
    return matchesTag && matchesSearch;
  });

  if (loading) {
    return <div className="max-w-screen-xl mx-auto py-16 text-center text-gray-400">Loading blog posts...</div>;
  }
  if (error) {
    return <div className="max-w-screen-xl mx-auto py-16 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 text-designColor">Blog</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-3 py-1 rounded-full border text-sm font-semibold transition ${selectedTag === 'all' ? 'bg-designColor text-white border-designColor shadow' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-designColor hover:text-white'}`}
          onClick={() => setSelectedTag('all')}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`px-3 py-1 rounded-full border text-sm font-semibold transition ${selectedTag === tag ? 'bg-designColor text-white border-designColor shadow' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-designColor hover:text-white'}`}
            onClick={() => setSelectedTag(tag)}
          >
            #{tag}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search blog posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-8 px-4 py-2 rounded border border-gray-700 bg-[#23272b] text-gray-200 focus:outline-none focus:border-designColor"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredPosts.length === 0 && (
          <div className="col-span-full text-center text-gray-400 flex flex-col items-center gap-2 py-12">
            <FaRegSadTear className="text-5xl mb-2 text-designColor" />
            <span className="text-lg">No posts found. Try a different tag or search term.</span>
          </div>
        )}
        {filteredPosts.map((post, idx) => {
          const { data, content, slug } = post;
          return (
            <div key={slug} className="bg-gradient-to-r from-bodyColor to-[#202327] rounded-lg shadow-shadowOne p-6 flex flex-col">
              {data.image && (
                <img src={data.image} alt={data.title || 'Blog post image'} className="w-full h-64 object-cover rounded mb-4" />
              )}
              <h2 className="text-2xl font-bold mb-2 text-designColor">{data.title}</h2>
              <p className="text-gray-400 text-sm mb-2">{data.date}</p>
              <p className="mb-4 text-gray-300">{getExcerpt(content, data.description)}</p>
              {data.tags && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {data.tags.map(tag => (
                    <button
                      key={tag}
                      className="px-2 py-1 text-xs bg-designColor bg-opacity-20 text-designColor rounded-md border border-designColor hover:bg-designColor hover:text-white transition"
                      onClick={() => setSelectedTag(tag)}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              )}
              <Link to={`/blog/${slug}`} className="text-designColor hover:underline font-semibold mt-auto">Read More</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogHome; 