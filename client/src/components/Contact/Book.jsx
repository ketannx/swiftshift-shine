import React, { useState } from "react";
import toast from "react-hot-toast";
import axiosInstace from '../../api/axios'

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  duration: "",
  message: "",
};

function Book() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!formData.fullName.trim()) e.fullName = "Full name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email))
      e.email = "Invalid email";
    if (!formData.service) e.service = "Select a service";
    if (!formData.duration) e.duration = "Select booking duration";
    if (!formData.message || formData.message.length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setLoading(true);
    try {
      const res = await axiosInstace.post("/bookings", formData);

      if (res.status === 201 || res.status === 200) {
        toast.success("We will contact you soon ✅");
        setFormData(initialState);
      } else {
        toast.error(res.data?.message || "Something went wrong! Please try again.");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Network error. Please try again.");
      }
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">

        <h2 className="text-4xl font-semibold text-center mb-3 text-gray-900">
          Book Cleaning Service
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Choose your cleaning service and preferred duration. Our team will
          reach out shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Full Name *"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              placeholder="John Doe"
            />
            <Input
              label="Email Address *"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="john@email.com"
            />
          </div>

          {/* Phone & Service */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 234 567 890"
            />

            <Select
              label="Cleaning Service *"
              name="service"
              value={formData.service}
              onChange={handleChange}
              error={errors.service}
              options={[
                "House Cleaning",
                "Condo Cleaning",
                "Apartment Cleaning",
                "Studio Cleaning",
                "Office Cleaning",
                "Deep Cleaning",
                "Steam Cleaning",
                "Power Washing"
              ]}
            />
          </div>

          {/* Duration */}
          <Select
            label="Booking Duration *"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            error={errors.duration}
            options={[
              "3 Hours",
              "4 Hours",
              "6 Hours",
              "Full Day",
            ]}
          />

          {/* Message */}
          <Textarea
            label="Message *"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Tell us your cleaning needs..."
          />

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-3 rounded-lg transition"
              disabled={loading}
            >
              {loading ? "Booking..." : "Book Cleaning"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ---------------- Reusable Components ---------------- */

const Input = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400/40 focus:border-green-500 outline-none"
    />
    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
  </div>
);

const Select = ({ label, options, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <select
      {...props}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400/40 focus:border-green-500 outline-none"
    >
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
  </div>
);

const Textarea = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      {...props}
      rows="4"
      className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-green-400/40 focus:border-green-500 outline-none"
    />
    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
  </div>
);

export default Book;
