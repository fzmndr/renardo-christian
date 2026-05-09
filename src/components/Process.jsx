import { ArrowRight, CheckCircle } from "lucide-react";
import { processData } from "../data/processData";

function Process() {
  return (
    <section className="process" id="process">
      <div className="process-heading">
        <p className="section-label">Work Process</p>

        <div>
          <h2>Alur Kerja yang Terarah dari Brief sampai Final Video</h2>
          <p>
            Setiap project dibuat dengan proses yang jelas agar hasil video
            sesuai kebutuhan brand, karakter kendaraan, dan target audience.
          </p>
        </div>
      </div>

      <div className="process-grid">
        {processData.map((item, index) => (
          <div className="process-card" key={index}>
            <span>{item.number}</span>

            <div className="process-icon">
              <CheckCircle size={22} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            {index !== processData.length - 1 && (
              <div className="process-arrow">
                <ArrowRight size={18} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;