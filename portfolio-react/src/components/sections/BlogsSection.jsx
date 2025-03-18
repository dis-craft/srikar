import { motion } from 'framer-motion';
import './BlogsSection.css';

const BlogsSection = () => {
  const blogs = [
    {
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to create your first component.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      link: '#'
    },
    {
      title: 'The Future of AI',
      excerpt: 'Exploring the latest developments in artificial intelligence and machine learning.',
      date: 'March 10, 2024',
      readTime: '8 min read',
      link: '#'
    },
    {
      title: 'Web Development Best Practices',
      excerpt: 'Essential tips and tricks for building modern web applications.',
      date: 'March 5, 2024',
      readTime: '6 min read',
      link: '#'
    }
  ];

  return (
    <section className="blogs-section" id="blogs">
      <div className="section-header">
        <h2>Latest Blogs</h2>
        <div className="section-divider"></div>
      </div>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <motion.article
            key={blog.title}
            className="blog-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <a href={blog.link} className="read-more">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection; 