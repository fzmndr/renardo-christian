import { siteData } from "../data/siteData";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>RC</strong>
        <span>{siteData.brandName}</span>
      </div>

      <p>© 2026 {siteData.brandName}. All Rights Reserved.</p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;