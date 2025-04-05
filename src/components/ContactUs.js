import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent Successfully! 🚀");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-8">
          We'd love to hear from you! Fill out the form below and we'll get back
          to you.
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            placeholder="Your Name"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            placeholder="Your Email"
            required
          />

          {/* Message Input */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm h-32 resize-none"
            placeholder="Your Message"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold text-lg py-3 rounded-lg hover:bg-blue-600 transition shadow-md"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
