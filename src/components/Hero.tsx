import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Enterprise-Ready ERP Solution
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your 
              <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Business Operations
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
              Streamline processes, boost productivity, and drive growth with our comprehensive ERP platform trusted by 10,000+ enterprises worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="enterprise" size="xl" className="bg-white text-primary hover:bg-gray-50">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 text-blue-100">
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Expert Support</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-2xl opacity-30"></div>
              <img
                src={heroImage}
                alt="Enterprise ERP Dashboard"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;