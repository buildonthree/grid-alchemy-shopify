import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Users, ShoppingCart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const successStories = [
  {
    id: 1,
    title: "E-commerce Revolution",
    client: "Premium Fashion Boutique",
    category: "Fashion & Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    challenge: "Outdated design with poor mobile experience and low conversion rates",
    solution: "Complete redesign with mobile-first approach, optimized checkout flow, and performance improvements",
    results: {
      conversionIncrease: "240%",
      revenueGrowth: "180%",
      pageSpeedImprovement: "60%",
      timeline: "3 months"
    },
    description: "A complete transformation of an established fashion boutique's online presence. We rebuilt their entire Shopify store with a focus on modern design, mobile optimization, and conversion rate optimization. The new design features a clean, sophisticated layout that showcases their premium products beautifully while maintaining fast loading speeds and seamless user experience across all devices.",
    testimonial: "The team delivered beyond our expectations. Our sales have tripled since the redesign, and customer feedback has been overwhelmingly positive.",
    clientName: "Sarah Johnson, CEO"
  },
  {
    id: 2,
    title: "Performance Optimization",
    client: "Tech Accessories Store",
    category: "Electronics & Tech",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    challenge: "Slow loading times and high bounce rates affecting sales",
    solution: "Comprehensive performance audit, code optimization, and implementation of best practices",
    results: {
      conversionIncrease: "85%",
      revenueGrowth: "120%",
      pageSpeedImprovement: "70%",
      timeline: "6 weeks"
    },
    description: "This project focused on dramatically improving site performance for a growing tech accessories retailer. We conducted a thorough performance audit, optimized images and code, implemented lazy loading, and restructured the site architecture. The result was a lightning-fast shopping experience that significantly reduced bounce rates and improved customer satisfaction.",
    testimonial: "Our site is now blazing fast, and we've seen immediate improvements in both user engagement and sales conversions.",
    clientName: "Mike Chen, Founder"
  },
  {
    id: 3,
    title: "Mobile-First Redesign",
    client: "Artisan Jewelry Brand",
    category: "Jewelry & Accessories",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    challenge: "Poor mobile experience with only 15% mobile conversion rate",
    solution: "Mobile-first design strategy with touch-optimized interface and streamlined checkout",
    results: {
      conversionIncrease: "320%",
      revenueGrowth: "250%",
      pageSpeedImprovement: "50%",
      timeline: "8 weeks"
    },
    description: "Recognizing that 75% of their traffic came from mobile devices, we completely reimagined this jewelry brand's mobile experience. The new design features large, touch-friendly buttons, simplified navigation, and a streamlined checkout process specifically optimized for mobile users. High-quality product photography and zoom functionality showcase the intricate details of their handcrafted pieces.",
    testimonial: "The mobile redesign has been a game-changer. Our mobile sales now account for 85% of total revenue, up from just 15%.",
    clientName: "Emma Rodriguez, Creative Director"
  },
  {
    id: 4,
    title: "Conversion Optimization",
    client: "Health & Wellness Brand",
    category: "Health & Beauty",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80",
    challenge: "Good traffic but low conversion rates and abandoned carts",
    solution: "A/B tested checkout optimization, trust signals, and persuasive design elements",
    results: {
      conversionIncrease: "180%",
      revenueGrowth: "160%",
      pageSpeedImprovement: "40%",
      timeline: "10 weeks"
    },
    description: "This health and wellness brand had significant traffic but struggled with conversions. Through extensive A/B testing, we optimized their checkout flow, added trust signals, implemented social proof elements, and created urgency-driven design components. We also simplified the product selection process and added detailed ingredient information to build customer confidence.",
    testimonial: "The conversion optimization work has transformed our business. We're now converting visitors at rates we never thought possible.",
    clientName: "Dr. Lisa Park, Founder"
  }
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/20 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <Button asChild>
            <Link to="/">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
            Success Stories
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real Results from{" "}
            <span className="gradient-text">Real Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover how we've helped businesses transform their Shopify stores and achieve 
            extraordinary growth through expert design, optimization, and strategic improvements.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Stores Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">240%</div>
              <div className="text-muted-foreground">Avg. Conversion Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-muted-foreground">Additional Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {successStories.map((story, index) => (
              <div key={story.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Badge variant="outline" className="mb-4">
                    {story.category}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {story.title}
                  </h2>
                  <h3 className="text-xl text-primary font-semibold mb-6">
                    {story.client}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground">{story.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4 text-center">
                          <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary">{story.results.conversionIncrease}</div>
                          <div className="text-sm text-muted-foreground">Conversion Increase</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 text-center">
                          <ShoppingCart className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary">{story.results.revenueGrowth}</div>
                          <div className="text-sm text-muted-foreground">Revenue Growth</div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      "{story.testimonial}"
                      <footer className="mt-2 text-sm font-medium text-foreground">
                        — {story.clientName}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your{" "}
            <span className="gradient-text">Success Story</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join these successful businesses and transform your Shopify store into a conversion machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;