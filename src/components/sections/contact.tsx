"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4c8a5fb7-281b-40cd-bffe-7be73970920b", // Get this from web3forms.com
          name: data.name,
          email: data.email,
          message: data.message,
          subject: `New Portfolio Message from ${data.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Failed to send message. Check your connection.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, agentic AI opportunities,
              or professional collaborations. Whether you have a question or just
              want to say hello, my inbox is open.
            </p>

            <div className="space-y-4 pt-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-background/60 dark:bg-muted/40 backdrop-blur-md border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Email</p>
                  <a 
                    href="mailto:zainulabideen8692@gmail.com" 
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    zainulabideen8692@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-background/60 dark:bg-muted/40 backdrop-blur-md border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Location</p>
                  <p className="text-foreground font-medium">Karachi, Pakistan</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background/60 dark:bg-muted/40 backdrop-blur-md p-8 rounded-3xl border border-border shadow-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium block">Name</label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-transparent text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium block">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-transparent text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium block">Message</label>
                <textarea
                  {...register("message")}
                  id="message"
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-transparent text-foreground focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                isLoading={isSubmitting}
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
