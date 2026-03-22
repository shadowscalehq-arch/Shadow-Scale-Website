import React, { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, Target, Shield, Zap, Lock, Crown, ArrowRight, CheckCircle2, XCircle, BarChart3, DollarSign, Percent, Users, TrendingDown } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [revenueCount, setRevenueCount] = useState(172450);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    // Live revenue counter with flicker
    const interval = setInterval(() => {
      setRevenueCount(prev => prev + Math.floor(Math.random() * 4200) + 1800);
    }, 1800);
    
    // Parallax scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfp9dgk7Z6Ag0Ne2bqM_qGSDgH_O-4bKaEnzsc0iLlVaKcG2Q/viewform?usp=sf_link', '_blank');
  };

  return (
    <div className="shadowscale-elite">
      {/* Animated Gradient Background */}
      <div className="bg-gradient-elite"></div>
      <div className="bg-streaks">
        <div className="streak"></div>
        <div className="streak"></div>
        <div className="streak"></div>
      </div>
      <div className="grid-pattern"></div>

      {/* Elite Navigation */}
      <header className="nav-elite">
        <div className="nav-container-elite">
          <div className="logo-box-elite">
            <img src="/logo.png" alt="ShadowScale" className="logo-img-elite" />
            <div className="logo-ring"></div>
          </div>
          <nav className="nav-menu-elite">
            <a href="#system" className="nav-item-elite">System</a>
            <a href="#impact" className="nav-item-elite">Impact</a>
            <a href="#infrastructure" className="nav-item-elite">Infrastructure</a>
            <button className="nav-btn-elite" onClick={handleApplyClick}>
              <span>Request Entry</span>
              <div className="nav-btn-glow"></div>
            </button>
          </nav>
        </div>
      </header>

      {/* Elite Status Bar */}
      <div className="status-bar-elite">
        <div className="status-pulse-line"></div>
        <Lock size={14} />
        <span className="status-text">Application Only</span>
        <span className="status-dot">•</span>
        <span className="status-count">10 slots remaining</span>
      </div>

      {/* HERO - HIGH IMPACT CENTERED */}
      <section className={`hero-ultra ${isVisible ? 'active' : ''}`}>
        <div className="hero-container-ultra">
          {/* Hero Text - Centered */}
          <div className="hero-text-ultra">
            <div className="exclusive-badge">
              <div className="badge-glow-ring"></div>
              <Crown size={16} />
              <span>Elite Access Only</span>
            </div>
            
            <h1 className="hero-title-ultra">
              Turn Your Audience Into a<br />
              <span className="title-gradient-ultra">Scalable Income Machine</span>
            </h1>
            
            <p className="hero-subtitle-ultra">
              Not content. Not growth hacks. A real monetization system.
            </p>

            {/* Performance-Based Highlight */}
            <div className="performance-highlight">
              <div className="perf-glow"></div>
              <Percent size={22} />
              <div className="perf-text">
                <span className="perf-main">No upfront cost. We grow, then we earn.</span>
                <span className="perf-sub">Performance-based. We only make money when you do.</span>
              </div>
            </div>

            <div className="hero-cta-ultra">
              <button className="btn-ultra-primary" onClick={handleApplyClick}>
                <span>Get Selected</span>
                <ArrowRight size={22} />
                <div className="btn-ultra-glow"></div>
                <div className="btn-ultra-shine"></div>
              </button>
              <p className="exclusivity-text">
                <Shield size={13} />
                <span>Only 10 creators accepted monthly</span>
              </p>
            </div>
          </div>

          {/* Hero Device - CENTERED LARGE */}
          <div className="device-showcase-ultra" style={{transform: `translateY(${scrollY * 0.1}px)`}}>
            {/* Glow Aura */}
            <div className="device-aura-ultra"></div>
            <div className="device-ring-glow"></div>

            {/* MacBook Ultra */}
            <div className="macbook-ultra">
              <div className="screen-ultra">
                <div className="screen-chrome">
                  <div className="chrome-dots">
                    <span className="chrome-dot red-dot"></span>
                    <span className="chrome-dot yellow-dot"></span>
                    <span className="chrome-dot green-dot"></span>
                  </div>
                  <span className="chrome-title">REVENUE DASHBOARD • LIVE</span>
                  <div className="live-indicator"></div>
                </div>
                
                <div className="dashboard-ultra">
                  {/* Main Revenue Display */}
                  <div className="revenue-hero-display">
                    <span className="revenue-hero-label">MONTHLY REVENUE</span>
                    <span className="revenue-hero-value">₹{revenueCount.toLocaleString('en-IN')}</span>
                    <div className="revenue-hero-trend">
                      <div className="trend-line"></div>
                      <TrendingUp size={20} />
                      <span>+127% vs last month</span>
                    </div>
                  </div>

                  {/* Animated Chart */}
                  <div className="chart-ultra">
                    {[42, 65, 48, 79, 58, 88, 72, 95].map((height, i) => (
                      <div key={i} className="chart-bar-ultra" style={{height: `${height}%`, animationDelay: `${i * 0.12}s`}}>
                        <div className="bar-reflection"></div>
                        <div className="bar-glow-top"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="macbook-base-ultra"></div>
            </div>

            {/* Multiple Floating Cards */}
            <div className="float-ui-elite card-pos-1">
              <div className="float-ui-glow"></div>
              <DollarSign size={20} className="float-ui-icon" />
              <div className="float-ui-data">
                <span className="float-ui-label">Revenue</span>
                <span className="float-ui-value">₹1.2L</span>
              </div>
            </div>

            <div className="float-ui-elite card-pos-2">
              <div className="float-ui-glow"></div>
              <TrendingUp size={20} className="float-ui-icon" />
              <div className="float-ui-data">
                <span className="float-ui-label">Growth</span>
                <span className="float-ui-value">3.2x</span>
              </div>
            </div>

            <div className="float-ui-elite card-pos-3">
              <div className="float-ui-glow"></div>
              <Target size={20} className="float-ui-icon" />
              <div className="float-ui-data">
                <span className="float-ui-label">Conversion</span>
                <span className="float-ui-value">4.8%</span>
              </div>
            </div>

            <div className="float-ui-elite card-pos-4">
              <div className="float-ui-glow"></div>
              <BarChart3 size={20} className="float-ui-icon" />
              <div className="float-ui-data">
                <span className="float-ui-label">Funnels</span>
                <span className="float-ui-value">12</span>
              </div>
            </div>

            <div className="float-ui-elite card-pos-5">
              <div className="float-ui-glow"></div>
              <Users size={20} className="float-ui-icon" />
              <div className="float-ui-data">
                <span className="float-ui-label">Audience</span>
                <span className="float-ui-value">45K</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THIS IS NOT FOR EVERYONE - BOLD */}
      <section className="not-for-everyone-ultra">
        <div className="nfe-glow-ultra"></div>
        <h2 className="nfe-title-ultra">This Is Not For Everyone</h2>
        <p className="nfe-text-ultra">We're selective. We work with serious creators only.</p>
        <div className="nfe-line"></div>
      </section>

      {/* Built Different */}
      <section className="built-different-ultra">
        <div className="bd-bg-animated"></div>
        <div className="bd-icons-float">
          <Sparkles className="bd-icon-float i1" size={40} />
          <Zap className="bd-icon-float i2" size={36} />
          <Crown className="bd-icon-float i3" size={38} />
          <Target className="bd-icon-float i4" size={34} />
        </div>
        <h2 className="bd-title-ultra">Built Different</h2>
        <p className="bd-subtitle-ultra">
          While others sell courses and communities,<br />
          we build revenue infrastructure that scales.
        </p>
      </section>

      {/* The System */}
      <section id="system" className="system-ultra">
        <div className="section-glow-top"></div>
        <h2 className="section-heading-ultra">The System</h2>
        <div className="system-cards-ultra">
          {[
            {
              icon: <Target size={36} />,
              title: 'Audience Intelligence',
              description: 'AI-powered deep analysis of your audience behavior and monetization patterns.',
              color: '#667eea'
            },
            {
              icon: <Sparkles size={36} />,
              title: 'Offer Engineering',
              description: 'Design high-converting offers using proven frameworks and AI optimization.',
              color: '#764ba2'
            },
            {
              icon: <TrendingUp size={36} />,
              title: 'Funnel Infrastructure',
              description: 'Automated conversion systems that work 24/7 to generate revenue.',
              color: '#00d4ff'
            },
            {
              icon: <Zap size={36} />,
              title: 'Revenue Scaling',
              description: 'Continuous optimization and testing to compound your income over time.',
              color: '#667eea'
            }
          ].map((item, idx) => (
            <div key={idx} className="card-ultra" style={{animationDelay: `${idx * 0.15}s`}}>
              <div className="card-ultra-glow" style={{background: `radial-gradient(circle, ${item.color}50 0%, transparent 70%)`}}></div>
              <div className="card-ultra-border"></div>
              <div className="card-ultra-shine"></div>
              <div className="card-ultra-icon" style={{color: item.color}}>{item.icon}</div>
              <h3 className="card-ultra-title">{item.title}</h3>
              <p className="card-ultra-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Impact */}
      <section id="impact" className="impact-ultra">
        <h2 className="section-heading-ultra">Real Impact</h2>
        <div className="impact-cards-ultra">
          {[
            { value: '₹1L+', label: 'Average monthly revenue', icon: <TrendingUp size={32} />, color: '#667eea' },
            { value: '3.2x', label: 'Conversion increase', icon: <Zap size={32} />, color: '#764ba2' },
            { value: '200+', label: 'Systems deployed', icon: <Target size={32} />, color: '#00d4ff' }
          ].map((stat, idx) => (
            <div key={idx} className="impact-card-ultra" style={{animationDelay: `${idx * 0.2}s`}}>
              <div className="impact-glow-ultra" style={{background: `radial-gradient(circle, ${stat.color}60 0%, transparent 70%)`}}></div>
              <div className="impact-icon-ultra" style={{color: stat.color}}>{stat.icon}</div>
              <span className="impact-value-ultra">{stat.value}</span>
              <span className="impact-label-ultra">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Built For / Not For - UPDATED MESSAGING */}
      <section className="split-ultra">
        <div className="split-container-ultra">
          <div className="split-side-ultra for-ultra">
            <h2 className="split-title-ultra">Built For</h2>
            <div className="split-items-ultra">
              {[
                'Creators with 10K+ engaged audience',
                'Serious about scaling revenue',
                'Open to performance-based growth',
                'Want real systems, not hacks'
              ].map((text, i) => (
                <div key={i} className="split-item-ultra" style={{animationDelay: `${i * 0.1}s`}}>
                  <CheckCircle2 size={24} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="split-divider-ultra">
            <div className="divider-glow-ultra"></div>
            <div className="divider-pulse-ultra"></div>
          </div>

          <div className="split-side-ultra notfor-ultra">
            <h2 className="split-title-ultra">Not For</h2>
            <div className="split-items-ultra">
              {[
                'Beginners chasing quick wins',
                'People wanting free shortcuts',
                'Not ready to build systems',
                'Looking for overnight success'
              ].map((text, i) => (
                <div key={i} className="split-item-ultra notfor-item" style={{animationDelay: `${i * 0.1}s`}}>
                  <XCircle size={24} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance-Based Callout */}
      <section className="performance-ultra">
        <div className="performance-bg-glow"></div>
        <Percent size={56} className="performance-icon-ultra" />
        <h2 className="performance-title-ultra">Performance-Based Partnership</h2>
        <p className="performance-desc-ultra">
          No upfront cost. We grow, then we earn.<br />
          <strong>We only make money when you do.</strong>
        </p>
      </section>

      {/* Core Infrastructure */}
      <section id="infrastructure" className="features-ultra">
        <h2 className="section-heading-ultra">Core Infrastructure</h2>
        <div className="features-cards-ultra">
          {[
            {
              icon: <Sparkles size={40} />,
              title: 'AI Strategy Engine',
              description: 'Advanced ML models that optimize your monetization strategy in real-time.',
              color: '#667eea'
            },
            {
              icon: <TrendingUp size={40} />,
              title: 'Automated Funnels',
              description: 'Conversion systems that run 24/7 without manual oversight.',
              color: '#764ba2'
            },
            {
              icon: <Target size={40} />,
              title: 'Offer Positioning',
              description: 'Strategic frameworks that make your offers irresistible.',
              color: '#00d4ff'
            },
            {
              icon: <Zap size={40} />,
              title: 'Revenue Scaling',
              description: 'Compounding optimization that grows your income exponentially.',
              color: '#667eea'
            }
          ].map((feat, idx) => (
            <div key={idx} className="feature-card-ultra" style={{animationDelay: `${idx * 0.13}s`}}>
              <div className="feature-ultra-glow" style={{background: `radial-gradient(circle, ${feat.color}40 0%, transparent 70%)`}}></div>
              <div className="feature-ultra-border"></div>
              <div className="feature-ultra-icon" style={{color: feat.color}}>{feat.icon}</div>
              <h3 className="feature-ultra-title">{feat.title}</h3>
              <p className="feature-ultra-desc">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA - ELITE */}
      <section className="cta-final-ultra">
        <div className="cta-aura-ultra"></div>
        <div className="cta-box-ultra">
          <Crown size={72} className="crown-ultra" />
          <h2 className="cta-title-ultra">Get Selected</h2>
          <p className="cta-desc-ultra">
            We onboard a limited number of creators each month.<br />
            Apply now to see if you qualify.
          </p>
          <button className="btn-ultra-primary btn-ultra-large" onClick={handleApplyClick}>
            <span>Request Private Access</span>
            <ArrowRight size={28} />
            <div className="btn-ultra-glow"></div>
            <div className="btn-ultra-shine"></div>
          </button>
          <p className="cta-note-ultra">
            <Percent size={14} />
            Performance-based. No upfront cost.
          </p>
        </div>
      </section>

      {/* Footer - Elite */}
      <footer className="footer-ultra">
        <div className="footer-ultra-content">
          <img src="/logo.png" alt="ShadowScale" className="footer-ultra-logo" />
          <p className="footer-ultra-tagline">Elite monetization infrastructure. Performance-based.</p>
          <a href="mailto:shadowscalehq@gmail.com" className="footer-ultra-email">shadowscalehq@gmail.com</a>
          <p className="footer-ultra-copy">© 2025 ShadowScale. We only earn when you earn.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;