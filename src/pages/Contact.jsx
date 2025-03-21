import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { useEffect } from "react";
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1E3A8A] text-center mb-10">
            Get in Touch
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-xl">
            {/* Contact Info */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                Office Address
              </h2>
              <p className="text-gray-600 mt-2">
                #467, 6th Main, 10th Cross,<br />
                Vijayanagar Ist Stage,<br />
                Near Corporation Bank,<br />
                Mysuru-570017
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1E3A8A] flex items-center gap-2">
                  <FaEnvelope className="text-blue-500" />
                  Email
                </h3>
                <p className="text-gray-600 mt-1">iswarngomysore@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E3A8A] flex items-center gap-2">
                  <FaPhone className="text-green-500" />
                  Phone
                </h3>
                <p className="text-gray-600 mt-1">+91 9980629441</p>
              </div>
            </div>

            <div className="w-full h-0.5 bg-gray-300 my-6" />

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg hover:bg-[#163269] transition-transform transform hover:scale-105 w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map Section */}
          <div className="mt-10 overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Office Location"
              className="w-full h-72 md:h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.660148928987!2d76.60858547587064!3d12.321303988751394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf700eef5d6c1b%3A0x485b50a176d74e0d!2sCorporation%20Bank%2C%20Vijayanagar%20Ist%20Stage%2C%20Mysuru-570017!5e0!3m2!1sen!2sin!4v1711048402194!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
