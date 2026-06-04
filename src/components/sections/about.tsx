"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export function About() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-background">
              <Image
                src="/Photo.png"
                alt="Zain ul Abideen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight">About Me</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              I am a Next.js and Agentic AI Developer based in Karachi, Pakistan. I specialize in building
              high-performance, scalable web applications and orchestrating sophisticated AI agents that
              bridge the gap between large language models and real-world business processes.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              My engineering philosophy centers on minimalism and precision. I believe that the best
              software is that which is invisible, allowing the user's goals to take center stage
              without friction.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-background/60 dark:bg-muted/40 backdrop-blur-md border border-border space-y-2 hover:border-primary/30 transition-all group shadow-sm">
                <h3 className="font-semibold text-primary">Full-Stack</h3>
                <p className="text-sm text-muted-foreground">TypeScript, Python, Tailwind CSS, FastAPI</p>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 dark:bg-muted/40 backdrop-blur-md border border-border space-y-2 hover:border-primary/30 transition-all group shadow-sm">
                <h3 className="font-semibold text-primary">AI Orchestration</h3>
                <p className="text-sm text-muted-foreground">MCP, Gemini, Claude, Qwen, Agentic Workflows</p>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 dark:bg-muted/40 backdrop-blur-md border border-border space-y-2 hover:border-primary/30 transition-all group shadow-sm">
                <h3 className="font-semibold text-primary">Performance</h3>
                <p className="text-sm text-muted-foreground">Next.js RSC, Core Web Vitals, SEO</p>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 dark:bg-muted/40 backdrop-blur-md border border-border space-y-2 hover:border-primary/30 transition-all group shadow-sm">
                <h3 className="font-semibold text-primary">Deployment</h3>
                <p className="text-sm text-muted-foreground">Vercel, Docker, Cloud Infrastructure</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
