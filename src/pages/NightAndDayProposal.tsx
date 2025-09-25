import { Navigation } from "@/components/Navigation";
import { CheckCircle } from "lucide-react";

const NightAndDayProposal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-3xl p-12 text-center mb-8">
            <p className="text-sm font-bold mb-2 opacity-90">PROPOSAL</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NIGHT & DAY MARKETING CAMPAIGN</h1>
            <p className="text-lg opacity-90">Specialized marketing to help reach expecting mothers</p>
          </div>

          {/* Content */}
          <div className="bg-card rounded-3xl border border-border/20 shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6">Hi Sarah,</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I understand you&apos;re looking to connect with mothers aged 26-40 who are pregnant or in early postpartum - specifically those with United HealthCare PPO and Carrot fertility benefits at companies like Qualcomm. This is a very specific and valuable audience that requires targeted expertise, and I can help you reach them effectively while expanding Night & Day&apos;s digital presence.
                </p>
                
                <h2 className="text-2xl font-bold text-primary mb-8 pt-8 border-t border-border/20">
                  Tailored Solution for Night & Day
                </h2>
              </div>

              {/* Services Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-card/80 to-card/40 border border-border/20 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Facebook Ads for Night & Day&apos;s Target Audience</h3>
                  <div className="text-muted-foreground mb-6 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Audience research & targeting strategy for expecting mothers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Facebook pixel setup on Squarespace website</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Website audit for conversion optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Campaign structure & ad creation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Initial launch & optimization</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold gradient-text">
                    $500 <span className="text-sm font-normal text-muted-foreground">setup</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-card/80 to-card/40 border border-border/20 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Ongoing Campaign Management</h3>
                  <div className="text-muted-foreground mb-6 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Optimize your $1,500 monthly ad budget</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Track sign-ups and sales conversions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Weekly performance reports</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Scale successful campaigns targeting your ideal clients</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold gradient-text">
                    $750 <span className="text-sm font-normal text-muted-foreground">/month for 3 months</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-card/80 to-card/40 border border-border/20 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Content to Showcase Night & Day&apos;s Expertise</h3>
                  <div className="text-muted-foreground mb-6 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>6 doula & postpartum-focused creatives</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Content that builds trust with expecting mothers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Professional visuals highlighting your services</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Messaging that resonates with working San Diego mothers</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold gradient-text">
                    $350 <span className="text-sm font-normal text-muted-foreground/60 line-through">$500</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-card/80 to-card/40 border border-border/20 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Shopify Store for Night & Day Products</h3>
                  <div className="text-muted-foreground mb-6 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Research pregnancy & postpartum product vendors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Build complete dropshipping system</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Integrate with or migrate from current Squarespace</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Handle all the logistics for product fulfillment</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold gradient-text">$2,000</div>
                </div>
              </div>

              {/* Total Pricing */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">Marketing Package</h3>
                  <div className="text-4xl font-bold mb-4">$3,100</div>
                  <p className="mb-2"><strong>Setup:</strong> $850 • <strong>Monthly:</strong> $750 x 3</p>
                  <p className="text-sm opacity-80">Ads Setup + Content + 3 months management</p>
                </div>

                <div className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">Website Build</h3>
                  <div className="text-4xl font-bold mb-4">$2,000</div>
                  <p className="mb-2"><strong>One-time:</strong> Shopify dropshipping store</p>
                  <p className="text-sm opacity-80">Complete store setup + vendor sourcing</p>
                </div>
              </div>

              {/* Why This Works */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6">Why This Approach Works for Night & Day</h2>
                <div className="bg-muted/30 rounded-2xl p-8">
                  <p className="text-foreground leading-relaxed mb-6">
                    <strong>Your Challenge:</strong> Night & Day needs to reach very specific San Diego mothers (UnitedHealthcare PPO holders at companies like Qualcomm) while building content beyond your current single reel and potentially expanding into product sales.
                  </p>
                  
                  <p className="text-foreground leading-relaxed mb-6">
                    <strong>My Solution:</strong> I&apos;ll create laser-focused Facebook ads to reach expecting mothers in your target demographic, develop content that showcases Night & Day&apos;s doula expertise, and build the dropshipping infrastructure to complement your services.
                  </p>
                  
                  <p className="text-foreground leading-relaxed">
                    <strong>The Result:</strong> A complete marketing system that converts your $1,500 ad budget into qualified leads for Night & Day while creating an additional revenue stream through curated pregnancy products.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6">Project Timeline</h2>
                
                <div className="space-y-8">
                  <div className="bg-muted/20 rounded-2xl p-6">
                    <h4 className="font-semibold mb-4 text-foreground">Week 1: Understanding Your Audience</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Research UnitedHealthcare PPO targeting options</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Analyze Qualcomm and similar company employees</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 rounded-2xl p-6">
                    <h4 className="font-semibold mb-4 text-foreground">Week 2: Content & Campaigns</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Create 6 pregnancy/postpartum creatives</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Launch Facebook campaigns targeting your specific audience</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 rounded-2xl p-6">
                    <h4 className="font-semibold mb-4 text-foreground">Week 3-4: Shopify Development</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Research pregnancy product vendors</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Build dropshipping store with full logistics setup</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Decide on Shopify migration vs. parallel operation</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 rounded-2xl p-6">
                    <h4 className="font-semibold mb-4 text-foreground">Ongoing: Growth & Optimization</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Optimize your $1,500 monthly budget for best ROI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Scale successful campaigns reaching more qualified leads</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marketing Milestones */}
                <h3 className="text-xl font-bold text-primary mt-12 mb-8">Marketing Campaign Milestones</h3>
                
                <div className="space-y-8">
                  <div className="bg-card/50 border border-border/20 rounded-2xl p-6">
                    <h4 className="font-semibold mb-4 text-foreground">Milestone 1 - October 31st ($1,250)</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Facebook Ads account setup and pixel installation on Squarespace</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Target audience research (UnitedHealthcare PPO, Qualcomm employees, San Diego area)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Create and launch initial ad campaigns</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Deliver 6 custom content creatives</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Week 1-2 campaign optimization and initial performance report</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card/50 border border-border/20 rounded-2xl p-6">
                    <h4 className="font-semibold mb-4 text-foreground">Milestone 2 - November 30th ($750)</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">A/B test ad creatives and audiences</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Optimize campaigns based on performance data</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Scale successful ad sets within budget</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Mid-month performance review and strategy adjustment</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Monthly comprehensive report with recommendations</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card/50 border border-border/20 rounded-2xl p-6">
                    <h4 className="font-semibold mb-4 text-foreground">Milestone 3 - December 31st ($750)</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Advanced audience testing (lookalike audiences, interest stacking)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Campaign refinement for best-performing demographics</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Final optimization for maximum ROI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Complete campaign analysis and handover documentation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Strategy recommendations for continued growth</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Grow Night & Day&apos;s Reach?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sarah, I understand the unique challenge of connecting with educated, working mothers who need doula services in San Diego. With 5+ years in Shopify design and digital marketing, I&apos;ve helped businesses like Night & Day turn targeted advertising into meaningful client relationships.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>Your next step:</strong> Let&apos;s discuss how we can make your $1,500 ad budget work harder for Night & Day and get your product sales strategy sorted out. I&apos;m excited to help you expand beyond that single reel and build a complete marketing ecosystem.
                </p>
                <p className="text-muted-foreground leading-relaxed italic">
                  Questions about targeting UnitedHealthcare clients in San Diego or the Shopify integration with your current site? I&apos;d love to chat about the specifics for Night & Day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightAndDayProposal;