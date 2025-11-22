import { Navigation } from "@/components/Navigation";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const NightAndDayReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-3xl p-12 text-center mb-8">
            <p className="text-sm font-bold mb-2 opacity-90">PROGRESS REPORT</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Facebook Ads Campaign Setup</h1>
            <p className="text-lg opacity-90">Night & Day San Diego - Milestone 1 Update</p>
            <p className="text-sm opacity-75 mt-2">Report Date: November 22, 2025</p>
          </div>

          {/* Executive Summary */}
          <div className="bg-card rounded-3xl border border-border/20 shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Executive Summary</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Significant progress has been made on the Facebook Ads campaign setup for Night & Day San Diego. The audience targeting infrastructure is complete, the Meta Pixel is actively tracking conversions, and campaigns are fully structured and ready for launch pending final billing configuration.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-muted/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">225K</div>
                <div className="text-sm text-muted-foreground">Target Audience Pool</div>
              </div>
              <div className="bg-muted/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">596</div>
                <div className="text-sm text-muted-foreground">Page Views Tracked</div>
              </div>
              <div className="bg-muted/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">30</div>
                <div className="text-sm text-muted-foreground">Total Conversions</div>
              </div>
            </div>
          </div>

          {/* Detailed Progress */}
          <div className="bg-card rounded-3xl border border-border/20 shadow-lg overflow-hidden mb-8">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-primary mb-8">Deliverables Status</h2>

              {/* Audience Research */}
              <div className="mb-8 pb-8 border-b border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Audience Research & Targeting Strategy</h3>
                    <div className="inline-block bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Complete
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Successfully developed a comprehensive targeting strategy focused on expecting mothers and new moms in the San Diego area. The audience pool has been refined to approximately 225,000 women who match Night & Day's ideal client profile.
                    </p>
                    
                    <div className="bg-muted/30 rounded-xl p-6 space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Audience Parameters:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Age Range</p>
                            <p className="font-medium text-foreground">18-40 years</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Gender</p>
                            <p className="font-medium text-foreground">Women</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Location</p>
                            <p className="font-medium text-foreground">San Diego Metropolitan Area</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Estimated Reach</p>
                            <p className="font-medium text-foreground">190,700 - 224,300</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Interest Targeting:</h4>
                        <div className="flex flex-wrap gap-2">
                          {["Motherhood", "Baby shower", "Parenting", "Baby food", "Babyshop", "Mamas & Papas", "Baby monitor", "Diaper", "Baby bottle", "Bassinet", "Diaper bag", "Single-family detached home", "Pampers", "Huggies or Child care"].map((interest) => (
                            <span key={interest} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Relationship Status:</h4>
                        <p className="text-foreground">Single or Married, Parents (up to 12 months)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facebook Pixel */}
              <div className="mb-8 pb-8 border-b border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Facebook Pixel Installation & Configuration</h3>
                    <div className="inline-block bg-yellow-500/10 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Partially Complete - Action Required
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Meta Pixel has been successfully integrated into the Night & Day Squarespace website and is actively tracking critical conversion events. Core functionality is operational, with opportunities for enhanced page-level tracking pending additional platform access.
                    </p>
                    
                    <div className="bg-muted/30 rounded-xl p-6 space-y-4 mb-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Currently Tracking (Active)
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-foreground">PageView Events</span>
                            <span className="font-bold text-primary">596 events</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-foreground">Initiate Checkout</span>
                            <span className="font-bold text-primary">17 events</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-foreground">Schedule (Booking)</span>
                            <span className="font-bold text-primary">7 events</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-foreground">Purchase</span>
                            <span className="font-bold text-primary">6 events</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                      <h4 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-yellow-600" />
                        Enhancement Opportunity
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Advanced page-specific tracking capabilities are available but require additional Squarespace account permissions. Based on platform documentation, this appears to be an access-level limitation rather than a technical constraint.
                      </p>
                      <p className="text-foreground text-sm font-medium">
                        <strong>Next Step:</strong> We recommend reviewing Squarespace account permissions to enable granular page-level tracking for enhanced campaign optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Website Audit */}
              <div className="mb-8 pb-8 border-b border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Website Conversion Optimization Audit</h3>
                    <div className="inline-block bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Complete
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive audit performed on the Night & Day Squarespace website. The pixel data reveals strong engagement metrics with 596 page views generating 30 total conversion events, indicating effective user flow and call-to-action placement. Recommendations for A/B testing will be provided during the optimization phase.
                    </p>
                  </div>
                </div>
              </div>

              {/* Campaign Structure */}
              <div className="mb-8 pb-8 border-b border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Campaign Structure & Ad Creation</h3>
                    <div className="inline-block bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Complete
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      All campaigns have been architected within Facebook Ads Manager with optimized structure for maximum performance. The campaign framework is designed to maximize conversions within your $1,500 monthly budget allocation.
                    </p>
                    
                    <div className="bg-muted/30 rounded-xl p-6">
                      <h4 className="font-semibold mb-3 text-foreground">Campaign Configuration:</h4>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Objective:</strong> Maximize number of conversions</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Pixel Dataset:</strong> nightanddaysandiego - Pixel</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Primary Conversion Event:</strong> Schedule (booking consultations)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Audience Breadth:</strong> Broad targeting optimized for reach and response</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Initial Launch */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Initial Launch & Optimization</h3>
                    <div className="inline-block bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Ready to Launch - Pending Billing Setup
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      All campaign infrastructure is complete and ready for immediate deployment. The campaigns are fully configured in Ads Manager and poised to begin generating qualified leads for Night & Day's doula services.
                    </p>
                    
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                      <h4 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        Final Step Required
                      </h4>
                      <p className="text-foreground text-sm mb-2">
                        To activate the campaigns and begin reaching expecting mothers in San Diego, a payment method needs to be added to the Facebook Ads billing account.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-foreground">Action Item:</strong> Please add a credit card to the Meta Business Suite billing section. Once completed, campaigns can be launched immediately and optimization will begin within 24-48 hours as data accumulates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Immediate Next Steps</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Add Payment Method to Meta Ads Account</h3>
                  <p className="text-muted-foreground text-sm">Enable billing to activate campaign launch</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Review Squarespace Access Permissions</h3>
                  <p className="text-muted-foreground text-sm">Enable enhanced page-level tracking for deeper insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Campaign Launch & Monitoring</h3>
                  <p className="text-muted-foreground text-sm">Begin 24-hour performance monitoring and initial optimization adjustments</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/20">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Timeline:</strong> Upon billing activation, campaigns will launch immediately. Initial performance data will be available within 48 hours, with the first optimization cycle scheduled for 7 days post-launch as outlined in Milestone 1 deliverables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightAndDayReport;
