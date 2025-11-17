import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const VitalinNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#tentang" },
    { label: "Manfaat", href: "#manfaat" },
    { label: "Galeri", href: "#galeri" },
    { label: "Sertifikasi", href: "#sertifikasi" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Pemesanan", href: "#pemesanan" },
    { label: "Kontak", href: "#kontak" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-gold">
            Vitalin Platinum
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button 
              size="sm" 
              className="bg-gold hover:bg-gold-dark text-primary-foreground rounded-full"
              onClick={() => window.open('https://wa.me/6289513980460', '_blank')}
            >
              Pesan Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-2 text-foreground hover:text-gold hover:bg-gold-light transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4">
                <Button 
                  className="w-full bg-gold hover:bg-gold-dark text-primary-foreground rounded-full"
                  onClick={() => {
                    window.open('https://wa.me/6289513980460', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Pesan Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
