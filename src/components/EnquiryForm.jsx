import { useState } from "react";
import { COURSE_OPTIONS } from "../data/courses";

const inputClass = `
  mt-1 w-full px-4 py-2 rounded-md
  border border-orange-200/80 dark:border-gray-700
  bg-white/90 dark:bg-gray-900/90
  backdrop-blur-sm
  text-gray-800 dark:text-white
  placeholder-gray-400 dark:placeholder-gray-500
  focus:outline-none focus:border-[#F28C28]
  focus:ring-2 focus:ring-[#F28C28]/40
  transition
`;

const EnquiryForm = ({ onSubmitted }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
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
    const { name, email, phone, course, message } = formData;

    if (!name || !email || !phone || !course) {
      alert("Please fill all the required fields.");
      return;
    }

    const text = `*[NEW COURSE ENQUIRY]*\n\nHello Agastyaan Technology!\n\nHere are the details:\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Course:* ${course}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.location.href = `https://wa.me/916230466249?text=${encodedText}`;

    // Reset the form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });

    if (onSubmitted) onSubmitted();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          className={inputClass}
        />
      </div>

      {/* Course */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Course Interested In
        </label>
        <select
          name="course"
          required
          value={formData.course}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select course</option>
          {COURSE_OPTIONS.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className={inputClass}
        />
      </div>

      {/* Button */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="
            w-full py-3 rounded-md
            bg-[#F28C28] text-white font-semibold
            hover:bg-orange-600 hover:scale-[1.02]
            transition duration-300
          "
        >
          Submit Enquiry
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;
