"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-20 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 dark:bg-primary/10 blur-[120px]" 
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="relative space-y-4">
            {/* Glass separation layer to prevent background animation distortion */}
            <div className="absolute -inset-x-8 -inset-y-8 backdrop-blur-sm bg-white/5 dark:bg-black/5 rounded-full -z-10" />

            <h1 className="relative z-10 text-5xl sm:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Next.js & <br />
              <span className="text-primary bg-clip-text">AI Agent Orchestration</span>
            </h1>
            <motion.p
              variants={itemVariants}
              className="relative z-10 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Engineering premium digital experiences with a focus on minimalism,
              performance, and the cutting edge of Agentic AI.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              variant="primary"
              size="lg"
              className="text-base min-w-[160px]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base min-w-[160px]"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
