import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4">
            <span className="text-2xl font-bold gradient-text">Vishal Dubey</span>
          </div>
          <p className="text-muted-foreground mb-2">
            Director – Data & Analytics | Digital Transformation
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vishal Dubey. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
