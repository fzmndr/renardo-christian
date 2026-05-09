import { useState } from "react";
import {
  Play,
  ArrowRight,
  X,
  Clock,
  Tag,
  CheckCircle,
  User,
  Grid3X3,
} from "lucide-react";
import { worksData } from "../data/worksData";

function Works() {
  const [selectedWork, setSelectedWork] = useState(null);
  const [isAllWorksOpen, setIsAllWorksOpen] = useState(false);

  const openDetail = (work) => {
    setSelectedWork(work);
    setIsAllWorksOpen(false);
  };

  const closeDetail = () => {
    setSelectedWork(null);
  };

  const openAllWorks = () => {
    setIsAllWorksOpen(true);
  };

  const closeAllWorks = () => {
    setIsAllWorksOpen(false);
  };

  return (
    <section className="works" id="works">
      <div className="section-heading">
        <div>
          <p className="section-label">Selected Projects</p>
          <h2>Cerita Visual dari Dunia Otomotif</h2>
        </div>

        <button type="button" className="outline-btn" onClick={openAllWorks}>
          View All Works
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="work-grid">
        {worksData.slice(0, 4).map((item, index) => (
          <div
            className={`work-card work-${index + 1}`}
            key={index}
            style={
              item.image
                ? { backgroundImage: `url(${item.image})` }
                : undefined
            }
          >
            <div className="work-overlay">
              <span>{item.category}</span>

              <button
                type="button"
                className="play-btn"
                onClick={() => openDetail(item)}
                aria-label={`Lihat detail ${item.title}`}
              >
                <Play size={16} fill="currentColor" />
              </button>

              <div className="work-info">
                <h3>{item.title}</h3>

                <p className="work-desc">{item.desc}</p>

                <div className="work-meta">
                  <p>{item.type}</p>
                  <p>{item.duration}</p>
                </div>

                <button
                  type="button"
                  className="detail-link"
                  onClick={() => openDetail(item)}
                >
                  Lihat Detail
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isAllWorksOpen && (
        <div className="all-works-modal">
          <div className="all-works-backdrop" onClick={closeAllWorks}></div>

          <div className="all-works-content">
            <button
              type="button"
              className="all-works-close"
              onClick={closeAllWorks}
              aria-label="Tutup semua portfolio"
            >
              <X size={22} />
            </button>

            <div className="all-works-header">
              <p className="section-label">All Projects</p>

              <h2>Semua Portfolio Otomotif</h2>

              <p>
                Kumpulan project video otomotif Renardo Christian, mulai dari
                car cinematic, showroom promo, event aftermovie, hingga brand
                video untuk industri otomotif.
              </p>
            </div>

            <div className="all-works-grid">
              {worksData.map((item, index) => (
                <button
                  type="button"
                  className="all-work-item"
                  key={index}
                  onClick={() => openDetail(item)}
                  style={
                    item.image
                      ? { backgroundImage: `url(${item.image})` }
                      : undefined
                  }
                >
                  <div className="all-work-overlay">
                    <span>{item.category}</span>

                    <div>
                      <h3>{item.title}</h3>

                      <p>{item.desc}</p>

                      <div className="all-work-meta">
                        <small>{item.type}</small>
                        <small>{item.duration}</small>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedWork && (
        <div className="work-modal">
          <div className="modal-backdrop" onClick={closeDetail}></div>

          <div className="modal-content">
            <button
              type="button"
              className="modal-close"
              onClick={closeDetail}
              aria-label="Tutup detail"
            >
              <X size={22} />
            </button>

            <div
              className="modal-image"
              style={
                selectedWork.image
                  ? { backgroundImage: `url(${selectedWork.image})` }
                  : undefined
              }
            >
              <span>{selectedWork.category}</span>

              {selectedWork.video ? (
                <a
                  href={selectedWork.video}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-play"
                  aria-label={`Putar video ${selectedWork.title}`}
                >
                  <Play size={24} fill="currentColor" />
                </a>
              ) : (
                <button type="button" className="modal-play">
                  <Play size={24} fill="currentColor" />
                </button>
              )}
            </div>

            <div className="modal-body">
              <p className="section-label">Project Detail</p>

              <h2>{selectedWork.title}</h2>

              <p className="modal-desc">{selectedWork.detail}</p>

              <div className="modal-meta">
                <div>
                  <Tag size={18} />
                  <div>
                    <small>Type</small>
                    <strong>{selectedWork.type}</strong>
                  </div>
                </div>

                <div>
                  <Clock size={18} />
                  <div>
                    <small>Duration</small>
                    <strong>{selectedWork.duration}</strong>
                  </div>
                </div>

                <div>
                  <CheckCircle size={18} />
                  <div>
                    <small>Year</small>
                    <strong>{selectedWork.year}</strong>
                  </div>
                </div>
              </div>

              <div className="modal-client">
                <small>Client</small>

                <div className="modal-client-row">
                  <User size={18} />
                  <h3>{selectedWork.client}</h3>
                </div>
              </div>

              <div className="modal-scope">
                <h3>Scope Pekerjaan</h3>

                <div className="scope-list">
                  {selectedWork.scope?.map((scopeItem, index) => (
                    <div key={index}>
                      <CheckCircle size={16} />
                      <span>{scopeItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <a href="#contact" className="primary-btn" onClick={closeDetail}>
                  Tanya Project Serupa
                </a>

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={closeDetail}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Works;