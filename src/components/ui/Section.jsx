import { motion } from "framer-motion";

export function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

