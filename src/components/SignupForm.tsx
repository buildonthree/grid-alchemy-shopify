import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, User, Building, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
          <Mail className="w-4 h-4 mr-2" />
          Get Started Today
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your{" "}
          <span className="gradient-text">Shopify Store?</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Fill out the form below and we'll get back to you with a custom proposal for your project.
        </p>
      </div>

      <Card className="backdrop-blur-xl bg-card/50 border-primary/20 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Tell Us About Your Project
          </CardTitle>
          <CardDescription>
            Help us understand your needs so we can provide the best solution for your Shopify store.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="John Doe"
                  required
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@company.com"
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your Company"
                  className="pl-10 bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Interested In *</Label>
              <Select 
                value={formData.service} 
                onValueChange={(value) => handleInputChange("service", value)}
                required
              >
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom-design">Custom Store Design</SelectItem>
                  <SelectItem value="performance-optimization">Performance Optimization</SelectItem>
                  <SelectItem value="conversion-optimization">Conversion Rate Optimization</SelectItem>
                  <SelectItem value="store-audit">Store Audit & Analysis</SelectItem>
                  <SelectItem value="consulting">Shopify Consulting</SelectItem>
                  <SelectItem value="ongoing-support">Ongoing Support & Maintenance</SelectItem>
                  <SelectItem value="other">Other / Multiple Services</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Project Details</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your current store, goals, timeline, and any specific requirements..."
                  className="pl-10 min-h-[120px] bg-background/50 resize-none"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
            >
              Send Project Request
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              We typically respond within 24 hours with a detailed proposal and next steps.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};