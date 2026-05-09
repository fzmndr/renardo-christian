import { servicesData } from "../data/servicesData";

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-title">
        <p className="section-label dark">Services</p>
        <h2>Layanan Video Otomotif untuk Brand, Showroom, dan Komunitas</h2>
      </div>

      <div className="service-grid">
        {servicesData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <Icon />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <small>{item.output}</small>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;