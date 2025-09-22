import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-90 z-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float z-20" />
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float z-20" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-float z-20" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-medium">Welcome to the Future</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Build Something
            <span className="text-gradient block">Amazing</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Create stunning websites with modern design, powerful features, and seamless user experiences that captivate and convert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4 h-auto">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;