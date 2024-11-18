import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Comment } from '../types';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (content: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="p-4 bg-gray-800 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium text-gray-200">{comment.userName || 'Anonymous'}</span>
              <span className="text-sm text-gray-400">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-300">{comment.content}</p>
          </div>
        ))}
      </div>
      {user && (
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex flex-col space-y-2">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors self-end"
            >
              Post Comment
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CommentSection;