"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import FixedImageBackground from "@/components/FixedImageBackground";
import PageHeader from "@/components/PageHeader";
import GlassCard from "@/components/GlassCard";
import SiteFooter from "@/components/SiteFooter";

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
      <FixedImageBackground
        src="/images/lessons/lessongear.jpg"
        alt="Contact background"
        objectPosition="object-left"
      />

      <div className="max-w-2xl mx-auto px-6 pt-32 pb-12">
        <PageHeader
          title="Contact Us"
          subtitle="Questions about lessons, boarding, or visiting the farm? We'd love to hear from you."
        />

        <FadeIn delay={0.15}>
          <GlassCard className="p-8 md:p-10">
            <div className="mb-8 pb-8 border-b border-white/15 text-center space-y-2">
              <p className="text-white/90">
                Louisville, Ohio — by appointment
              </p>
              <a
                href="mailto:kristen.waldron@att.net"
                className="inline-block text-white/80 hover:text-white transition-colors underline underline-offset-4"
              >
                kristen.waldron@att.net
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 resize-none"
              />

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
          </GlassCard>
        </FadeIn>

        <SiteFooter />
      </div>
    </main>
  );
}
