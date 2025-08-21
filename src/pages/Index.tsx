import { Navigation } from "@/components/Navigation";
import { BentoGrid } from "@/components/BentoGrid";
import { ModernSlideshow } from "@/components/ModernSlideshow";
import { SignupForm } from "@/components/SignupForm";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FloatingIconsHero } from "@/components/floating-icons-hero-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Star, ArrowDown, Facebook, CheckCircle, Users, Target, Zap, Award, Clock, Shield } from "lucide-react";
import { MailchimpIcon, KlaviyoIcon, GoogleIcon, SpotifyIcon, YouTubeIcon, AppleIcon, MicrosoftIcon, FacebookIcon } from "@/components/custom-icons";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import beforeStore from "@/assets/before-store.jpg";
import afterStore from "@/assets/after-store.jpg";
import developerHeadshot from "@/assets/developer-headshot.jpg";

const Index = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
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
                Built with Purpose{" "}
                <span className="gradient-text">Designed to Perform</span>{" "}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Hi I’m Jacob — a Shopify expert who keeps it simple, clean, and intentional.
              From design to performance, I help stores run smoother and convert better — without the agency noise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity px-8 py-4 text-lg"
                  onClick={scrollToServices}
                >
                  See What I Do
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

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Photo and Personal Touch */}
            <div className="space-y-8">
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={developerHeadshot} 
                    alt="Jacob - Shopify Expert & E-commerce Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full opacity-20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full opacity-15 blur-xl" />
              </div>
              
              {/* Certifications & Credentials */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20">
                <h3 className="text-lg font-semibold mb-4 gradient-text">Certifications & Expertise</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Shopify Expert Certified
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Google Analytics Certified
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Conversion Rate Optimization
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Web Performance Specialist
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Story and Experience */}
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <Users className="w-4 h-4 mr-2" />
                  About Jacob
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Person Behind <span className="gradient-text">Grid Alchemy</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hi, I'm Jacob! I started my journey in e-commerce back in 2018 when I helped my first client 
                    increase their store's conversion rate by 240% in just 3 months. That moment changed everything 
                    for me — I realized the incredible impact that thoughtful design and strategic optimization 
                    could have on real businesses.
                  </p>
                  <p>
                    Since then, I've worked with over 50 Shopify stores, from bootstrapped startups to 7-figure 
                    brands. What I've learned is that success isn't about following the latest trends — it's 
                    about understanding your customers and creating experiences that genuinely serve them.
                  </p>
                  <p>
                    I believe in keeping things simple, clean, and intentional. No fluff, no unnecessary complexity. 
                    Just results-driven solutions that help your business grow.
                  </p>
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bento-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">5+ Years</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Dedicated to Shopify development and e-commerce optimization
                    </p>
                  </CardContent>
                </Card>

                <Card className="bento-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">180% Average</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Conversion rate improvement across client stores
                    </p>
                  </CardContent>
                </Card>

                <Card className="bento-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">50+ Stores</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Successfully optimized and launched
                    </p>
                  </CardContent>
                </Card>

                <Card className="bento-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">24/7 Support</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ongoing maintenance and optimization support
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* What Makes Me Different */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border border-border/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">What Makes Me Different</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>No Agency Overhead:</strong> You work directly with me — faster decisions, personalized attention</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Data-Driven Approach:</strong> Every decision is backed by analytics and user behavior insights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Long-term Partnership:</strong> I'm here for the journey, not just the project</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Transparent Communication:</strong> Regular updates, clear timelines, honest feedback</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 px-6 bg-muted/20 snap-start">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Trusted by Growing Brands
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven Track Record of{" "}
              <span className="gradient-text">Success</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="border-border/20 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">180%</div>
                <p className="text-sm text-muted-foreground">Avg Conversion Boost</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">48hrs</div>
                <p className="text-sm text-muted-foreground">Average Response Time</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">5.0</div>
                <p className="text-sm text-muted-foreground">Client Rating</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-8">Shopify Partner • Plus Certified • Performance Expert</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Shopify Plus Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Theme Development Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>3+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Process Section */}
      <section className="py-20 px-6 snap-start">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                My Approach
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simple Process,{" "}
                <span className="gradient-text">Powerful Results</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I believe great Shopify stores aren't built with complexity—they're built with intention. 
                Every line of code, every design choice, and every optimization serves a purpose: converting visitors into customers.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Discovery & Analysis</h3>
                    <p className="text-muted-foreground">Deep dive into your current setup, goals, and challenges to create a tailored strategy.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Strategic Implementation</h3>
                    <p className="text-muted-foreground">Clean, efficient execution focused on performance, user experience, and conversion optimization.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Testing & Optimization</h3>
                    <p className="text-muted-foreground">Data-driven refinements to ensure your store performs at its absolute best.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border/20">
                <h3 className="text-xl font-bold mb-6">What Makes Me Different</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">No agency overhead—you work directly with me</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Focus on performance, not just pretty designs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Transparent communication throughout the project</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Long-term partnership mindset</span>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Third Party Services Section */}
      <FloatingIconsHero
        title="From Confused to Connected"
        subtitle="Setting up integrations shouldn't slow down your growth. From pixels to automations — whether you want guidance on best practices or just want it done, I've got you covered."
        ctaText="Let's Get You Plugged In"
        ctaHref="#services"
        badge={
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 w-fit mx-auto">
            <ShoppingBag className="w-4 h-4 mr-2" />
            App Integration Services
          </Badge>
        }
        icons={[
          { id: 1, icon: MailchimpIcon, className: "top-20 left-10" },
          { id: 2, icon: FacebookIcon, className: "top-32 right-20" },
          { id: 3, icon: GoogleIcon, className: "top-48 left-1/4" },
          { id: 4, icon: KlaviyoIcon, className: "top-64 right-1/3" },
          { id: 5, icon: YouTubeIcon, className: "bottom-32 left-20" },
          { id: 6, icon: SpotifyIcon, className: "bottom-48 right-1/4" },
          { id: 7, icon: AppleIcon, className: "bottom-20 left-1/3" },
          { id: 8, icon: MicrosoftIcon, className: "top-1/2 left-10" },
        ]}
      />


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

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted/20 snap-start">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Got Questions?{" "}
              <span className="gradient-text">I've Got Answers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Clear answers to common questions about working together and my Shopify services.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border/20 rounded-lg px-6 bg-background/50">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">How long does a typical Shopify project take?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                Most projects are completed within 2-6 weeks, depending on complexity. Simple optimizations and fixes can be done within days, while custom theme development or major redesigns typically take 4-6 weeks. I always provide a clear timeline during our initial consultation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-border/20 rounded-lg px-6 bg-background/50">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">Do you work with Shopify Plus stores?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                Absolutely! I'm a certified Shopify Plus partner and have extensive experience with enterprise-level stores. Whether you need complex customizations, advanced integrations, or performance optimization at scale, I can help.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-border/20 rounded-lg px-6 bg-background/50">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">What's included in your ongoing support?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                I offer flexible ongoing support packages that include bug fixes, minor updates, performance monitoring, and priority support. Think of me as your dedicated Shopify partner—available when you need help scaling or optimizing your store.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-border/20 rounded-lg px-6 bg-background/50">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">Can you help with app integrations and third-party tools?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                Yes! I specialize in integrating marketing tools like Klaviyo, Google Analytics, Facebook Pixel, and many others. I focus on clean implementations that don't slow down your site while ensuring accurate data tracking and seamless functionality.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-border/20 rounded-lg px-6 bg-background/50">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">How do you approach mobile optimization?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                Mobile-first is my standard approach. With over 60% of e-commerce traffic coming from mobile devices, I ensure your store looks and performs flawlessly on all screen sizes. This includes optimized images, touch-friendly interfaces, and lightning-fast load times.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border border-border/20 rounded-lg px-6 bg-background/50">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">What's your pricing structure?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                I offer both project-based and hourly pricing depending on your needs. Small optimizations start at $500, while complete custom themes range from $3,000-$8,000. I always provide a detailed quote upfront with no hidden fees—transparency is key to a successful partnership.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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