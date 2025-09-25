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
import heroWorkspaceBg from "@/assets/hero-workspace-bg.jpg";
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
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroWorkspaceBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex justify-start">
            {/* Content - Left aligned on desktop */}
            <div className="space-y-8 text-left max-w-4xl">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 w-fit">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Shopify Expert Services
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Built with Purpose{" "}
                <span className="gradient-text">Designed to Perform</span>{" "}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Hi, I'm Jacob — I help Shopify stores load 3x faster and convert 2x better, without the agency overhead.
              No endless meetings, no creative fluff, no surprise costs. Just clean code, smart strategy, and results that show up in your revenue.
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
                  <Link to="/proposals">Get My Proposal</Link>
                </Button>
              </div>
              
              {/* Enhanced Stats Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="group bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <div className="text-2xl font-bold gradient-text">5.0</div>
                  <div className="text-sm text-muted-foreground font-medium">Client Rating</div>
                  <div className="text-xs text-muted-foreground/70">100% satisfaction</div>
                </div>
                
                <div className="group bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground font-medium">Stores Optimized</div>
                  <div className="text-xs text-muted-foreground/70">Across all industries</div>
                </div>
                
                <div className="group bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold gradient-text">180%</div>
                  <div className="text-sm text-muted-foreground font-medium">Avg. Conversion Boost</div>
                  <div className="text-xs text-muted-foreground/70">Within 90 days</div>
                </div>
              </div>
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
                      Web Performance Specialist
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      5+ Years E-commerce
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Story and Experience */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Hi, I'm Jacob
                  <span className="gradient-text block">Your Shopify Partner</span>
                </h2>
                
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    I've been building and optimizing Shopify stores for over 5 years, and I've learned one thing: 
                    most problems are simpler than agencies make them seem.
                  </p>
                  
                  <p>
                    While agencies are busy selling you on complex solutions and monthly retainers, 
                    I focus on what actually moves the needle: fast loading times, clean design, and conversion optimization.
                  </p>
                  
                  <p>
                    My approach is different. I work directly with store owners, keep communication clear, 
                    and deliver results without the corporate markup. No account managers, no creative directors, 
                    just me solving your problems.
                  </p>
                </div>
              </div>
              
              {/* Experience Highlights */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/30 rounded-2xl p-6 border border-border/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="font-semibold">50+ Stores</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Optimized across fashion, electronics, beauty, and lifestyle verticals
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-2xl p-6 border border-border/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-primary" />
                    <span className="font-semibold">180% Avg Increase</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    In conversion rates within 90 days of optimization
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-2xl p-6 border border-border/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-primary" />
                    <span className="font-semibold">3x Faster</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Average page load speed improvement across all projects
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-2xl p-6 border border-border/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-primary" />
                    <span className="font-semibold">5.0 Rating</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Consistently high satisfaction across all client projects
                  </p>
                </div>
              </div>
              
              {/* What Makes Me Different */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-xl font-semibold mb-4 gradient-text">What Makes Me Different</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">No Agency Markup</p>
                      <p className="text-sm text-muted-foreground">Work directly with me, pay for results not overhead</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Performance-First Approach</p>
                      <p className="text-sm text-muted-foreground">Every line of code optimized for speed and conversions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Clear Communication</p>
                      <p className="text-sm text-muted-foreground">Regular updates, honest timelines, no corporate speak</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Forward-Thinking</span> Brands
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join 50+ Shopify store owners who've transformed their online presence and doubled their conversions
            </p>
          </div>

          {/* Stats Grid - More Visual */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl p-8 border border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground font-medium">Stores Optimized</div>
              <div className="text-xs text-muted-foreground/70 mt-1">Across all industries</div>
            </div>

            <div className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl p-8 border border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">180%</div>
              <div className="text-muted-foreground font-medium">Avg. Conversion Boost</div>
              <div className="text-xs text-muted-foreground/70 mt-1">Within 90 days</div>
            </div>

            <div className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl p-8 border border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">3x</div>
              <div className="text-muted-foreground font-medium">Faster Loading</div>
              <div className="text-xs text-muted-foreground/70 mt-1">Page speed optimization</div>
            </div>

            <div className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl p-8 border border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-primary fill-primary" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">5.0</div>
              <div className="text-muted-foreground font-medium">Client Rating</div>
              <div className="text-xs text-muted-foreground/70 mt-1">100% satisfaction</div>
            </div>
          </div>

          {/* Integration Partners - Improved Layout */}
          <div className="bg-gradient-to-br from-card/30 to-card/10 rounded-3xl p-8 border border-border/20">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">Seamless Integration With Your Favorite Tools</h3>
              <p className="text-muted-foreground text-sm">Connect with the platforms you already love</p>
            </div>
            
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center justify-items-center opacity-70 hover:opacity-90 transition-opacity">
              <div className="group p-3 rounded-xl hover:bg-background/50 transition-colors">
                <MailchimpIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="group p-3 rounded-xl hover:bg-background/50 transition-colors">
                <KlaviyoIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="group p-3 rounded-xl hover:bg-background/50 transition-colors">
                <GoogleIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="group p-3 rounded-xl hover:bg-background/50 transition-colors">
                <FacebookIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="group p-3 rounded-xl hover:bg-background/50 transition-colors">
                <SpotifyIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="group p-3 rounded-xl hover:bg-background/50 transition-colors">
                <YouTubeIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="group p-3 rounded-xl hover:bg-background/50 transition-colors">
                <AppleIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="group p-3 rounded-xl hover:bg-background/50 transition-colors">
                <MicrosoftIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom development to performance optimization, I provide comprehensive Shopify solutions that drive real business results
            </p>
          </div>
          
          <BentoGrid />
        </div>
      </section>

      {/* App Integration Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shopify <span className="gradient-text">App Integration</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamlessly connect your favorite tools and platforms to create a unified e-commerce ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-6">
                <MailchimpIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Integrate Mailchimp, Klaviyo, and other email platforms for automated campaigns and customer segmentation.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Automated welcome sequences
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Abandoned cart recovery
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Customer lifecycle campaigns
                </li>
              </ul>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-6">
                <GoogleIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Tracking</h3>
              <p className="text-muted-foreground mb-4">
                Set up Google Analytics, Facebook Pixel, and conversion tracking for data-driven decision making.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Enhanced e-commerce tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Custom conversion funnels
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  ROI measurement setup
                </li>
              </ul>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-6">
                <FacebookIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Commerce</h3>
              <p className="text-muted-foreground mb-4">
                Connect Instagram Shopping, Facebook Shop, and TikTok to expand your sales channels.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Instagram Shopping setup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Facebook dynamic ads
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Social proof integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Before</span> & After
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the dramatic transformation of real Shopify stores and the measurable impact on performance and conversions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <BeforeAfterSlider 
                beforeImage={beforeStore}
                afterImage={afterStore}
                beforeAlt="Store before optimization - slow loading and poor design"
                afterAlt="Store after optimization - fast, clean, and conversion-focused"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Real Results, Real Impact</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  This fashion retailer saw dramatic improvements across all key metrics after a complete store optimization.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-card/30 rounded-xl border border-border/20">
                  <span className="font-medium">Page Load Time</span>
                  <div className="flex items-center gap-2">
                    <span className="text-destructive line-through">8.2s</span>
                    <span className="text-primary font-semibold">2.1s</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-card/30 rounded-xl border border-border/20">
                  <span className="font-medium">Conversion Rate</span>
                  <div className="flex items-center gap-2">
                    <span className="text-destructive line-through">1.2%</span>
                    <span className="text-primary font-semibold">3.4%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-card/30 rounded-xl border border-border/20">
                  <span className="font-medium">Mobile Score</span>
                  <div className="flex items-center gap-2">
                    <span className="text-destructive line-through">32/100</span>
                    <span className="text-primary font-semibold">94/100</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-card/30 rounded-xl border border-border/20">
                  <span className="font-medium">Revenue Impact</span>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-semibold">+180% in 60 days</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10">
                <p className="text-sm text-muted-foreground italic">
                  "Jacob transformed our struggling store into a conversion machine. The attention to detail and performance focus exceeded our expectations."
                </p>
                <p className="text-sm font-medium mt-2">— Sarah Chen, Fashion Retailer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Success</span> Stories
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Real results from real clients. See how strategic optimization and clean development drive measurable business growth.
          </p>
          
          <ModernSlideshow />
          
          <div className="mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity px-8 py-4 text-lg"
            >
              <Link to="/success-stories">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about working with me and my Shopify optimization process
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="timeline" className="bg-card/30 rounded-2xl border border-border/20 px-6">
              <AccordionTrigger className="text-left font-semibold">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most optimization projects are completed within 2-4 weeks, depending on scope. Custom theme development typically takes 4-6 weeks. I provide detailed timelines upfront and keep you updated throughout the process.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="pricing" className="bg-card/30 rounded-2xl border border-border/20 px-6">
              <AccordionTrigger className="text-left font-semibold">
                What's included in your optimization service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Every optimization includes performance analysis, speed improvements, mobile optimization, conversion rate optimization, SEO improvements, and post-launch support. No hidden fees or surprise costs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="guarantee" className="bg-card/30 rounded-2xl border border-border/20 px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do you guarantee results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                I guarantee measurable improvements in page load speed and mobile performance scores. While I can't guarantee specific conversion rate increases (too many variables), my track record shows an average 180% improvement across all projects.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="support" className="bg-card/30 rounded-2xl border border-border/20 px-6">
              <AccordionTrigger className="text-left font-semibold">
                What kind of support do you provide after launch?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                All projects include 30 days of post-launch support for any bugs or issues. I also offer ongoing maintenance packages for stores that want continued optimization and updates.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="experience" className="bg-card/30 rounded-2xl border border-border/20 px-6">
              <AccordionTrigger className="text-left font-semibold">
                What types of stores do you work with?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                I work with stores across all verticals - fashion, electronics, beauty, home goods, and more. Whether you're doing $10K/month or $1M+/month, my optimization approach scales to your needs and budget.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="process" className="bg-card/30 rounded-2xl border border-border/20 px-6">
              <AccordionTrigger className="text-left font-semibold">
                How do we get started?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Simply fill out the contact form below with your store details and goals. I'll review your site and send you a detailed proposal with timeline and pricing within 24 hours. No pressure, no hard sell.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Store?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project and create a custom optimization strategy that drives real results for your Shopify store.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to see what your Shopify store can really do? Send me your details and I'll put together a custom optimization plan.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Quick Response</div>
                    <div className="text-sm text-muted-foreground">I respond to all inquiries within 24 hours</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">No Obligation</div>
                    <div className="text-sm text-muted-foreground">Free consultation and project proposal</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Results-Focused</div>
                    <div className="text-sm text-muted-foreground">Every strategy is tailored to your specific goals</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Contact Form */}
            <SignupForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
