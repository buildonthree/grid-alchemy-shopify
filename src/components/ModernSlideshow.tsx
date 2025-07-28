import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "E-commerce Revolution",
    subtitle: "Store Transformation",
    description: "Complete redesign that increased conversion rates by 240% in just 3 months",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    color: "from-purple-600 to-blue-600"
  },
  {
    id: 2,
    title: "Performance Optimization",
    subtitle: "Speed Enhancement",
    description: "Reduced loading time by 60% while maintaining beautiful design aesthetics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 3,
    title: "Mobile-First Design",
    subtitle: "Responsive Excellence",
    description: "Created seamless mobile experience driving 85% mobile conversion rate",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    color: "from-indigo-600 to-purple-600"
  },
  {
    id: 4,
    title: "Conversion Optimization",
    subtitle: "Sales Maximization",
    description: "A/B tested checkout flow optimization resulting in 180% revenue increase",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80",
    color: "from-purple-600 to-pink-600"
  }
];

export const ModernSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden rounded-3xl">
      {/* Slides Container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full flex-shrink-0">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-80`} />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <div className="max-w-2xl">
                  <div className="text-sm font-medium tracking-wide uppercase mb-4 opacity-90">
                    {slide.subtitle}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};