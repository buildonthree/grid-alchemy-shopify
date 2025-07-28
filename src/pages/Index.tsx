import { BentoGrid } from "@/components/BentoGrid";
import { ModernSlideshow } from "@/components/ModernSlideshow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Shopify Expert Services
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your{" "}
            <span className="gradient-text">Shopify Store</span>{" "}
            Into a Sales Machine
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert Shopify design, optimization, and consulting services that boost conversions, 
            improve performance, and grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity px-8 py-4 text-lg"
              onClick={scrollToServices}
            >
              View Services
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg"
            >
              Get Free Audit
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm">5.0 Rating</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="text-sm">50+ Stores Optimized</div>
            <div className="h-4 w-px bg-border" />
            <div className="text-sm">180% Avg. Conversion Increase</div>
          </div>
        </div>
        
        <button 
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to{" "}
              <span className="gradient-text">Succeed on Shopify</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom design to performance optimization, we provide comprehensive Shopify services 
              that drive real results for your business.
            </p>
          </div>
          
          <BentoGrid />
        </div>
      </section>

      {/* Case Studies Slideshow */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results from{" "}
              <span className="gradient-text">Real Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've transformed businesses with our proven Shopify expertise and data-driven approach.
            </p>
          </div>
          
          <ModernSlideshow />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and see how we can help transform your Shopify store.
            </p>
            <Button className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity">
              Contact Us Today
            </Button>
          </div>
          <div className="pt-8 border-t border-border/20 text-muted-foreground">
            <p>&copy; 2024 Shopify Expert Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;