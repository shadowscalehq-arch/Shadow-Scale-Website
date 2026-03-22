import React, { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, Target, Shield, Zap, Lock, Crown, Rocket, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfp9dgk7Z6Ag0Ne2bqM_qGSDgH_O-4bKaEnzsc0iLlVaKcG2Q/viewform?usp=sf_link', '_blank');
  };

  return (
    <div className="home-container">
      {/* Sticky CTA Button - Removed "Made with Emergent" badge */}
      <button className="sticky-cta" onClick={handleApplyClick}>
        <Rocket size={20} />
        Apply for Access
      </button>

      {/* Navigation Header */}
      <header className="nav-header">
        <div className="nav-content">
          <div className="logo-container">
            <img src="/logo.png" alt="ShadowScale" className="logo" />
          </div>
          <nav className="nav-links">
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#results" className="nav-link">Results</a>
            <a href="#features" className="nav-link">Features</a>
            <button className="nav-cta" onClick={handleApplyClick}>Apply Now</button>
          </nav>
        </div>
      </header>

      {/* Top Banner */}
      <div className="top-banner">
        <div className="banner-content">
          <Sparkles size={20} className="banner-icon" />
          <span>Built for creators serious about monetization 🚀</span>
          <span className="banner-subtext">Limited onboarding. High-performance systems only.</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">
              Turn Your Audience Into a <span className="gradient-text">Scalable Income System</span>
            </h1>
            <p className="hero-subheadline">
              ShadowScale is an AI-powered monetization engine designed for serious creators.
            </p>
            <div className="hero-badge">
              <Lock size={16} />
              <span>Selective onboarding. Application required.</span>
            </div>
            <div className="hero-cta-group">
              <button className="btn-primary hero-primary-cta" onClick={handleApplyClick}>
                <span>Apply for Access</span>
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
                See How It Works
              </button>
            </div>
            <p className="hero-microtext">
              <Shield size={14} className="microtext-icon" />
              Only a few creators are accepted each month.
            </p>
          </div>
          
          <div className="hero-visual">
            <div className="device-mockup">
              <div className="macbook-frame">
                <div className="macbook-screen">
                  <div className="dashboard-ui">
                    <div className="dashboard-header">
                      <div className="header-dot"></div>
                      <div className="header-dot"></div>
                      <div className="header-dot"></div>
                    </div>
                    <div className="dashboard-content">
                      <div className="dashboard-stat-row">
                        <div className="mini-stat-card">
                          <span className="mini-stat-label">Monthly Revenue</span>
                          <span className="mini-stat-value">₹2.4L</span>
                          <span className="mini-stat-trend">↗ +127%</span>
                        </div>
                        <div className="mini-stat-card">
                          <span className="mini-stat-label">Conversion</span>
                          <span className="mini-stat-value">4.8%</span>
                          <span className="mini-stat-trend">↗ +2.3%</span>
                        </div>
                      </div>
                      <div className="mini-chart">
                        <div className="mini-bar" style={{height: '45%'}}></div>
                        <div className="mini-bar" style={{height: '65%'}}></div>
                        <div className="mini-bar" style={{height: '50%'}}></div>
                        <div className="mini-bar" style={{height: '80%'}}></div>
                        <div className="mini-bar" style={{height: '60%'}}></div>
                        <div className="mini-bar" style={{height: '90%'}}></div>
                        <div className="mini-bar" style={{height: '75%'}}></div>
                        <div className="mini-bar" style={{height: '95%'}}></div>
                      </div>
                      <div className="funnel-indicator">
                        <div className="funnel-step active"></div>
                        <div className="funnel-step active"></div>
                        <div className="funnel-step"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="macbook-bottom"></div>
              </div>
              
              {/* Floating UI Cards */}
              <div className="floating-card floating-card-1">
                <TrendingUp size={16} />
                <span className="floating-card-label">Revenue</span>
                <span className="floating-card-value">+₹1L</span>
              </div>
              
              <div className="floating-card floating-card-2">
                <Zap size={16} />
                <span className="floating-card-label">Growth</span>
                <span className="floating-card-value">3.2x</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works-section">
        <h2 className="section-title">How ShadowScale Works</h2>
        <div className="system-grid">
          {[
            {
              icon: <Target size={32} />,
              title: 'Audience Intelligence Engine',
              description: 'Deep analysis of your audience behavior, preferences, and monetization potential.'
            },
            {
              icon: <Sparkles size={32} />,
              title: 'Offer Creation Framework',
              description: 'AI-powered system to design high-converting offers tailored to your audience.'
            },
            {
              icon: <TrendingUp size={32} />,
              title: 'Funnel Deployment System',
              description: 'Automated funnel infrastructure built for maximum conversion and scalability.'
            },
            {
              icon: <Zap size={32} />,
              title: 'Revenue Scaling Loop',
              description: 'Continuous optimization engine that compounds your monetization over time.'
            }
          ].map((item, index) => (
            <div key={index} className="system-card">
              <div className="card-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product UI Section */}
      <section className="product-ui-section">
        <h2 className="section-title">Built Like a Product, Not a Service</h2>
        <div className="dashboard-showcase">
          <div className="dashboard-panel main-panel">
            <div className="panel-header">
              <div className="panel-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="panel-title">Revenue Dashboard</span>
            </div>
            <div className="panel-content">
              <div className="revenue-stats">
                <div className="stat-card">
                  <span className="stat-label">Monthly Revenue</span>
                  <span className="stat-value">₹2,45,000</span>
                  <span className="stat-growth">+127% ↗</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Conversion Rate</span>
                  <span className="stat-value">4.8%</span>
                  <span className="stat-growth">+2.3% ↗</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Active Funnels</span>
                  <span className="stat-value">12</span>
                  <span className="stat-growth">Running ✓</span>
                </div>
              </div>
              <div className="chart-area">
                <div className="chart-bars">
                  {[40, 65, 45, 80, 55, 90, 75, 95].map((height, i) => (
                    <div key={i} className="chart-bar" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="dashboard-panel side-panel">
            <div className="panel-header">
              <span className="panel-title">Funnel Analytics</span>
            </div>
            <div className="panel-content">
              <div className="funnel-list">
                {['Lead Magnet → Webinar', 'Free Trial → Premium', 'Course Launch Sequence'].map((funnel, i) => (
                  <div key={i} className="funnel-item">
                    <span className="funnel-name">{funnel}</span>
                    <span className="funnel-status">Live</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="results-section">
        <h2 className="section-title">Real Systems, Real Results</h2>
        <div className="results-grid">
          {[
            { label: 'Creators scaling to', value: '₹1L+/month', icon: <TrendingUp size={24} /> },
            { label: 'Average conversion lift', value: '3.2x Higher', icon: <Zap size={24} /> },
            { label: 'Revenue systems optimized', value: '200+', icon: <Target size={24} /> }
          ].map((result, index) => (
            <div key={index} className="result-card">
              <div className="result-icon">{result.icon}</div>
              <span className="result-value">{result.value}</span>
              <span className="result-label">{result.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Target Section */}
      <section className="target-section">
        <h2 className="section-title">Built for Serious Creators</h2>
        <div className="target-grid">
          {[
            { icon: <CheckCircle2 size={28} />, text: '10K+ followers or established audience' },
            { icon: <CheckCircle2 size={28} />, text: 'Ready to build sustainable income systems' },
            { icon: <CheckCircle2 size={28} />, text: 'Willing to invest in monetization infrastructure' }
          ].map((item, index) => (
            <div key={index} className="target-card">
              <div className="target-icon-check">{item.icon}</div>
              <p className="target-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Not For Everyone */}
      <section className="not-for-section">
        <h2 className="section-title bold-title">Not for Everyone</h2>
        <div className="not-for-grid">
          {[
            { icon: <XCircle size={28} />, text: 'Beginners looking for quick growth hacks' },
            { icon: <XCircle size={28} />, text: 'Creators not ready to invest in infrastructure' },
            { icon: <XCircle size={28} />, text: 'People chasing shortcuts and overnight success' }
          ].map((item, index) => (
            <div key={index} className="not-for-card">
              <div className="not-for-icon">{item.icon}</div>
              <p className="not-for-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusivity Section */}
      <section className="exclusivity-section">
        <div className="exclusivity-content">
          <Crown size={48} className="exclusivity-icon" />
          <h2 className="section-title">Selective by Design</h2>
          <p className="exclusivity-description">
            ShadowScale is built for creators who are serious about monetization.
            We do not work with everyone.
            Each creator goes through a selection process to ensure real results.
          </p>
          <div className="exclusivity-points">
            {[
              { icon: <Lock size={20} />, text: 'Limited onboarding slots' },
              { icon: <Shield size={20} />, text: 'High-performance creators only' },
              { icon: <Target size={20} />, text: 'Long-term monetization focus' }
            ].map((point, index) => (
              <div key={index} className="exclusivity-point">
                {point.icon}
                <span>{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ShadowScale Wins */}
      <section className="why-wins-section">
        <h2 className="section-title">Why ShadowScale Wins</h2>
        <div className="wins-grid">
          {[
            {
              title: 'AI-Powered Intelligence',
              description: 'Not guesswork. Data-driven monetization strategies powered by advanced AI models.',
              icon: <Sparkles size={32} />
            },
            {
              title: 'System, Not Service',
              description: 'Infrastructure that scales with you. Built for long-term compounding growth.',
              icon: <Zap size={32} />
            },
            {
              title: 'Selective Onboarding',
              description: 'We work with fewer creators to deliver exceptional results. Quality over quantity.',
              icon: <Crown size={32} />
            }
          ].map((win, index) => (
            <div key={index} className="win-card">
              <div className="win-icon">{win.icon}</div>
              <h3 className="win-title">{win.title}</h3>
              <p className="win-description">{win.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Positioning Section */}
      <section className="positioning-section">
        <div className="positioning-content">
          <h2 className="positioning-headline">This is not an agency. This is a system.</h2>
          <p className="positioning-description">
            ShadowScale builds monetization infrastructure, not just services.
            We deploy AI-powered systems that work 24/7 to optimize your revenue,
            compound your growth, and scale your creator business beyond manual limits.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-section">
        <h2 className="section-title">Core Features</h2>
        <div className="features-grid">
          {[
            {
              icon: <Sparkles size={28} />,
              title: 'AI-Powered Strategy',
              description: 'Advanced monetization strategies tailored to your audience using machine learning.'
            },
            {
              icon: <TrendingUp size={28} />,
              title: 'Funnel Systems',
              description: 'Automated conversion funnels designed for maximum revenue and minimal friction.'
            },
            {
              icon: <Target size={28} />,
              title: 'Offer Positioning',
              description: 'Strategic offer design and positioning that resonates with your audience.'
            },
            {
              icon: <Zap size={28} />,
              title: 'Revenue Optimization',
              description: 'Continuous A/B testing and optimization to maximize your income over time.'
            }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="final-cta-content">
          <Rocket size={64} className="final-cta-icon" />
          <h2 className="final-cta-title">Apply to Work With ShadowScale</h2>
          <p className="final-cta-description">
            We onboard a limited number of creators each month.
            Apply now to see if you qualify.
          </p>
          <button className="btn-primary large" onClick={handleApplyClick}>
            <span>Apply for Access</span>
            <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <img src="/logo.png" alt="ShadowScale" className="footer-logo" />
          <p className="footer-text">Premium monetization infrastructure for serious creators.</p>
          <a href="mailto:shadowscalehq@gmail.com" className="footer-email">shadowscalehq@gmail.com</a>
          <p className="footer-copyright">© 2025 ShadowScale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
