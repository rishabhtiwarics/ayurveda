'use client';

import { useRef, useState } from 'react';
import { ArrowRight, Leaf, Pause, Play } from 'lucide-react';

export default function StoryVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  return (
    <section className="story-video-section" aria-label="Ayurvedic care story">
      <div className="story-video-grid">
        <article className="story-video-content">
          <img className="story-video-leaf" src="/images/leaf.png" alt="" aria-hidden="true" />
          <span className="story-video-kicker">
            <Leaf aria-hidden="true" />
            <span>Our Story</span>
          </span>
          <h2>Botanical care for mindful rituals.</h2>
          <p>
            We blend pure Ayurvedic ingredients with thoughtful self-care, made for skin that feels
            calm, fresh, and naturally radiant.
          </p>
          <a href="#" aria-label="Explore the AyurVeda story">
            Our Story <ArrowRight aria-hidden="true" />
          </a>
        </article>

        <div className="story-video-media">
          <video
            ref={videoRef}
            className="story-video"
            src="/images/video.mp4"
            poster="/images/herobnner1.png"
            autoPlay
            muted
            loop
            playsInline
          />
          <button
            className="story-video-control"
            type="button"
            aria-label={isPlaying ? 'Pause story video' : 'Play story video'}
            onClick={toggleVideo}
          >
            {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          </button>
        </div>
      </div>
    </section>
  );
}
