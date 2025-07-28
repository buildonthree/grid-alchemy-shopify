import { BentoGrid } from "@/components/BentoGrid";
import { ModernSlideshow } from "@/components/ModernSlideshow";
import { SignupForm } from "@/components/SignupForm";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import beforeStore from "@/assets/before-store.jpg";
import afterStore from "@/assets/after-store.jpg";

const Index = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background snap-y snap-mandatory overflow-y-scroll">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden snap-start">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 w-fit">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Shopify Expert Services
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your{" "}
                <span className="gradient-text">Shopify Store</span>{" "}
                Into a Sales Machine
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Expert Shopify design, optimization, and consulting services that boost conversions, 
                improve performance, and grow your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
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
                  asChild
                >
                  <Link to="/success-stories">View Success Stories</Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm">5.0 Rating</span>
                </div>
                <div className="h-4 w-px bg-border hidden sm:block" />
                <div className="text-sm">50+ Stores Optimized</div>
                <div className="h-4 w-px bg-border hidden sm:block" />
                <div className="text-sm">180% Avg. Conversion Increase</div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroBackground} 
                  alt="Shopify store optimization example"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-15 blur-2xl" />
            </div>
          </div>
        </div>
        
        <button 
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20 px-6 snap-start">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Transformation Showcase
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See the{" "}
              <span className="gradient-text">Dramatic Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Witness the transformation from outdated stores to conversion-optimized powerhouses.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider 
              beforeImage={beforeStore}
              afterImage={afterStore}
              beforeAlt="Outdated Shopify store design"
              afterAlt="Modern, optimized Shopify store design"
              className="animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 snap-start">
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
      <section className="py-20 px-6 bg-muted/20 snap-start">
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

      {/* Contact Form Section */}
      <section className="py-20 px-6 snap-start">
        <div className="max-w-7xl mx-auto">
          <SignupForm />
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