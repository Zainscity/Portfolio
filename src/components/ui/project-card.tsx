"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import { ExternalLink, GitBranch } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="block group p-6 rounded-2xl bg-background/60 dark:bg-muted/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-xl outline-none focus:ring-2 focus:ring-primary/50"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <div className="p-2 rounded-full bg-muted text-muted-foreground group-hover:text-foreground group-hover:bg-primary/10 transition-colors">
          {project.type === "GitHub" ? (
            <GitBranch className="w-5 h-5" />
          ) : (
            <ExternalLink className="w-5 h-5" />
          )}
        </div>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techTags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border group-hover:border-primary/20 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
