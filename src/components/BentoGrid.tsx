import { useState } from "react";
import { ServiceModal } from "./ServiceModal";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, TrendingUp, Search, Users, Code, Shield } from "lucide-react";

const services = [
  {
    title: "Shopify Store Design",
    description: "Transform your vision into a stunning, high-converting Shopify store that captivates customers and drives sales.",
    features: ["Custom Theme Development", "Mobile-First Design", "Brand Integration", "UX Optimization"],
    price: "Starting at $2,500",
    duration: "2-4 weeks",
    includes: [
      "Custom Shopify theme development",
      "Responsive design across all devices",
      "Brand guideline integration",
      "Product page optimization",
      "Checkout flow enhancement",
      "30 days of post-launch support"
    ],
    icon: Code,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Performance Optimization",
    description: "Supercharge your store's speed and performance to reduce bounce rates and boost conversions.",
    features: ["Speed Optimization", "Core Web Vitals", "Mobile Performance", "SEO Enhancement"],
    price: "Starting at $1,200",
    duration: "1-2 weeks", 
    includes: [
      "Complete speed audit and optimization",
      "Image compression and lazy loading",
      "Code minification and cleanup",
      "Third-party app optimization",
      "Performance monitoring setup",
      "Detailed performance report"
    ],
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Conversion Rate Optimization",
    description: "Increase your store's conversion rate through data-driven optimization and A/B testing.",
    features: ["A/B Testing", "Analytics Setup", "User Experience", "Conversion Funnels"],
    price: "Starting at $1,800",
    duration: "3-6 weeks",
    includes: [
      "Conversion audit and analysis",
      "A/B testing implementation",
      "User behavior tracking setup",
      "Checkout optimization",
      "Product page enhancements",
      "Monthly performance reports"
    ],
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Store Audit & Consulting",
    description: "Get expert insights and actionable recommendations to optimize every aspect of your Shopify store.",
    features: ["Technical Audit", "UX Review", "Performance Analysis", "Strategic Recommendations"],
    price: "Starting at $800",
    duration: "1 week",
    includes: [
      "Comprehensive store audit",
      "Technical performance review",
      "UX/UI analysis and recommendations",
      "SEO and accessibility check",
      "Conversion optimization suggestions",
      "Detailed action plan document"
    ],
    icon: Search,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "App Integration & Development",
    description: "Seamlessly integrate third-party apps or develop custom solutions for your unique business needs.",
    features: ["Custom Apps", "API Integration", "Workflow Automation", "Third-party Connections"],
    price: "Starting at $2,000",
    duration: "2-6 weeks",
    includes: [
      "Custom app development",
      "Third-party integrations",
      "API connections and webhooks",
      "Workflow automation setup",
      "Testing and quality assurance",
      "Documentation and training"
    ],
    icon: Shield,
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Ongoing Support & Maintenance",
    description: "Keep your store running smoothly with regular updates, monitoring, and expert support.",
    features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Performance Tracking"],
    price: "Starting at $500/month",
    duration: "Ongoing",
    includes: [
      "24/7 store monitoring",
      "Regular security updates",
      "Bug fixes and maintenance",
      "Performance optimization",
      "Monthly analytics reports",
      "Priority email support"
    ],
    icon: Users,
    gradient: "from-teal-500 to-blue-500"
  }
];

export const BentoGrid = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Featured Service - Large */}
        <div 
          className="md:col-span-2 lg:col-span-2 bento-card-glow cursor-pointer group relative overflow-hidden"
          onClick={() => setSelectedService(services[0])}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${services[0].gradient} text-white`}>
                <Code className="w-6 h-6" />
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary">Featured</Badge>
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-3">{services[0].title}</h3>
            <p className="text-muted-foreground mb-6 text-lg">{services[0].description}</p>
            <div className="flex items-center text-primary group-hover:text-primary-glow transition-colors">
              <span className="font-semibold mr-2">Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Stats Card */}
        <div className="bento-card animate-float bg-gradient-to-br from-primary/10 to-primary-glow/10">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <p className="text-muted-foreground mb-2">Stores Optimized</p>
            <div className="text-2xl font-bold gradient-text mb-2">180%</div>
            <p className="text-muted-foreground">Avg. Conversion Increase</p>
          </div>
        </div>

        {/* Service Cards */}
        {services.slice(1).map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.title}
              className={`bento-card cursor-pointer group relative overflow-hidden ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onClick={() => setSelectedService(service)}
            >
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-4`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.features.slice(0, 2).map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs border-border/40">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium mr-2">View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          );
        })}

        {/* Contact CTA */}
        <div className="md:col-span-2 lg:col-span-3 bento-card bg-gradient-to-r from-primary/20 to-primary-glow/20 text-center animate-pulse-glow">
          <h3 className="text-2xl font-bold gradient-text mb-3">Ready to Transform Your Store?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your Shopify goals and create a custom strategy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-glow text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Start Your Project
            </button>
            <button className="px-8 py-3 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>

      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)}
        service={selectedService || services[0]}
      />
    </>
  );
};