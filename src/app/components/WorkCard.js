"use client";

import { useState } from "react";
import Image from "next/image";

/* ---- Media Slider with prev/next arrows (supports images + MP4 videos) ---- */
export function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  const isVideo = (src) => src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");

  return (
    <div className="slider">
      <div className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div className="slider-slide" key={i}>
            {isVideo(src) ? (
              <video
                src={src}
                className="slider-img"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image src={src} alt={`Slide ${i + 1}`} width={600} height={375} className="slider-img" unoptimized />
            )}
          </div>
        ))}
      </div>
      {hasMultiple && (
        <>
          <button className="slider-btn slider-prev" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className="slider-btn slider-next" onClick={next} aria-label="Next">
            ›
          </button>
          <div className="slider-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`slider-dot${i === index ? " active" : ""}`}
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ---- GitHub Icon ---- */
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

/* ---- Work Card (supports reverse prop for alternating layout) ---- */
export function WorkCard({ title, desc, tags, images, icon, github, badge, delay = 1, reverse = false }) {
  const hasImages = images && images.length > 0;

  const visual = (
    <div className={`wk-visual${hasImages ? " wk-visual-img" : ""}`}>
      {hasImages ? (
        <ImageSlider images={images} />
      ) : (
        <div className="wk-icon-large">{icon}</div>
      )}
    </div>
  );

  const info = (
    <div className="wk-info">
      <h3 className="wk-title" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="wk-desc">{desc}</p>
      <div className="wk-footer">
        <div className="work-tags">
          {tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        {badge && <span className="work-private">{badge}</span>}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="work-github">
            <GithubIcon /> GitHub
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className={`wk-row fade-in fade-in-delay-${delay}${reverse ? " wk-row-reverse" : ""}`}>
      {reverse ? <>{info}{visual}</> : <>{visual}{info}</>}
    </div>
  );
}
