import React from 'react';
import './Home.css'; // your styles

function Home() {
  return (
    <div className="hero-section text-white d-flex align-items-center justify-content-center" style={{
      backgroundImage: 'url(https://i.imgur.com/e1hLQ2r.jpg)',
      backgroundSize: 'cover',
      height: '100vh'
    }}>
      <div className="text-center">
        <h1>Unlimited movies, TV shows and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <input type="email" placeholder="Email address" />
        <button className="btn btn-danger">Get Started</button>
      </div>
    </div>
  );
}

export default Home;
