import React from 'react';
import './blog.css';
import { asset } from '../../../assets/asset';

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2>Check our Latest Blogposts</h2><br />

      <div className="blog-grid">
        <div className="blog-card">
          <img 
            src="https://editorialelearning.com/wp-content/uploads/2023/01/deep-learning.jpg" 
            alt="deeplearning-roadmap"
          />
          <h3>Deep learning Roadmap</h3>
          <p>The world has changed recently, becoming faster and wiser ...</p>
          <a href="#" className="read-more">Read More &rarr;</a>
        </div>

        <div className="blog-card">
          <img 
            src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*-XDlR9QVdxVAu2UG8KIH1g.png" 
            alt="Machine learning Roadmap"
          />
          <h3>Machine learning Roadmap</h3>
          <p>The world has changed recently, becoming faster and wiser ...</p>
          <a href="#" className="read-more">Read More &rarr;</a>
        </div>

        <div className="blog-card">
          <img 
            src={asset.cypher30} 
            alt="Cypher 3.0 Guide" class="cypher"
          />
          <h3>Cypher 3.0 Guide</h3>
          <p>Coming Soon ...</p>
          <a href="#" className="read-more">Read More &rarr;</a>
        </div>

        <div className="blog-card">
          <img 
            src={asset.coding_comp} 
            alt="competitive Code" 
          />
          <h3>Competitive Coding Guide</h3>
          <p>Competitive programming is like a programming sport involving many...</p>
          <a href="#" className="read-more">Read More &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
