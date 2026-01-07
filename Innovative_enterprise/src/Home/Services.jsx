import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    title: "Laptop & Desktop Supplier",
    description: "Wide range of laptops and desktop computers for personal and business use",
    img: "/services/laptop.jpg",
  },
  {
    title: "Security Services",
    description: "Comprehensive security solutions for your computing infrastructure",
    img: "/services/security.jpg",
  },
  {
    title: "Corporate Telecom",
    description: "Professional telecom solutions tailored for enterprises",
    img: "/services/telecom.jpg",
  },
  {
    title: "Gaming Setup",
    description: "High-performance gaming systems and custom builds",
    img: "/services/gaming.jpg",
  },
  {
    title: "Printer Solutions",
    description: "All types of printers and printing solutions for your needs",
    img: "/services/printer.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-block">
            <span className="px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-full border border-accent/30">
              Our Capabilities
            </span>
          </div>
          <h2 className="section-title">Comprehensive IT Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive range of services designed to meet every aspect of your business IT needs.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl border shadow hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group">
                
                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
