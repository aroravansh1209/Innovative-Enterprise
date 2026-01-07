

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-20">

        {/* Company Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Who We Are</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Innovative Enterprise is a leading provider of comprehensive IT solutions, computer hardware, and
                  specialized services. With years of industry experience, we have built a reputation for delivering
                  quality products and exceptional customer service.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  From individual consumers to large corporations, we serve a diverse clientele with customized
                  solutions tailored to their unique needs.
                </p>
              </div>

              <div className="bg-red-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To provide reliable, innovative, and cost-effective IT solutions that empower businesses and
                  individuals to achieve their goals in the digital age.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-black mb-3">Expert Team</h3>
                <p className="text-gray-700">
                  Our experienced professionals are dedicated to providing top-notch service and technical support.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-black mb-3">Quality Products</h3>
                <p className="text-gray-700">
                  We source from trusted manufacturers and suppliers to ensure only the best products reach our
                  customers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-black mb-3">Customer Support</h3>
                <p className="text-gray-700">
                  Available round-the-clock, our support team is always ready to assist with any queries or concerns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Integrity", desc: "Honest and transparent dealings" },
                { title: "Excellence", desc: "Commitment to quality in all services" },
                { title: "Innovation", desc: "Embracing latest technology trends" },
                { title: "Reliability", desc: "Dependable support and solutions" },
              ].map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
