import React from 'react';
import './Blog_p.css';
import { asset } from '../../assets/asset';

import { Link } from 'react-router-dom';

function Blog_p(){
    return(
        <>
        <div className="bb">
            <div className="link_name">/ Blogs</div>
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
                    <a href="https://medium.com/@ArianAmani/the-deep-learning-road-map-that-i-took-c29120b0f5e2" className="read-more">Read More &rarr;</a>
                    </div>

                    <div className="blog-card">
                    <img 
                        src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*-XDlR9QVdxVAu2UG8KIH1g.png" 
                        alt="Machine learning Roadmap"
                    />
                    <h3>Machine learning Roadmap</h3>
                    <p>The world has changed recently, becoming faster and wiser ...</p>
                    <a href="https://medium.com/@ashujha44/my-machine-learning-journey-perfect-roadmap-for-beginners-78208c47fb92" className="read-more">Read More &rarr;</a>
                    </div>

                    <div className="blog-card">
                    <img 
                        src={asset.cypher30} 
                        alt="Cypher 3.0 Guide" class="cypher"
                    />
                    <h3>Cypher 3.0 Guide</h3>
                    <p>Coming Soon ...</p>
                    <Link to="/Cypher30" >Read More &rarr;</Link>
                    </div>

                    <div className="blog-card">
                    <img 
                        src={asset.coding_comp} 
                        alt="competitive Code" 
                    />
                    <h3>Competitive Coding Guide</h3>
                    <p>Competitive programming is like a programming sport involving many...</p>
                    <a href="https://medium.com/codess-cafe/the-ultimate-guide-to-competitive-programming-7bde37b70f45" className="read-more">Read More &rarr;</a>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

export default Blog_p;