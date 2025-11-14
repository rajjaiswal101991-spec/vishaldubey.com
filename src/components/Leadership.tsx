import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Leadership = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Leadership & Vision
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12 rounded-xl mb-8"
          >
            <Quote className="w-12 h-12 text-accent mb-6" />
            <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-6 leading-relaxed">
              "Transformation succeeds when people, process, and data move in harmony."
            </blockquote>
            <p className="text-accent font-semibold">— Vishal Dubey</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">My Leadership Philosophy</h3>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I believe in empowering teams through data-driven insights and fostering a culture of 
              continuous innovation. By aligning technology with business objectives, I help organizations 
              navigate complex transformations while maintaining operational excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines strategic vision with hands-on execution, ensuring that every initiative 
              delivers tangible value and positions the enterprise for long-term success in an increasingly 
              digital world.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
