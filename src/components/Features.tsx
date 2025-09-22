import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Palette, Smartphone, Shield, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with cutting-edge technology for instant loading times.",
    badge: "Performance"
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Stunning visuals crafted with attention to detail and modern aesthetics.",
    badge: "Design"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that looks perfect on every device and screen size.",
    badge: "Responsive"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and enterprise-grade reliability.",
    badge: "Security"
  },
  {
    icon: Rocket,
    title: "Easy to Scale",
    description: "Architecture designed to grow with your business and handle any traffic.",
    badge: "Scalable"
  },
  {
    icon: Users,
    title: "User Focused",
    description: "Intuitive interfaces designed around user experience and accessibility.",
    badge: "UX"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6 gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Features That
            <span className="text-gradient block">Make a Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature is carefully crafted to deliver exceptional results and user experiences that drive success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 shadow-card hover:shadow-glow transition-smooth group cursor-pointer border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="animate-slide-in">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;