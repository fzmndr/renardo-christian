import { useState } from "react";
import { Play, ArrowRight, Send, Video, Camera, X } from "lucide-react";
import { heroData } from "../data/heroData";

function Hero() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const openShowreel = () => {
    setIsShowreelOpen(true);
  };

  const closeShowreel = () => {
    setIsShowreelOpen(false);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="section-label">{heroData.label}</p>

        <h1>{heroData.title}</h1>

        <p className="hero-desc">{heroData.desc}</p>

        <div className="hero-buttons">
          <a href="#works" className="primary-btn">
            <Play size={18} fill="currentColor" />
            View Works
          </a>

          <button
            type="button"
            className="secondary-btn"
            onClick={openShowreel}
          >
            Watch Reel
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="socials">
          <span>Follow me</span>
          <Send size={18} />
          <Video size={18} />
          <Camera size={18} />
        </div>
      </div>

      <div className="hero-visual">
        {heroData.visuals.map((item, index) => (
          <div
            className={`visual-card image-card ${item.className}`}
            key={index}
            style={
              item.image
                ? { backgroundImage: `url(${item.image})` }
                : undefined
            }
          >
            <span>{item.label}</span>

            <div>
              {index === 0 && <p>Featured Work</p>}
              <h3>{item.title}</h3>
              {item.desc && <small>{item.desc}</small>}
            </div>
          </div>
        ))}
      </div>

      {isShowreelOpen && (
        <div className="showreel-modal">
          <div className="showreel-backdrop" onClick={closeShowreel}></div>

          <div className="showreel-content">
            <button
              type="button"
              className="showreel-close"
              onClick={closeShowreel}
              aria-label="Close showreel"
            >
              <X size={22} />
            </button>

            <div className="showreel-header">
              <p className="section-label">Showreel</p>
              <h2>Automotive Cinematic Reel</h2>
              <p>
                Kumpulan visual otomotif Renardo Christian untuk kebutuhan
                showroom, brand, car meet, rolling shot, dan cinematic film.
              </p>
            </div>

            <div className="showreel-video-box">
              {heroData.showreelVideo ? (
                <video className="showreel-video" controls autoPlay>
                  <source src={heroData.showreelVideo} type="video/mp4" />
                  Browser kamu tidak mendukung video.
                </video>
              ) : (
                <div className="showreel-placeholder">
                  <Play size={52} fill="currentColor" />
                  <h3>Showreel Video Belum Ditambahkan</h3>
                  <p>
                    Nanti masukkan file video ke folder{" "}
                    <strong>src/assets/vidio/</strong>, lalu hubungkan dari
                    file <strong>heroData.js</strong>.
                  </p>
                </div>
              )}
            </div>

            <div className="showreel-actions">
              <a href="#works" className="primary-btn" onClick={closeShowreel}>
                Lihat Portfolio
              </a>

              <button
                type="button"
                className="secondary-btn"
                onClick={closeShowreel}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;