import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaHeadset, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaClock, FaComments, FaQuestionCircle } from "react-icons/fa";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "Normal",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Support ticket submitted! Our team will get back to you within 2 hours.");
    setSubmitted(true);
  };

  return (
    <main className="w-full pt-28 sm:pt-32 lg:pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/home" className="hover:text-red-500 transition">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-900">Support & Help Center</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-zinc-900 via-neutral-900 to-red-950 text-white rounded-2xl p-8 sm:p-12 mb-12 shadow-xl border border-zinc-800">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-red-500/30">
              <FaHeadset className="text-red-400" /> 24/7 Dedicated Customer Care
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              How Can We Help You Today?
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              Have questions about your order, tracking, returns, or technical issues? Our support specialists are available around the clock to assist you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#ticket-form"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg shadow transition text-sm flex items-center gap-2"
              >
                <FaPaperPlane /> Submit Support Ticket
              </a>
              <button
                onClick={() => toast.success("Live Chat agent connected! Type your query in the widget.")}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg backdrop-blur-sm transition text-sm flex items-center gap-2"
              >
                <FaComments className="text-red-400" /> Start Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-red-50 text-red-500 rounded-xl text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Call Us Directly</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-2">Instant toll-free phone assistance</p>
              <p className="font-semibold text-red-600 text-sm sm:text-base">+88015-88888-9999</p>
              <span className="text-[11px] text-gray-400 flex items-center gap-1 mt-1">
                <FaClock /> Mon - Sun: 8am - 10pm
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-red-50 text-red-500 rounded-xl text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Email Support</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-2">Send us your detailed inquiry</p>
              <p className="font-semibold text-red-600 text-sm sm:text-base">exclusive@gmail.com</p>
              <span className="text-[11px] text-gray-400 flex items-center gap-1 mt-1">
                <FaClock /> Avg Response Time: 2 Hours
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-red-50 text-red-500 rounded-xl text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Headquarters</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-2">Visit our main office</p>
              <p className="text-gray-800 text-xs sm:text-sm font-medium">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Ticket Form Section */}
        <div id="ticket-form" className="bg-white rounded-2xl p-6 sm:p-10 border border-zinc-200 shadow-sm">
          <div className="border-b border-zinc-100 pb-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Submit a Support Ticket</h2>
            <p className="text-gray-500 text-sm">Please detail your issue below so our team can resolve it promptly.</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-xl text-center">
              <FaHeadset className="text-4xl text-emerald-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Ticket Submitted Successfully!</h3>
              <p className="text-sm max-w-md mx-auto mb-6">
                Thank you for contacting SavvyShopper. Ticket ID: <strong>#TKT-{Math.floor(100000 + Math.random() * 900000)}</strong>. A support executive will respond to <strong>{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "", message: "", priority: "Normal" });
                }}
                className="bg-emerald-600 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Order #12345 tracking issue"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Priority Level</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500 text-sm cursor-pointer"
                  >
                    <option value="Normal">Normal</option>
                    <option value="High">High Priority</option>
                    <option value="Urgent">Urgent (Order Cancellation)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Detailed Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your issue or question in detail..."
                  required
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500 text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaPaperPlane /> Send Support Request
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
