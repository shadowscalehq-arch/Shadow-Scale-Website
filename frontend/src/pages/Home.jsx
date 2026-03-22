import React, { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, Target, Shield, Zap, Lock, Crown, Rocket, ArrowRight, CheckCircle2, XCircle, BarChart3, Users, DollarSign } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [revenueCount, setRevenueCount] = useState(145000);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate revenue counter
    const interval = setInterval(() => {
      setRevenueCount(prev => prev + Math.floor(Math.random() * 5000) + 1000);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfp9dgk7Z6Ag0Ne2bqM_qGSDgH_O-4bKaEnzsc0iLlVaKcG2Q/viewform?usp=sf_link', '_blank');
  };

  return (
    <div className="home-container">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Navigation Header */}
      <header className="nav-header">
        <div className="nav-content">
          <div className="logo-container">
            <img src="/logo.png" alt="ShadowScale" className="logo" />
          </div>
          <nav className="nav-links">
            <a href="#system" className="nav-link">System</a>
            <a href="#results" className="nav-link">Results</a>
            <a href="#features" className="nav-link">Features</a>
            <button className="nav-cta" onClick={handleApplyClick}>Apply Now</button>
          </nav>
        </div>
      </header>

      {/* Top Banner */}
      <div className="top-banner-immersive">
        <div className="banner-content">
          <div className="banner-pulse"></div>
          <Sparkles size={18} className="banner-icon" />
          <span>Limited slots. High-performance creators only.</span>
        </div>
      </div>

      {/* Hero Section - Complete Redesign */}
      <section className={`hero-immersive ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content-immersive">
          <div className="hero-text-immersive">
            <div className="hero-badge-pill">
              <Lock size={14} />
              <span>This is not for everyone</span>
            </div>
            <h1 className="hero-headline-immersive">
              Turn Your Audience Into a <span className="gradient-text-animated">Scalable Income Machine</span>
            </h1>
            <p className="hero-subheadline-immersive">
              Not content. Not growth hacks. A real monetization system.
            </p>
            <div className="hero-cta-immersive">
              <button className="btn-primary-glow" onClick={handleApplyClick}>
                <span>Apply for Access</span>
                <ArrowRight size={20} />
                <div className="button-glow"></div>
              </button>
              <p className="trust-line">
                <Shield size={14} />
                Only 10 creators accepted this month
              </p>
            </div>
          </div>
          
          <div className="hero-visual-immersive">
            {/* Main Device */}
            <div className="floating-device">
              <div className="device-glow"></div>
              <div className="macbook-pro">
                <div className="screen-frame">
                  <div className="screen-header">
                    <div className="mac-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="screen-title">Revenue Dashboard</span>
                  </div>
                  <div className="screen-body">
                    <div className="revenue-metric-hero">
                      <span className="metric-label-hero">Monthly Revenue</span>
                      <span className="metric-value-hero">₹{(revenueCount).toLocaleString('en-IN')}</span>
                      <div className="metric-trend-hero">
                        <TrendingUp size={18} />
                        <span>+127% growth</span>
                      </div>
                    </div>
                    <div className="chart-grid-hero">
                      <div className="bar-hero" style={{height: '48%'}}></div>
                      <div className="bar-hero" style={{height: '68%'}}></div>
                      <div className="bar-hero" style={{height: '52%'}}></div>
                      <div className="bar-hero" style={{height: '85%'}}></div>
                      <div className="bar-hero" style={{height: '60%'}}></div>
                      <div className="bar-hero" style={{height: '92%'}}></div>
                      <div className="bar-hero" style={{height: '75%'}}></div>
                      <div className="bar-hero" style={{height: '98%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="device-base"></div>
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="floating-ui-card card-top">
              <div className="ui-card-icon">
                <DollarSign size={16} />
              </div>
              <div className="ui-card-content">
                <span className="ui-card-label">Revenue</span>
                <span className="ui-card-value">₹1.2L</span>
              </div>
            </div>

            <div className="floating-ui-card card-bottom">
              <div className="ui-card-icon">
                <BarChart3 size={16} />
              </div>
              <div className="ui-card-content">
                <span className="ui-card-label">Growth</span>
                <span className="ui-card-value">3.2x</span>
              </div>
            </div>

            <div className="floating-ui-card card-left">
              <div className="ui-card-icon">
                <Users size={16} />
              </div>
              <div className="ui-card-content">
                <span className="ui-card-label">Conversion</span>
                <span className="ui-card-value">4.8%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built Different Section - WOW MOMENT */}
      <section className="built-different-section">
        <div className="built-different-bg"></div>
        <div className="floating-icons-bg">
          <Sparkles className="float-icon icon-1" size={32} />
          <Zap className="float-icon icon-2" size={28} />
          <Crown className="float-icon icon-3" size={30} />
          <Target className="float-icon icon-4" size={26} />
        </div>
        <h2 className="built-different-title">Built Different</h2>
        <p className="built-different-subtitle">
          While others sell courses and communities,<br />
          we build revenue infrastructure.
        </p>
      </section>

      {/* How It Works - Overlapping Design */}
      <section id="system" className="system-section-immersive">
        <div className="section-overlap"></div>
        <h2 className="section-title-immersive">The System</h2>
        <div className="system-grid-immersive">
          {[
            {
              icon: <Target size={28} />,
              title: 'Audience Intelligence',
              description: 'AI-powered analysis of your audience behavior and monetization potential.'
            },
            {
              icon: <Sparkles size={28} />,
              title: 'Offer Engineering',
              description: 'Design high-converting offers that your audience actually wants to buy.'
            },
            {
              icon: <TrendingUp size={28} />,
              title: 'Funnel Infrastructure',
              description: 'Automated systems that convert attention into sustainable revenue.'
            },
            {
              icon: <Zap size={28} />,
              title: 'Revenue Optimization',
              description: 'Continuous testing and refinement to compound your income.'
            }
          ].map((item, index) => (
            <div key={index} className="system-card-immersive" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="card-glow-effect"></div>
              <div className="card-icon-immersive">{item.icon}</div>
              <h3 className="card-title-immersive">{item.title}</h3>
              <p className="card-description-immersive">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results - Animated Stats */}
      <section id="results" className="results-section-immersive">
        <h2 className="section-title-immersive">Real Impact</h2>
        <div className="results-grid-immersive">
          {[
            { value: '₹1L+', label: 'Average monthly revenue', icon: <TrendingUp size={24} />, color: '#667eea' },
            { value: '3.2x', label: 'Conversion increase', icon: <Zap size={24} />, color: '#764ba2' },
            { value: '200+', label: 'Revenue systems deployed', icon: <Target size={24} />, color: '#00d4ff' }
          ].map((result, index) => (
            <div key={index} className="result-card-immersive">
              <div className="result-glow" style={{background: `radial-gradient(circle, ${result.color}40 0%, transparent 70%)`}}></div>
              <div className="result-icon-immersive">{result.icon}</div>
              <span className="result-value-immersive">{result.value}</span>
              <span className="result-label-immersive">{result.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Is For */}
      <section className="target-section-immersive">
        <div className="target-split">
          <div className="target-side for-side">
            <h2 className="target-title">Built For</h2>
            <div className="target-list">
              {[
                'Creators with 10K+ engaged followers',
                'Ready to invest in real infrastructure',
                'Want sustainable, scalable income'
              ].map((item, i) => (
                <div key={i} className="target-item-immersive">
                  <CheckCircle2 size={22} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="target-divider"></div>
          
          <div className="target-side not-for-side">
            <h2 className="target-title">Not For</h2>
            <div className="target-list">
              {[
                'Beginners chasing quick wins',
                'People wanting free solutions',
                'Those not ready to invest'
              ].map((item, i) => (
                <div key={i} className="target-item-immersive not-for">
                  <XCircle size={22} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features - Visual Cards */}
      <section id="features" className="features-section-immersive">
        <h2 className="section-title-immersive">Core Infrastructure</h2>
        <div className="features-grid-immersive">
          {[
            {
              icon: <Sparkles size={32} />,
              title: 'AI Strategy Engine',
              description: 'Machine learning models that optimize your monetization strategy.'
            },
            {
              icon: <TrendingUp size={32} />,
              title: 'Automated Funnels',
              description: 'Conversion systems that run 24/7 without manual work.'
            },
            {
              icon: <Target size={32} />,
              title: 'Offer Positioning',
              description: 'Strategic frameworks that make your offers irresistible.'
            },
            {
              icon: <Zap size={32} />,
              title: 'Revenue Scaling',
              description: 'Compounding optimization that grows your income over time.'
            }
          ].map((feature, index) => (
            <div key={index} className="feature-card-immersive">
              <div className="feature-card-glow"></div>
              <div className="feature-icon-immersive">{feature.icon}</div>
              <h3 className="feature-title-immersive">{feature.title}</h3>
              <p className="feature-description-immersive">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA - Premium */}
      <section className="final-cta-immersive">
        <div className="cta-glow-bg"></div>
        <div className="final-cta-content-immersive">
          <Crown size={56} className="cta-crown-icon" />
          <h2 className="final-cta-title-immersive">Apply to Work With ShadowScale</h2>
          <p className="final-cta-description-immersive">
            We onboard a limited number of creators each month.<br />
            Apply now to see if you qualify.
          </p>
          <button className="btn-primary-glow large-cta" onClick={handleApplyClick}>
            <span>Apply for Access</span>
            <ArrowRight size={24} />
            <div className="button-glow"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-immersive">
        <div className="footer-content-immersive">
          <img src="/logo.png" alt="ShadowScale" className="footer-logo-immersive" />
          <p className="footer-tagline">Premium monetization infrastructure for serious creators.</p>
          <a href="mailto:shadowscalehq@gmail.com" className="footer-email-immersive">shadowscalehq@gmail.com</a>
          <p className="footer-copyright-immersive">© 2025 ShadowScale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
