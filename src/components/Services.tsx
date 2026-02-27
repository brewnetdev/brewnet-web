import { services } from "@/data/services";
import ServerCatalog from "./ServerCatalog";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Services</span>
          <h2 className="section-title">
            All your server needs,
            <br />
            <span className="gradient-text">one platform</span>
          </h2>
          <p className="section-desc">
            17 Docker services covering web servers, databases, file storage,
            media streaming, SSH, mail, and more.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <div className="service-item" key={svc.title}>
              <div className={`service-icon ${svc.iconClass}`}>
                {svc.iconText}
              </div>
              <div className="service-info">
                <h4>{svc.title}</h4>
                <p>{svc.description}</p>
              </div>
            </div>
          ))}
        </div>

        <ServerCatalog />
      </div>
    </section>
  );
}
