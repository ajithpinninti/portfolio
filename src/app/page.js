"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WorkCard } from "./components/WorkCard";

export default function Home() {
  const observerRef = useRef(null);
  const [videoModal, setVideoModal] = useState(null);

  const openVideo = (youtubeId) => {
    setVideoModal(youtubeId);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setVideoModal(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current.observe(el);
    });

    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 20);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      {/* ========== NAVBAR ========== */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <span className="logo-dot"></span>
            <span className="logo-text">AJITH </span>
          </a>
          <div className="nav-links" id="navLinks">
            <a href="#ventures">Ventures</a>
            <a href="#works">Works</a>
            <a href="#journey">Journey</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="nav-cta">
            Let&apos;s Talk <span className="arrow">↗</span>
          </a>
          <button className="nav-toggle" id="navToggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="hero" id="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-greeting">
              Hello, I&apos;m <span className="wave">👋</span>
            </p>
            <h1 className="hero-name">
              <span className="name-line">AjitH</span>
              {/* <span className="name-line">Patel</span> */}
            </h1>
            <p className="hero-tagline">Tech Founder &amp; Visionary Builder</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Let&apos;s Talk <span className="arrow">↗</span>
              </a>
              <a href="#ventures" className="btn btn-outline">
                My Work <span className="arrow">↗</span>
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">SaaS Ventures</span>
              </div>
              <div className="stat-divider"></div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/ajith-pinninti-b69400185/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://github.com/ajithpinninti" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a href="https://x.com/ajith_io" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <Image
              src="/me.jpeg"
              alt="Ajith Pinninti - Tech Founder"
              width={420}
              height={560}
              className="hero-image"
              priority
            />
            <div className="hero-badge">
              <div className="badge-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>
            <div className="hero-name-watermark">Ajit</div>
          </div>
        </div>
      </section>

      {/* ========== VENTURES ========== */}
      <section className="ventures" id="ventures">
        <div className="section-container">
          <div className="section-header fade-in">
            <span className="section-tag">Ventures</span>
            <h2 className="section-title">
              <span className="title-accent">M</span>y Ventures
            </h2>
          </div>

          {/* DistilBook */}
          <div className="venture-card fade-in">
            <div className="venture-image-wrapper">
              <Image
                src="/distilbook.png"
                alt="DistilBook — AI Visual Tutor Platform"
                width={640}
                height={360}
                className="venture-image"
              />
            </div>
            <div className="venture-info">
              <div className="venture-header">
                <h3 className="venture-name">DistilBook</h3>
                <span className="venture-badge-tag">AI EdTech</span>
                <span className="venture-badge-new">Recently Launched 🚀</span>
              </div>
              <p className="venture-desc">
                We build agentic AI systems that generate engaging explainer videos from any PDF, whether it is research papers,
                math textbooks, or technical documentation. No complexity is off limits. Our platform transforms entire books into
                structured visual courses with concept-by-concept explainers, dramatically increasing completion rates.
              </p>
              <p className="venture-desc venture-desc-highlight">
                First of its kind in advanced AI-driven education. Our early users are mesmerized by the output quality.
              </p>
              <div className="venture-links">
                <a href="https://distilbook.com" target="_blank" rel="noopener noreferrer" className="venture-url">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  distilbook.com
                </a>
                <button onClick={() => openVideo("bM4rF9JlKt0")} className="btn btn-primary btn-sm">
                  ▶ Watch Demo
                </button>
                <a href="https://distilbook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  Visit Site <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Framenet */}
          <div className="venture-card venture-card-reverse fade-in">
            <div className="venture-image-wrapper">
              <Image
                src="/framenet.png"
                alt="Framenet — Video Processing Platform"
                width={640}
                height={360}
                className="venture-image"
              />
            </div>
            <div className="venture-info">
              <div className="venture-header">
                <h3 className="venture-name">Framenet</h3>
                <span className="venture-badge-tag">Video AI</span>
                <span className="venture-badge-new">$2.1K/mo · $8.5K total revenue</span>
              </div>
              <p className="venture-desc">
                A SaaS platform for intelligent motion graphics and video content creation. Create stunning animations,
                kinetic text, and visual effects simply by chatting with AI. Designed for creators and businesses
                who want professional-grade video output without the complexity.
              </p>
              <div className="venture-links">
                <a href="https://framenet.ai" target="_blank" rel="noopener noreferrer" className="venture-url">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  framenet.ai
                </a>
                <button onClick={() => openVideo("jVlZxqu72Uk")} className="btn btn-primary btn-sm">
                  ▶ Watch Demo
                </button>
                <a href="https://framenet.ai" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  Visit Site <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MY WORKS ========== */}
      <section className="works" id="works">
        <div className="section-container">
          <div className="section-header fade-in">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">
              <span className="title-accent">M</span>y Works
            </h2>
          </div>
          <p className="section-desc fade-in">
            A mix of hardware systems, AI experiments, and software platforms built from the ground up.
          </p>
          <div className="works-list">
            <WorkCard
              title="Motor Driver Hardware &amp; Firmware"
              desc="Custom firmware and PCB design for a nanometer-precision microscope autofocus system. Full embedded system from schematic to production."
              tags={["Embedded", "PCB Design", "Firmware"]}
              images={["/motor_2.mp4", "/motor_driver.jpg", "/motor_2.jpg", "/motor_3.mp4"]}
              badge="Private"
              delay={1}
            />
            <WorkCard
              title="mA-Precision LED Driver"
              desc="High-precision milliamp-level LED driver designed for microscopic imaging systems. Delivers stable, accurate current control for research-grade optical equipment."
              tags={["Power Electronics", "Hardware"]}
              images={["/LED_Driver.jpg"]}
              badge="Private"
              delay={2}
              reverse
            />
            <WorkCard
              title="Noise-Cancelling Speech App"
              desc="My first commercial app. An Android application powered by RNNs (Recurrent Neural Networks) for real-time background noise suppression in speech audio."
              tags={["Deep Learning", "Android", "RNN"]}
              images={["/noise_cancellation.jpeg", "/noise_2.jpeg"]}
              github="https://github.com/ajithpinninti/android_nomorenoise"
              delay={3}
            />
            <WorkCard
              title="Drone Path Trajectory Planning"
              desc="Autonomous drone path-planning algorithms built in MATLAB with obstacle avoidance and optimized trajectory generation."
              tags={["Robotics", "MATLAB"]}
              images={["/3d_trajectory.gif"]}
              github="https://github.com/ajithpinninti/Robotics/tree/main"
              delay={1}
              reverse
            />
            <WorkCard
              title="Face &amp; Age Morphing (GAN)"
              desc="Deep learning system using Generative Adversarial Networks for realistic face aging and morphing transformations."
              tags={["GANs", "Deep Learning"]}
              images={["/celeba.png"]}
              badge="Private"
              delay={2}
            />
            <WorkCard
              title="Stock Market Signal Screener"
              desc="Automated screener that generates buy and sell signals using technical analysis indicators for stock market trading."
              tags={["Python", "Finance"]}
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18" /><path d="M18 9l-5 5-2-2-4 4" /></svg>}
              github="https://github.com/ajithpinninti/stock-market-signal-generator"
              delay={3}
              reverse
            />
          </div>
        </div>
      </section>

      {/* ========== 3AM STRIP ========== */}
      <section className="strip-section">
        <p className="strip-label fade-in">Mad 3AM days..</p>
        <div className="strip-track">
          <div className="strip-scroll">
            <Image src="/myself_1.jpg" alt="" width={400} height={500} className="strip-img" />
            <Image src="/myself_2.jpg" alt="" width={400} height={500} className="strip-img" />
            <Image src="/3am_3.jpg" alt="" width={400} height={500} className="strip-img" />
            <Image src="/myself_4.jpeg" alt="" width={400} height={500} className="strip-img" />
            <Image src="/myself_5.jpg" alt="" width={400} height={500} className="strip-img" />
            <Image src="/myself_6.jpg" alt="" width={400} height={500} className="strip-img" />
            <Image src="/myself_1.jpg" alt="" width={400} height={500} className="strip-img" />
            <Image src="/myself_2.jpg" alt="" width={400} height={500} className="strip-img" />
            <Image src="/3am_3.jpg" alt="" width={400} height={500} className="strip-img" />
            <Image src="/myself_4.jpeg" alt="" width={400} height={500} className="strip-img" />
            <Image src="/myself_5.jpg" alt="" width={400} height={500} className="strip-img" />
            <Image src="/myself_6.jpg" alt="" width={400} height={500} className="strip-img" />
          </div>
        </div>
      </section>

      {/* ========== JOURNEY ========== */}
      <section className="journey" id="journey">
        <div className="section-container">
          <div className="section-header fade-in">
            <span className="section-tag">Background</span>
            <h2 className="section-title">
              <span className="title-accent">T</span>he Journey
            </h2>
          </div>
          <div className="timeline">
            <div className="timeline-item fade-in fade-in-delay-1">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-period">Foundation</span>
                <h3>Electronics Engineering</h3>
                <p>
                  Degree in Electronics Engineering. Deep expertise in embedded systems, medical devices, and power
                  electronics.
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in fade-in-delay-2">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-period">Hardware Roots</span>
                <h3>Embedded Systems &amp; Medical Devices</h3>
                <p>
                  Built ground-up understanding of technology at the circuit level. Designed power electronics and
                  medical-grade hardware.
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in fade-in-delay-3">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-period">Inner Growth</span>
                <h3>Sadhanapada at Isha Foundation</h3>
                <p>
                  Completed the 7-month intensive Sadhanapada program at Isha Yoga Center, Coimbatore.
                  A transformative period of deep inner work, discipline, and clarity that reshaped
                  how I approach building and leadership.
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in fade-in-delay-3">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-period">Current</span>
                <h3>Founder — DistilBook &amp; Framenet</h3>
                <p>
                  Building AI-powered SaaS ventures. Interactive Visual AI Tutor that transforms books into
                  whiteboard-style courses.
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in fade-in-delay-4">
              <div className="timeline-marker active"></div>
              <div className="timeline-content">
                <span className="timeline-period">Next</span>
                <h3>AI Silicon &amp; Global Scale</h3>
                <p>
                  Custom ASIC/NPU hardware for democratizing AI compute. Scaling DistilBook to millions worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="about" id="about">
        <div className="section-container about-grid">
          <div className="about-image-wrapper fade-in">
            <div className="about-image-circle"></div>
            <Image
              src="/me.jpeg"
              alt="Ajith Pinninti"
              width={400}
              height={400}
              className="about-image"
            />
          </div>
          <div className="about-content">
            <span className="section-tag fade-in">Hello I&apos;m</span>
            <h2 className="about-title fade-in">
              <span className="title-accent">A</span>jit Pinninti,
              <br />
              Tech Founder
              <br />
              &amp; Builder
            </h2>
            <p className="about-subtitle fade-in">Based in India</p>
            <p className="about-text fade-in">
              My journey started in the physical world. With a degree in Electronics Engineering, I built expertise
              in embedded systems, medical devices, and power electronics. This ground-up understanding of how
              technology functions at the circuit level now fuels my massive software ambitions.
            </p>
            <p className="about-text fade-in">
              Today, I&apos;m deep in the trenches of product development, building AI-powered platforms that aim to
              democratize human knowledge and machine computation for millions.
            </p>
            <a href="#contact" className="btn btn-primary about-cta fade-in">
              Get in Touch <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section className="contact" id="contact">
        <div className="section-container contact-container">
          <div className="contact-left">
            <span className="section-tag fade-in">Get In Touch</span>
            <h2 className="contact-title fade-in">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="title-accent">extraordinary</span>
            </h2>
            <p className="contact-text fade-in">
              Whether you&apos;re a VC looking for the next big bet, a potential partner, or someone who shares the
              vision, I&apos;d love to connect.
            </p>
          </div>
          <div className="contact-right">
            <div className="contact-card fade-in">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:ajitpinninti@gmail.com" className="contact-value">
                  ajitpinninti@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href="tel:+919392477697" className="contact-value">
                  +91 93924 77697
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">Bangalore, India</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Status</span>
                <span className="contact-value status-open">
                  <span className="status-dot"></span> Open to connect
                </span>
              </div>
              <div className="contact-socials">
                <a href="https://www.linkedin.com/in/ajith-pinninti-b69400185/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  LinkedIn ↗
                </a>
                <a href="https://github.com/ajithpinninti" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  GitHub ↗
                </a>
                <a href="https://x.com/ajith_io" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  Twitter ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VIDEO MODAL ========== */}
      {videoModal && (
        <div className="video-overlay" onClick={closeVideo}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="video-close" onClick={closeVideo} aria-label="Close video">
              ✕
            </button>
            <div className="video-embed">
              <iframe
                src={`https://www.youtube.com/embed/${videoModal}?autoplay=1&rel=0`}
                title="Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="section-container footer-container">
          <span className="footer-brand">© 2026 Ajit Pinninti</span>
          <span className="footer-tagline">Built with ambition.</span>
        </div>
      </footer>
    </>
  );
}
