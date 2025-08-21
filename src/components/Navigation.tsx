import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", action: () => scrollToSection("hero") },
    { label: "Services", action: () => scrollToSection("services") },
    { label: "About", action: () => scrollToSection("about") },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">GA</span>
            </div>
            <span className="text-xl font-bold gradient-text">Grid Alchemy</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-smooth relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className="text-muted-foreground hover:text-foreground transition-smooth relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/20">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-foreground transition-smooth block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={item.action}
                      className="text-muted-foreground hover:text-foreground transition-smooth text-left py-2 w-full"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};