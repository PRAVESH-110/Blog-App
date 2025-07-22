import React from "react";
import "./LandingPage.css";

const LandingPage = () => (
  <div className="landing-container" style={{ backgroundColor: '#0a192f', minHeight: '100vh', color: '#ccd6f6' }}>
    <header className="landing-hero">
      <h1 style={{ color: "white" }}>Blogger</h1>
      <p >Share your stories. Connect with the world.</p>
    </header>
    <section className="features-section">
      <h2 style={{ color: "white" }}>Features</h2>
      <div className="features-list">
        <div className="feature-card">
          <span role="img" aria-label="write">📝</span>
          <h3>Easy Writing</h3>
          <p>Compose and edit posts with a powerful, intuitive editor.</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="community">🌐</span>
          <h3>Community</h3>
          <p>Connect with fellow bloggers and readers worldwide.</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="customize">🎨</span>
          <h3>Customizable</h3>
          <p>Personalize your blog with themes and layouts.</p>
        </div>
      </div>
    </section>
    <section className="useful-section" style={{ marginTop: '48px', padding: '32px ', background: 'black', borderRadius: '18px', width: '90%', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 4px 24px 0 rgba(10,25,47,0.3)' }}>
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>Useful Resources</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', }}>
        <div style={{ flex: '1 1 200px', minWidth: '150px', background: '#0a192f', borderRadius: '12px', padding: '20px', color: '#ccd6f6', boxShadow: '0 2px 8px rgba(44,62,80,0.08)' }}>
          <h3 style={{ color: '#64ffda', marginBottom: '0.5rem' }}>Blogging Tips</h3>
          <ul style={{ paddingLeft: '1.2em', fontSize: '1rem' }}>
            <li>How to grow your audience</li>
            <li>Writing engaging content</li>
            <li>SEO best practices</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 200px', minWidth: '150px', background: '#0a192f', borderRadius: '12px', padding: '20px', color: '#ccd6f6', boxShadow: '0 2px 8px rgba(44,62,80,0.08)' }}>
          <h3 style={{ color: '#64ffda', marginBottom: '0.5rem' }}>Getting Started</h3>
          <ul style={{ paddingLeft: '1.2em', fontSize: '1rem' }}>
            <li>Sign up and set up your profile</li>
            <li>Explore trending posts</li>
            <li>Connect with other bloggers</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 200px', minWidth: '150px', background: '#0a192f', borderRadius: '12px', padding: '20px', color: '#ccd6f6', boxShadow: '0 2px 8px rgba(44,62,80,0.08)' }}>
          <h3 style={{ color: '#64ffda', marginBottom: '0.5rem' }}>Support</h3>
          <ul style={{ paddingLeft: '1.2em', fontSize: '1rem' }}>
            <li>FAQs and help center</li>
            <li>Contact our support team</li>
            <li>Community guidelines</li>
          </ul>
        </div>
      </div>
    </section>
    {/* Remove testimonials and footer */}
  </div>
);

export default LandingPage; 