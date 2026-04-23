"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <main className="relative min-h-dvh text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/lessons/lessongear.jpg"
          alt="Contact background"
          fill
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <FadeIn>
        <div className="max-w-2xl mx-auto px-6 pt-32 pb-20">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 shadow-xl">
            <h1 className="text-4xl md:text-5xl mb-6 font-light text-center">
              Contact Us
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 pb-28 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 resize-none"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full cursor-pointer py-3 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300 font-medium"
              >
                Send Message
              </button>

              {status && (
                <p className="text-center text-white/80 mt-4">{status}</p>
              )}
            </form>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
