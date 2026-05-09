import { Star, Quote } from "lucide-react";
import { testimonialsData } from "../data/testimonialsData";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-heading">
        <p className="section-label">Client Reviews</p>

        <h2>Dipercaya untuk Membangun Visual Otomotif yang Lebih Berkesan</h2>

        <p>
          Beberapa contoh feedback dari project otomotif seperti showroom,
          komunitas mobil, event, dan brand service kendaraan.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">
              <Quote size={24} />
            </div>

            <div className="stars">
              {Array.from({ length: item.rating }).map((_, starIndex) => (
                <Star key={starIndex} size={17} fill="currentColor" />
              ))}
            </div>

            <p className="testimonial-review">“{item.review}”</p>

            <div className="testimonial-client">
              <div className="client-avatar">
                {item.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <div>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;