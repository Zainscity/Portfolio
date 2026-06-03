"use client";

import { motion, Variants } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";

export function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center mb-12 space-y-4"
        >
           <div className="absolute -inset-x-8 -inset-y-8 backdrop-blur-sm bg-white/5 dark:bg-black/5 rounded-full -z-10" />

          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of engineering projects focusing on AI agents,
            robotics, and high-performance web systems.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
