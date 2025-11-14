import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vishaldubey21@gmail.com",
      href: "mailto:vishaldubey21@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9899256541",
      href: "tel:+919899256541",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/vishal-dubey-72a947123",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Let's discuss how data-driven transformation can elevate your enterprise
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.icon === Linkedin ? "_blank" : undefined}
                  rel={item.icon === Linkedin ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass-card p-6 rounded-xl flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
