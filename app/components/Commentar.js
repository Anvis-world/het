'use client'

import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, User, Clock } from 'lucide-react';

const Commentar = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sample comments
  const sampleComments = [
    {
      id: 1,
      name: "John Doe",
      message: "Great portfolio! Love the design and animations.",
      timestamp: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Jane Smith",
      message: "Very impressive work. The UI/UX is fantastic!",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: 3,
      name: "Mike Johnson",
      message: "Professional and modern. Keep up the excellent work!",
      timestamp: new Date(Date.now() - 172800000).toISOString(),
    }
  ];

  useEffect(() => {
    setComments(sampleComments);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.message.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const comment = {
      id: Date.now(),
      name: newComment.name,
      message: newComment.message,
      timestamp: new Date().toISOString(),
    };

    setComments(prev => [comment, ...prev]);
    setNewComment({ name: '', message: '' });
    setIsSubmitting(false);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="w-full">
      <div className="flex items-center space-x-2 mb-6">
        <MessageCircle className="w-6 h-6 text-purple-400" />
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Comments
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={newComment.name}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 rounded-xl text-white dark:text-white light:text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              name="message"
              placeholder="Write your comment..."
              value={newComment.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full pl-12 pr-4 py-3 bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 rounded-xl text-white dark:text-white light:text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 resize-none"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.98] flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Posting...' : 'Post Comment'}</span>
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white/5 dark:bg-white/5 light:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-black/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {comment.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-white dark:text-white light:text-gray-900 font-medium text-sm">
                    {comment.name}
                  </h4>
                  <div className="flex items-center space-x-1 text-gray-400 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{formatDate(comment.timestamp)}</span>
                  </div>
                </div>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm leading-relaxed">
                  {comment.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Commentar;