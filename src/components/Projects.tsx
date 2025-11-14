import { motion } from "framer-motion";
import { Database, BarChart3, Brain, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Projects = () => {
  const projects = [
    {
      icon: Database,
      title: "ERP Migration",
      description: "Led enterprise-wide ERP system migration impacting global operations",
      metrics: ["Global Scale", "Zero Downtime", "Multi-Region"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Power BI Automation Factory",
      description: "Designed automated analytics framework delivering real-time insights",
      metrics: ["120+ Reports", "Real-time Data", "Self-Service"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "AI Risk Model",
      description: "Developed predictive AI models for risk assessment and mitigation",
      metrics: ["95% Accuracy", "Predictive", "ML-Powered"],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Workflow,
      title: "O2C Optimization",
      description: "Streamlined Order-to-Cash processes with advanced automation",
      metrics: ["€5.2M Saved", "60% Faster", "Automated"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Key Projects & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformative initiatives that delivered measurable business impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="glass-card border-0 h-full overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.gradient} p-3 mb-4`}>
                      <project.icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
