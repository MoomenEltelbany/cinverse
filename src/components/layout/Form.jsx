import { useState } from "react";
import toast from "react-hot-toast";
import Main from "../common/Main";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    toast.success("Your inquiry was submitted successfully!");

    setFormData({
      name: "",
      email: "",
      inquiry: "",
    });
  }

  return (
    <Main>
      <div className="bg-surface-card border-border-subtle mx-auto max-w-2xl rounded-lg border p-6 shadow-md">
        <h2 className="text-text-primary mb-4 text-center text-2xl font-bold">
          Submit your question
        </h2>
        <p className="text-text-tertiary mb-6 text-center text-base">
          We'll get back to you as fast as we can—just fill out the form below
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="text-text-primary mb-1 block text-sm font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Write your full name"
              className="border-border-subtle bg-surface-main placeholder:text-text-tertiary focus:ring-border-strong focus:border-border-strong w-full rounded-md border px-4 py-2 text-sm focus:ring-2 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-text-primary mb-1 block text-sm font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="border-border-subtle bg-surface-main placeholder:text-text-tertiary focus:ring-border-strong focus:border-border-strong w-full rounded-md border px-4 py-2 text-sm focus:ring-2 focus:outline-none"
            />
          </div>

          {/* Inquiry */}
          <div>
            <label
              htmlFor="inquiry"
              className="text-text-primary mb-1 block text-sm font-medium"
            >
              Your Question
            </label>
            <textarea
              id="inquiry"
              rows="5"
              required
              value={formData.inquiry}
              onChange={handleChange}
              placeholder="Type your question here..."
              className="border-border-subtle bg-surface-main placeholder:text-text-tertiary focus:ring-border-strong focus:border-border-strong w-full resize-none rounded-md border px-4 py-2 text-sm focus:ring-2 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-brand hover:bg-brand-dark cursor-pointer rounded-md px-6 py-2 font-semibold text-white transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Main>
  );
}

export default Form;
