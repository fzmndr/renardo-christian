import { MessageCircle } from "lucide-react";
import { siteData } from "../data/siteData";

function FloatingWhatsApp() {
  const whatsappLink = `https://wa.me/${
    siteData.whatsappNumber
  }?text=${encodeURIComponent(siteData.whatsappMessage)}`;

  return (
    <a
      href={whatsappLink}
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={22} />
      <span>WhatsApp</span>
    </a>
  );
}

export default FloatingWhatsApp;