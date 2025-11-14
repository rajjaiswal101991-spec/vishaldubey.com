import { motion } from "framer-motion";
import { Download, Globe, Award, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  const highlights = [
    { icon: Globe, label: "Global Leadership", value: "4 Continents" },
    { icon: Award, label: "Cost Savings", value: "€5.2M+" },
    { icon: TrendingUp, label: "Digital Initiatives", value: "120+" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text">
            About Me
          </h2>

          <div className="glass-card p-8 rounded-xl mb-8">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A visionary leader with over <span className="text-accent font-semibold">20+ years of experience</span> in 
              global operations, data analytics, automation, and digital transformation. I specialize in turning complex 
              data challenges into strategic opportunities that drive enterprise-wide innovation and efficiency.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Throughout my career, I've led transformative initiatives across multiple continents, delivering measurable 
              impact through data-driven decision-making, process automation, and cutting-edge analytics solutions.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <item.icon className="w-10 h-10 mx-auto mb-4 text-accent" />
                <div className="text-2xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              <a href="/Vishal_Dubey_Resume.pdf" download>
                <Download className="mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
