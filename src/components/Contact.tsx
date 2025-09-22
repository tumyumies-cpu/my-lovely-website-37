import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Start Your
            <span className="text-gradient block">Next Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help bring your vision to life with cutting-edge technology and beautiful design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-card border-0 bg-card/50 backdrop-blur-sm animate-slide-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="transition-smooth focus:shadow-glow border-border/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="transition-smooth focus:shadow-glow border-border/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="transition-smooth focus:shadow-glow border-border/50"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project..."
                  className="min-h-32 transition-smooth focus:shadow-glow border-border/50 resize-none"
                />
              </div>
              
              <Button variant="gradient" size="lg" className="w-full text-lg py-4 h-auto">
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in touch</h3>
              <p className="text-muted-foreground text-lg mb-8">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email us</p>
                  <p className="text-muted-foreground">hello@company.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Call us</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Visit us</p>
                  <p className="text-muted-foreground">123 Business St, City, State 12345</p>
                </div>
              </div>
            </div>
            
            <Card className="p-6 gradient-primary border-0 shadow-glow">
              <div className="text-white">
                <h4 className="font-bold text-lg mb-2">Ready to get started?</h4>
                <p className="text-white/80 mb-4">
                  Join thousands of satisfied customers who trust us with their projects.
                </p>
                <Button variant="glass" size="lg" className="w-full">
                  Schedule a Call
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;