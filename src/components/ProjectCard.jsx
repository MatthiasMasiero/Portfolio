import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { Chip } from "./ui/Chip";
import { getIcon } from "../utils/iconMap";

export function ProjectCard({ p }) {
  const IconComponent = getIcon(p.icon);

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <Card className="h-full">
        <CardContent className="p-4 md:p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <div className="flex items-center justify-center w-5 h-5">
              <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span>{p.title}</span>
          </div>
          <p className="text-white/70 text-sm">{p.desc}</p>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t, i) => (
              <Chip key={i}>{t}</Chip>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            {p.links?.map((l, i) => (
              <Button key={i} asChild variant="secondary" className="h-9">
                <a href={l.href} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> {l.label}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

