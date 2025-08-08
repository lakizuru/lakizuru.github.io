import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ExternalLink, FileText, Video } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  readTime: string;
  type: 'article' | 'video';
  platform: string;
  image: string;
}

interface BlogData {
  posts: BlogPost[];
}

export function Blog() {
  const [blogData, setBlogData] = useState<BlogData | null>(null);

  useEffect(() => {
    fetch('/data/blog.json')
      .then(response => response.json())
      .then(data => setBlogData(data))
      .catch(error => console.error('Error loading blog data:', error));
  }, []);

  if (!blogData) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Blog & Publications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Sharing knowledge through articles and videos on technology topics I'm passionate about
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.posts.map((post, index) => (
              <article
                key={index}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Post Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Post Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`flex items-center px-3 py-1 text-white text-sm font-semibold rounded-full ${
                      post.type === 'video' ? 'bg-red-500' : 'bg-blue-500'
                    }`}>
                      {post.type === 'video' ? (
                        <>
                          <Video className="w-4 h-4 mr-1" />
                          Video
                        </>
                      ) : (
                        <>
                          <FileText className="w-4 h-4 mr-1" />
                          Article
                        </>
                      )}
                    </span>
                  </div>

                  {/* External Link */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-800" />
                    </a>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {post.platform}
                    </span>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}