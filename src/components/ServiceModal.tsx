import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    price: string;
    duration: string;
    includes: string[];
  };
}

export const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl glass-effect border-border/20">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl gradient-text">{service.title}</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-muted-foreground text-lg">{service.description}</p>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bento-card p-4">
              <h4 className="font-semibold text-primary mb-2">Investment</h4>
              <p className="text-2xl font-bold">{service.price}</p>
            </div>
            <div className="bento-card p-4">
              <h4 className="font-semibold text-primary mb-2">Timeline</h4>
              <p className="text-2xl font-bold">{service.duration}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Key Features</h4>
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">What's Included</h4>
            <ul className="space-y-2">
              {service.includes.map((item, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};