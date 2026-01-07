import { useState } from "react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitMessage(
        "Thank you! Your message has been sent successfully. We will contact you soon."
      )
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      setTimeout(() => setSubmitMessage(""), 5000)
    } catch (error) {
      setSubmitMessage("Error sending message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 pt-20">
        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-xl border border-red-200 shadow-sm">
                <div className="text-red-600 text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="text-gray-600">
                  Your City, State
                  <br />
                  Country - PIN
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-red-200 shadow-sm">
                <div className="text-red-600 text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-600">
                  +91-XXXX-XXXX-XX
                  <br />
                  Available 9 AM – 6 PM IST
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-red-200 shadow-sm">
                <div className="text-red-600 text-3xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600">
                  info@innovativeenterprise.com
                  <br />
                  support@innovativeenterprise.com
                </p>
              </div>
            </div>

            {/* Form Container - SAME WIDTH AS CARDS */}
            <div className="max-w-7xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
              {/* Inner Wrapper for Comfortable Input Width */}
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />

                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />

                    <input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${inputClass} resize-none`}
                  />

                  {submitMessage && (
                    <div
                      className={`p-4 rounded-lg text-sm font-medium ${
                        submitMessage.includes("Error")
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 active:scale-[0.98] transition disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
