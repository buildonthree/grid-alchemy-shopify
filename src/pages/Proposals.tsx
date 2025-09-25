import { Navigation } from "@/components/Navigation";

const Proposals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Proposals Page */}
      <section className="pt-20 pb-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your <span className="gradient-text">Custom Proposal</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Answer a few questions about your store and get a detailed, personalized optimization proposal with timeline and pricing
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/20 overflow-hidden shadow-2xl">
            <iframe 
              src="https://claude.site/public/artifacts/ca78502a-7b15-46c4-88ff-e4f2911edeb4/embed" 
              title="Custom Proposal Generator" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              allow="clipboard-write" 
              allowFullScreen
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proposals;