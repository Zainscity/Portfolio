"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-sm text-muted-foreground">
            © {currentYear} Zain ul Abideen. Built with Next.js & Tailwind.
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/zainscity"
              target="_blank"
              className="p-2 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/zainscity/"
              target="_blank"
              className="p-2 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:zainulabideen8692@gmail.com"
              className="p-2 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
