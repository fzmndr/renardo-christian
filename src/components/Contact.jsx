import { Mail, Send, MessageCircle, ArrowRight } from "lucide-react";
import { siteData } from "../data/siteData";

function Contact() {
  const whatsappLink = `https://wa.me/${
    siteData.whatsappNumber
  }?text=${encodeURIComponent(siteData.whatsappMessage)}`;

  const emailLink = `mailto:${siteData.email}`;

  return (
    <section className="contact" id="contact">
      <div className="contact-box">
        <div className="contact-left">
          <p className="section-label">Punya Proyek?</p>

          <h2>
            Mari Wujudkan Ide Anda Menjadi Cerita Visual Otomotif yang Berkesan.
          </h2>

          <p>
            Cocok untuk kebutuhan video mobil pribadi, showroom, car meet,
            launching produk, bengkel, detailing, hingga brand otomotif.
          </p>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <span>Start Project</span>

            <h3>Konsultasi konsep video bersama {siteData.brandName}.</h3>

            <div className="contact-buttons">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a href={emailLink} className="secondary-btn">
                <Mail size={18} />
                Email
              </a>
            </div>

            <a
              href={siteData.instagram}
              target="_blank"
              rel="noreferrer"
              className="instagram-link"
            >
              <Send size={16} />
              Lihat Instagram
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;