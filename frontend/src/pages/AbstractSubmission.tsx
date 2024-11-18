import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const AbstractSubmission: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [authors, setAuthors] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically make an API call to submit the abstract
      console.log('Abstract submitted:', { title, abstract, authors, keywords });
      navigate(`/conferences/${id}`);
    } catch (error) {
      console.error('Error submitting abstract:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-white">Submit Abstract</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-200 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="authors" className="block text-sm font-medium text-gray-200 mb-2">
            Authors
          </label>
          <input
            type="text"
            id="authors"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Separate multiple authors with commas"
            required
          />
        </div>

        <div>
          <label htmlFor="abstract" className="block text-sm font-medium text-gray-200 mb-2">
            Abstract
          </label>
          <textarea
            id="abstract"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            rows={6}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="keywords" className="block text-sm font-medium text-gray-200 mb-2">
            Keywords
          </label>
          <input
            type="text"
            id="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Separate keywords with commas"
            required
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate(`/conferences/${id}`)}
            className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Submit Abstract
          </button>
        </div>
      </form>
    </div>
  );
};

export default AbstractSubmission;