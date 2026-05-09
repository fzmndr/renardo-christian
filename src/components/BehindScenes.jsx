import { useState } from "react";
import { ArrowRight, X, Camera, Video, CheckCircle } from "lucide-react";
import { btsData } from "../data/btsData";

function BehindScenes() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="bts" id="bts">
      <div className="bts-text">
        <p className="section-label">Behind The Scenes</p>

        <h2>Di Balik Setiap Shot yang Bertenaga</h2>

        <p>
          Setiap video dibuat dengan perencanaan angle, lighting, movement, dan
          editing yang menonjolkan kecepatan, detail, serta karakter kendaraan.
        </p>

        <button type="button" className="secondary-btn" onClick={openModal}>
          See More BTS
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="bts-grid">
        {btsData.map((item, index) => (
          <button
            type="button"
            className="bts-card"
            key={index}
            onClick={openModal}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <span>0{index + 1}</span>

            <div>
              <small>{item.category}</small>
              <h3>{item.title}</h3>
              <p>Production process</p>
            </div>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="bts-modal">
          <div className="bts-backdrop" onClick={closeModal}></div>

          <div className="bts-modal-content">
            <button
              type="button"
              className="bts-close"
              onClick={closeModal}
              aria-label="Close BTS detail"
            >
              <X size={22} />
            </button>

            <div className="bts-modal-header">
              <p className="section-label">Production Process</p>

              <h2>Behind The Scenes</h2>

              <p>
                Proses produksi video otomotif Renardo Christian dirancang untuk
                menghasilkan visual yang sinematik, detail, dan punya karakter
                kuat. Mulai dari planning, shooting, hingga editing dibuat
                dengan pendekatan cinematic.
              </p>
            </div>

            <div className="bts-detail-grid">
              {btsData.map((item, index) => (
                <div className="bts-detail-card" key={index}>
                  <div
                    className="bts-detail-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <span>{item.category}</span>
                  </div>

                  {item.video && (
                    <video className="bts-video" controls>
                      <source src={item.video} type="video/mp4" />
                      Browser kamu tidak mendukung video.
                    </video>
                  )}

                  <div className="bts-detail-icon">
                    {index % 2 === 0 ? (
                      <Camera size={24} />
                    ) : (
                      <Video size={24} />
                    )}
                  </div>

                  <small>0{index + 1}</small>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bts-process-box">
              <h3>Alur Produksi</h3>

              <div className="bts-process-list">
                <div>
                  <CheckCircle size={17} />
                  <span>Brief konsep dan kebutuhan client</span>
                </div>

                <div>
                  <CheckCircle size={17} />
                  <span>Perencanaan lokasi, angle, dan shot list</span>
                </div>

                <div>
                  <CheckCircle size={17} />
                  <span>Produksi video cinematic otomotif</span>
                </div>

                <div>
                  <CheckCircle size={17} />
                  <span>Editing, sound design, dan color grading</span>
                </div>
              </div>
            </div>

            <div className="bts-modal-actions">
              <a href="#contact" className="primary-btn" onClick={closeModal}>
                Diskusi Project
              </a>

              <button type="button" className="secondary-btn" onClick={closeModal}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default BehindScenes;